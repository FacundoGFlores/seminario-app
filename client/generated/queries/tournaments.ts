import gql from "graphql-tag";

export const TOURNAMENTS_QUERY = gql`
  query Tournaments {
    tournaments {
      id
      name
      description
    }
  }
`;

export const TOURNAMENT_QUERY = gql`
  query Tournament($id: ID!) {
    tournament(where: { id: $id }) {
      id
      name
      description
      start
      end
    }
  }
`;
