import gql from "graphql-tag";

export const TOURNAMENT_QUERY = gql`
  query Tournament($id: ID!) {
    tournament(id: $id) {
      id
      name
      description
      start
      end
      teams {
        id
        name
      }
      seasons {
        id
        name
        schedules {
          id
          week
          matches {
            id
            teamA {
              id
              name
            }
            teamB {
              id
              name
            }
            resultA
            resultB
          }
        }
      }
    }
  }
`;
