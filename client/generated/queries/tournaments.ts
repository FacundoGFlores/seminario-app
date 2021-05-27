import gql from "graphql-tag";

export const TOURNAMENTS_BY_USER_ID_QUERY = gql`
  query TournamentsByUserId($id: ID!) {
    tournamentsByUserId(id: $id) {
      id
      name
      description
      teams {
        id
        name
      }
    }
  }
`;
