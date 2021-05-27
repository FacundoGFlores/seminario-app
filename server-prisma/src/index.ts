import { GraphQLServer } from "graphql-yoga";
import { Prisma, PrismaClient } from "@prisma/client";
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

const resolvers = {
  Query: {
    tournamentsByUserId(parent, { id }, context: Context) {
      return context.prisma.tournament.findMany({ where: { ownerId: id } });
    },
    users(parent, args, context: Context) {
      return context.prisma.user.findMany();
    },
    players(parent, args, context: Context) {
      return context.prisma.player.findMany();
    },
    teams(parent, { id }, context: Context) {
      return context.prisma.team.findMany({ where: { tournament: id } });
    },
    tournaments(parent, args, context: Context) {
      return context.prisma.tournament.findMany();
    },
    tournament(parent, { id }, context: Context) {
      return context.prisma.tournament.findUnique({ where: { id } });
    },
    async userByEmail(parent, { email }, context: Context) {
      const users = await context.prisma.user.findMany();
      const userFound = users.filter((user) => user.email === email);
      return userFound[0];
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
    createUser(parent, { data }, context: Context) {
      return context.prisma.user.create({ data });
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
    deleteTournament(parent, { id }, context: Context) {
      return context.prisma.tournament.delete({ where: { id } });
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
    teams: [Team!]
    schedules: [Schedule!]
    matches: [Match!]
    userByEmail(email: String!): User!
  }

  type Mutation {
    createTournament(data: TournamentCreateInput!): Tournament!
    createUser(data: UserCreatInput!): User!
    updateTournament(data: TournamentUpdateInput!): Tournament!
    deleteTournament(id: ID!): Tournament!
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
  
  type Tournament {
    id: ID!
    name: String!
    description: String
    start: String
    end: String
    teams: [Team!]
    seasons: [Season!]
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
  
  type Match {
    id: ID!
    teamA: Team!
    teamB: Team!
    schedule: Schedule!
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
