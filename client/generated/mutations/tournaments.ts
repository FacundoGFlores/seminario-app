import gql from 'graphql-tag';

export const CREATE_TOURNAMENT_WITH_SCHEDULE = gql`
  mutation createTournamentWithSchedule($data: TournamentCreateInput!) {
    createTournament(data: $data) {
      id
    }
  }
`;

export const CREATE_TOURNAMENT = gql`
  mutation CreateTournament($data: TournamentCreateInput!) {
    createTournament(data: $data) {
      id
    }
  }
`;

export const UPDATE_TOURNAMENT = gql`
  mutation UpdateTournament($tournamentId: ID!, $data: TournamentUpdateInput!) {
    updateTournament(tournamentId: $tournamentId, data: $data) {
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
