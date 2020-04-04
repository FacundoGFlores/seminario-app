import gql from "graphql-tag";

export const TEAMS_QUERY = gql`
  query Teams($tournamentId: ID!) {
    teams(where: { tournament: { id: $tournamentId } }) {
      id
      name
      players {
        id
        name
      }
    }
  }
`;

export const TEAM_QUERY = gql`
  query Team($id: ID!) {
    team(where: { id: $id }) {
      id
      name
      players {
        id
        name
      }
    }
  }
`;
