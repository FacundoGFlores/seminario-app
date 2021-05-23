import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient, ScheduleCreateWithoutSeasonInput } from '@prisma/client';

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
    users(parent, args, context) {
      return context.prisma.users();
    },
    players(parent, args, context) {
      return context.prisma.players();
    },
    player(parent, { where }, context) {
      return context.prisma.player(where);
    },
    teams(parent, { id }, context) {
      return context.prisma.teams({ where: { tournament: id } });
    },
    team(parent, { where }, context) {
      return context.prisma.team(where);
    },
    tournaments(parent, args, context) {
      return context.prisma.tournaments();
    },
    tournament(parent, { where }, context) {
      return context.prisma.tournament(where);
    },
    schedules(parent, args, context) {
      return context.prisma.schedules();
    },
    schedule(parent, { where }, context) {
      return context.prisma.schedule(where);
    },
    matches(parent, args, context) {
      return context.prisma.matches();
    },
    match(parent, { where }, context) {
      return context.prisma.match(where);
    }
  },
  Tournament: {
    teams(parent) {
      return prisma.tournament({ id: parent.id }).teams();
    },
    seasons(parent) {
      return prisma.tournament({ id: parent.id }).seasons();
    }
  },
  Team: {
    players(parent) {
      return prisma.team({ id: parent.id }).players();
    },
    tournament(parent) {
      return prisma.team({ id: parent.id }).tournament();
    }
  },
  Player: {
    team(parent) {
      return prisma.player({ id: parent.id }).team();
    }
  },
  Season: {
    tournament(parent) {
      return prisma.season({ id: parent.id }).tournament();
    },
    schedules(parent) {
      return prisma.season({ id: parent.id }).schedules();
    }
  },
  Schedule: {
    season(parent) {
      return prisma.schedule({ id: parent.id }).season();
    },
    matches(parent) {
      return prisma.schedule({ id: parent.id }).matches();
    }
  },
  Match: {
    schedule(parent) {
      return prisma.match({ id: parent.id }).schedule();
    },
    teamA(parent) {
      return prisma.match({ id: parent.id }).teamA();
    },
    teamB(parent) {
      return prisma.match({ id: parent.id }).teamB();
    }
  },
  Mutation: {
    async createSeason(parent, { data }, context) {
      try {
        const teams = await context.prisma.teams({
          where: { tournament: { id: data.tournament.connect.id } }
        });
        const teamsIds = teams.map(team => team.id);
        const schedules = robin(teamsIds);

        const createSchedules: ScheduleCreateWithoutSeasonInput[] = schedules.map(
          (schedule, index) => {
            const matches = schedule
              .map(match => {
                if (match.length !== 2) return;
                return {
                  teamA: { connect: { id: match[0] } },
                  teamB: { connect: { id: match[1] } }
                };
              })
              .filter(match => match !== undefined);
            const scheduleInput: ScheduleCreateWithoutSeasonInput = {
              week: index,
              matches: { create: matches }
            };
            return scheduleInput;
          }
        );
        return context.prisma.createSeason({
          name: data.name,
          schedules: { create: createSchedules },
          tournament: data.tournament
        });
      } catch (e) {
        console.error(e);
      }
    },
    createUser(parent, { data }, context) {
      return context.prisma.createUser(data);
    },
    createTournament(parent, { data }, context) {
      return context.prisma.createTournament(data);
    },
    createTeam(parent, { data }, context) {
      return context.prisma.createTeam(data);
    },
    updateTeam(parent, { data, where }, context) {
      return context.prisma.updateTeam({
        data,
        where
      });
    },
    updateTournament(parent, { data, where }, context) {
      return context.prisma.updateTournament({
        data,
        where
      });
    },
    deletePlayer(parent, { where }, context) {
      return context.prisma.deletePlayer(where);
    },
    deleteTournament(parent, { where }, context) {
      return context.prisma.deleteTournament(where);
    },
    deleteTeam(parent, { where }, context) {
      return context.prisma.deleteTeam(where);
    }
  }
};

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log("Server is running on http://localhost:3000"));
