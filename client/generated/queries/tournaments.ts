import gql from "graphql-tag";

export const TOURNAMENTS_QUERY = gql`
  query Tournaments {
    tournaments {
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
