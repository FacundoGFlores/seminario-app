import { GraphQLServer } from "graphql-yoga";
import { Match, Prisma, PrismaClient, Team } from "@prisma/client";
import faker from "faker";

interface Context {
  prisma: PrismaClient;
}

const AUX = "DUMMY";

function robin(ls: string[]) {
  let n = ls.length;
  if (n < 1) return [];
  const lss = ls.slice();
  const rs = [];
  if (n % 2 === 1) {
    lss.push(AUX);
    n += 1;
  }
  for (let j = 0; j < n - 1; j += 1) {
    rs[j] = [];
    for (let i = 0; i < n / 2; i += 1) {
      if (lss[i] !== AUX && lss[n - 1 - i] !== AUX) {
        rs[j].push([lss[i], lss[n - 1 - i]]);
      }
    }
    lss.splice(1, 0, lss.pop());
  }
  return rs;
}

type TournamentPosition = {
  [teamId in string]: {
    team: Team;
    pg: number;
    pe: number;
    pp: number;
    gf: number;
    gc: number;

    points: number;
  };
};

type Position = {
  team: Team;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;

  points: number;
};

const resolvers = {
  Query: {
    tournamentsByUserId(parent, { id }, context: Context) {
      return context.prisma.tournament.findMany({
        where: { AND: { ownerId: id, archived: false } },
      });
    },
    users(parent, args, context: Context) {
      return context.prisma.user.findMany();
    },
    players(parent, args, context: Context) {
      return context.prisma.player.findMany();
    },
    teams(parent, { tournamentId }, context: Context) {
      return context.prisma.team.findMany({ where: { tournamentId } });
    },
    tournaments(parent, args, context: Context) {
      return context.prisma.tournament.findMany({
        where: { archived: false },
      });
    },
    tournament(parent, { id }, context: Context) {
      return context.prisma.tournament.findUnique({ where: { id } });
    },
    matches(parent, args, context: Context) {
      return context.prisma.match.findMany();
    },
    async userByEmail(parent, { email }, context: Context) {
      const users = await context.prisma.user.findMany();
      const userFound = users.filter((user) => user.email === email);
      return userFound[0];
    },
    async positionsByTournament(parent, { tournamentId }, context: Context) {
      const season = await context.prisma.season.findFirst({
        where: { tournamentId },
        include: {
          schedules: {
            include: {
              matches: {
                where: { played: true },
                include: { teamA: true, teamB: true },
              },
            },
          },
        },
      });

      const matches = season.schedules.reduce(
        (prev, curr) => {
          return [...prev, ...curr.matches];
        },
        [] as (Match & {
          teamA: Team;
          teamB: Team;
        })[]
      );

      const positionsObj = matches.reduce((prevPosition, currMatch) => {
        return {
          ...prevPosition,
          [currMatch.teamAId]: {
            team: currMatch.teamA,
            pg:
              (prevPosition[currMatch.teamAId]?.pg || 0) +
              (currMatch.resultA > currMatch.resultB ? 1 : 0),
            pe:
              (prevPosition[currMatch.teamAId]?.pe || 0) +
              (currMatch.resultA == currMatch.resultB ? 1 : 0),
            pp:
              (prevPosition[currMatch.teamAId]?.pp || 0) +
              (currMatch.resultA <= currMatch.resultB ? 1 : 0),

            gf: (prevPosition[currMatch.teamAId]?.gf || 0) + currMatch.resultA,
            gc: (prevPosition[currMatch.teamAId]?.gc || 0) + currMatch.resultB,

            points:
              (prevPosition[currMatch.teamAId]?.points || 0) +
              (currMatch.resultA > currMatch.resultB
                ? 3
                : currMatch.resultA === currMatch.resultB
                ? 1
                : 0),
          },
          [currMatch.teamBId]: {
            team: currMatch.teamB,
            pg:
              (prevPosition[currMatch.teamBId]?.pg || 0) +
              (currMatch.resultB > currMatch.resultA ? 1 : 0),
            pe:
              (prevPosition[currMatch.teamBId]?.pe || 0) +
              (currMatch.resultB == currMatch.resultA ? 1 : 0),
            pp:
              (prevPosition[currMatch.teamBId]?.pp || 0) +
              (currMatch.resultB <= currMatch.resultA ? 1 : 0),

            gf: (prevPosition[currMatch.teamBId]?.gf || 0) + currMatch.resultB,
            gc: (prevPosition[currMatch.teamBId]?.gc || 0) + currMatch.resultA,

            points:
              (prevPosition[currMatch.teamBId]?.points || 0) +
              (currMatch.resultB > currMatch.resultA
                ? 3
                : currMatch.resultB === currMatch.resultA
                ? 1
                : 0),
          },
        };
      }, {} as TournamentPosition);

      const positions: Position[] = Object.keys(positionsObj).map((teamId) => ({
        ...positionsObj[teamId],
      }));
      const sortedPositions = positions.sort(
        (posA, posB) => posB.points - posA.points
      );
      return sortedPositions;
    },
  },
  Tournament: {
    teams(parent) {
      return prisma.tournament.findUnique({ where: { id: parent.id } }).teams();
    },
    seasons(parent) {
      return prisma.tournament
        .findUnique({ where: { id: parent.id } })
        .seasons();
    },
  },
  Team: {
    players(parent) {
      return prisma.team.findUnique({ where: { id: parent.id } }).players();
    },
    tournament(parent) {
      return prisma.team.findUnique({ where: { id: parent.id } }).tournament();
    },
  },
  Player: {
    team(parent) {
      return prisma.player.findUnique({ where: { id: parent.id } }).team();
    },
  },
  Season: {
    tournament(parent) {
      return prisma.season
        .findUnique({ where: { id: parent.id } })
        .tournament();
    },
    schedules(parent) {
      return prisma.season.findUnique({ where: { id: parent.id } }).schedules();
    },
  },
  Schedule: {
    season(parent) {
      return prisma.schedule.findUnique({ where: { id: parent.id } }).season();
    },
    matches(parent) {
      return prisma.schedule.findUnique({ where: { id: parent.id } }).matches();
    },
  },
  Match: {
    schedule(parent) {
      return prisma.match.findUnique({ where: { id: parent.id } }).schedule();
    },
    teamA(parent) {
      return prisma.match.findUnique({ where: { id: parent.id } }).teamA();
    },
    teamB(parent) {
      return prisma.match.findUnique({ where: { id: parent.id } }).teamB();
    },
  },
  Mutation: {
    async updateTeamPlayers(parent, { teamId, data }, context: Context) {
      await context.prisma.player.deleteMany({ where: { teamId } });
      const playerData: { name: string; teamId: string }[] = data.names.map(
        (name) => ({ name, teamId })
      );
      await context.prisma.player.createMany({
        data: playerData,
      });
      return context.prisma.team.findUnique({ where: { id: teamId } });
    },
    async updateMatches(parent, { data }, context: Context) {
      const promises = data.map((match) => {
        return context.prisma.match.update({
          where: { id: match.matchId },
          data: {
            resultA: match.resultA,
            resultB: match.resultB,
            played: true,
          },
        });
      });
      const matches = await Promise.all<Match>(promises);

      const schedule = context.prisma.schedule.findFirst({
        where: { id: matches[0].scheduleId },
      });
      return schedule;
    },
    createUser(parent, { data }, context: Context) {
      return context.prisma.user.create({ data });
    },
    deleteTournament(parent, { tournamentId }, context: Context) {
      return context.prisma.tournament.update({
        where: { id: tournamentId },
        data: { archived: true },
      });
    },
    updateTournament(parent, { data }, context: Context) {
      return context.prisma.tournament.update({
        data: {
          name: data.name,
          start: new Date(data.start),
          end: new Date(data.end),
          description: data.description,
        },
        where: {
          id: data.id,
        },
      });
    },
    async createTournament(parent, { data }, context: Context) {
      if (!data.teams || data.teams.length === 0)
        return context.prisma.tournament.create({ data });
      try {
        let user = null;
        if (!data.owner) {
          user = await context.prisma.user.create({
            data: { name: "anonymous", email: faker.internet.email() },
          });
        } else {
          user = await context.prisma.user.findUnique({
            where: { id: data.owner as string },
          });
        }

        const tournament = await context.prisma.tournament.create({
          data: {
            ...data,
            start: new Date(data.start),
            end: new Date(data.end),
            teams: {
              create: data.teams.map((team) => ({ name: team })),
            },
            owner: { connect: { id: user.id } },
          },
          include: { teams: true },
        });

        const teamsIds = tournament.teams.map((team) => team.id);
        const schedules = robin(teamsIds);

        const positions = teamsIds.map((teamId) =>
          context.prisma.position.create({
            data: {
              teamId,
              tournamentId: tournament.id,
            },
          })
        );

        await Promise.all(positions);

        const createSchedules: Prisma.ScheduleCreateWithoutSeasonInput[] =
          schedules.map((schedule, index) => {
            const matches = schedule
              .map((match) => {
                if (match.length !== 2) return;
                return {
                  teamA: { connect: { id: match[0] } },
                  teamB: { connect: { id: match[1] } },
                };
              })
              .filter((match) => match !== undefined);
            const scheduleInput: Prisma.ScheduleCreateWithoutSeasonInput = {
              week: index,
              matches: { create: matches },
            };
            return scheduleInput;
          });
        await context.prisma.season.create({
          data: {
            name: "season",
            schedules: { create: createSchedules },
            tournament: { connect: { id: tournament.id } },
          },
        });
        return tournament;
      } catch (e) {
        console.error(e);
      }
    },
  },
};

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: `
  type Query {
    tournament(id: ID!): Tournament!
    player(id: ID!): Player!
    team(id: ID!): Team!
    users: [User!]
    players: [Player!]
    tournaments: [Tournament!]
    tournamentsByUserId(id: ID!): [Tournament!]
    teams(tournamentId: ID!): [Team!]
    schedules: [Schedule!]
    matches: [Match!]
    userByEmail(email: String!): User!
    positionsByTournament(tournamentId: ID!): [Position!]
  }

  type Mutation {
    createTournament(data: TournamentCreateInput!): Tournament!
    createUser(data: UserCreatInput!): User!
    updateTournament(data: TournamentUpdateInput!): Tournament!
    updateMatches(data: [MatchResult!]!): Schedule!
    updateTeamPlayers(teamId: ID!, data: PlayerInput!): Team!
    deleteTournament(tournamentId: ID!): Tournament!
  }

  input PlayerInput {
    names: [String!]
  }

  input UpdateMatchWhereInput {
    scheduleId: ID!
  }

  input UserCreatInput {
    name: String!
    email: String!
  }

  input TournamentCreateInput {
    id: ID
    owner: ID
    name: String!
    description: String
    start: String
    end: String
    teams: [String!]
  }

  input TournamentUpdateInput {
    id: ID!
    name: String!
    description: String
    start: String
    end: String
  }
  
  input CreateTeamInput {
    name: [String!]
  }


  type Position {
    team:   Team!
    pg: Int!
    pe: Int!
    pp: Int!
    gf: Int!
    gc: Int!
    points: Int!
  }

  type Tournament {
    id: ID!
    name: String!
    description: String
    start: String
    end: String
    teams: [Team!]
    seasons: [Season!]
    positions: [Position!]
  }
  
  type Season {
    id: ID!
    name: String!
    schedules: [Schedule!]
    tournament: Tournament!
  }
  
  type Schedule {
    id: ID!
    week: Int
    matches: [Match!]
    season: Season!
  }
  
  input MatchResult {
    matchId: String!
    resultA: Int!
    resultB: Int!
  }

  type Match {
    id: ID!
    teamA: Team!
    teamB: Team!
    schedule: Schedule!
    resultA: Int!
    resultB: Int!
  }
  
  type Team {
    id: ID!
    name: String!
    players: [Player!]
    tournament: Tournament!
  }
  
  type Player {
    id: ID!
    name: String!
    team: Team!
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    tournaments: [Tournament!]
  }
  
  `,
  resolvers,

  context: { prisma },
});

server.start(() => console.log("app is running on https://localhost:4000"));
