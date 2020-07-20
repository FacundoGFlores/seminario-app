import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { Context } from "./utils";

const resolvers = {
  Query: {
    players(parent, args, context: Context) {
      return context.prisma.players();
    },
    player(parent, { where }, context: Context) {
      return context.prisma.player(where);
    },
    teams(parent, { id }, context: Context) {
      return context.prisma.teams({ where: { tournament: id } });
    },
    team(parent, { where }, context: Context) {
      return context.prisma.team(where);
    },
    tournaments(parent, args, context: Context) {
      return context.prisma.tournaments();
    },
    tournament(parent, { where }, context: Context) {
      return context.prisma.tournament(where);
    }
  },
  Tournament: {
    teams(parent) {
      return prisma.tournament({ id: parent.id }).teams();
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
  Mutation: {
    createUser(parent, { data }, context: Context) {
      return context.prisma.createUser(data);
    },
    createTournament(parent, { data }, context: Context) {
      return context.prisma.createTournament(data);
    },
    createTeam(parent, { data }, context: Context) {
      return context.prisma.createTeam(data);
    },

    updateTeam(parent, { data, where }, context: Context) {
      return context.prisma.updateTeam({
        data,
        where
      });
    },
    updateTournament(parent, { data, where }, context: Context) {
      return context.prisma.updateTournament({
        data,
        where
      });
    },
    deletePlayer(parent, { where }, context: Context) {
      return context.prisma.deletePlayer(where);
    },
    deleteTournament(parent, { where }, context: Context) {
      return context.prisma.deleteTournament(where);
    },
    deleteTeam(parent, { where }, context: Context) {
      return context.prisma.deleteTeam(where);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
