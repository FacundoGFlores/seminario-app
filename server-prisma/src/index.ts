import { GraphQLServer } from "graphql-yoga";
import { Prisma, PrismaClient } from "@prisma/client";
// import { ScheduleCreateWithoutSeasonInput } from '.prisma/client';

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
    users(parent, args, context: Context) {
      return context.prisma.user.findMany();
    },
    players(parent, args, context: Context) {
      return context.prisma.player.findMany();
    },
    player(parent, { where }, context: Context) {
      return context.prisma.player.findUnique(where);
    },
    teams(parent, { id }, context: Context) {
      return context.prisma.team.findMany({ where: { tournament: id } });
    },
    team(parent, { where }, context: Context) {
      return context.prisma.team.findUnique(where);
    },
    tournaments(parent, args, context: Context) {
      return context.prisma.tournament.findMany();
    },
    tournament(parent, { where }, context: Context) {
      return context.prisma.tournament.findUnique(where);
    },
    schedules(parent, args, context: Context) {
      return context.prisma.schedule.findMany();
    },
    schedule(parent, { where }, context: Context) {
      return context.prisma.schedule.findUnique(where);
    },
    matches(parent, args, context: Context) {
      return context.prisma.match.findMany();
    },
    match(parent, { where }, context: Context) {
      return context.prisma.match.findUnique(where);
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
    async createSeason(parent, { data }, context: Context) {
      try {
        const teams = await context.prisma.team.findMany({
          where: { tournament: { id: data.tournament.connect.id } },
        });
        const teamsIds = teams.map((team) => team.id);
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
        return context.prisma.season.create({
          data: {
            name: data.name,
            schedules: { create: createSchedules },
            tournament: data.tournament,
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    createUser(parent, { data }, context: Context) {
      return context.prisma.user.create({ data });
    },
    createTournament(parent, { data }, context: Context) {
      return context.prisma.tournament.create({ data });
    },
    createTeam(parent, { data }, context: Context) {
      return context.prisma.team.create({ data });
    },
    updateTeam(parent, { data, where }, context: Context) {
      return context.prisma.team.update({
        data,
        where,
      });
    },
    updateTournament(parent, { data, where }, context: Context) {
      return context.prisma.tournament.update({
        data,
        where,
      });
    },
    deletePlayer(parent, { where }, context: Context) {
      return context.prisma.player.delete(where);
    },
    deleteTournament(parent, { where }, context: Context) {
      return context.prisma.tournament.delete(where);
    },
    deleteTeam(parent, { where }, context: Context) {
      return context.prisma.team.delete(where);
    },
  },
};

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma },
});

server.start(() => console.log("Server is running on http://localhost:4000"));
