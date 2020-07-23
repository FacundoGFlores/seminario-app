import {
  Prisma,
  TournamentWhereInput,
  TournamentPromise
} from "./generated/prisma-client";

interface App {
  generateSchedules: (where: TournamentWhereInput) => TournamentPromise;
}
export interface Context {
  prisma: Prisma;
  app: App;
}
