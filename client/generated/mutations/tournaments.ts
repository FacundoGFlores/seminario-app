import gql from 'graphql-tag';

export const CREATE_TOURNAMENT = gql`
  mutation CreateTournament($data: TournamentCreateInput!) {
    createTournament(data: $data) {
      id
    }
  }
`;

export const UPDATE_TOURNAMENT = gql`
  mutation UpdateTournament($data: TournamentUpdateInput!) {
    updateTournament(data: $data) {
      id
    }
  }
`;

export const DELETE_TOURNAMENT = gql`
  mutation DeleteTournament($tournamentId: ID!) {
    deleteTournament(tournamentId: $tournamentId) {
      id
    }
  }
`;
