export const tournaments = "/tournaments";

export const teams = (tournamentId: string) =>
  `/tournaments/${tournamentId}/teams`;
