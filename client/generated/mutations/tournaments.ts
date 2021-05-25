import gql from "graphql-tag";

export const CREATE_TOURNAMENT = gql`
  mutation CreateTournament($data: TournamentCreateInput!) {
    createTournament(data: $data) {
      id
    }
  }
`;
