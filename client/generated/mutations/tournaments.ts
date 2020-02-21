import gql from "graphql-tag";

export const CREATE_TOURNAMENT = gql`
  mutation CreateTournament(
    $name: String!
    $description: String
    $start: DateTime
    $end: DateTime
    $owner: UserCreateOneWithoutTournamentsInput!
  ) {
    createTournament(
      data: {
        name: $name
        description: $description
        start: $start
        end: $end
        owner: $owner
      }
    ) {
      id
    }
  }
`;
