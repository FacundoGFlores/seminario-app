import gql from 'graphql-tag';

export const TEAMS_BY_TOURNAMENT = gql`
  query TeamsByTournament($tournamentId: ID!) {
    teams(tournamentId: $tournamentId) {
      id
      name
      players {
        id
        name
      }
    }
  }
`;
