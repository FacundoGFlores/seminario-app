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

export const TOURNAMENT_POSITIONS = gql`
  query PositionsByTournament($id: ID!) {
    positionsByTournament(tournamentId: $id) {
      team {
        id
        name
      }
      pg
      pe
      pp
      gf
      gc
      points
    }
  }
`;
