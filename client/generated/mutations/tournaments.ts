import gql from "graphql-tag";

export const CREATE_TOURNAMENT = gql`
  mutation createTournamentWithSchedule($data: TournamentCreateInput!) {
    createTournament(data: $data) {
      id
    }
  }
`;

export const DELETE_TOURNAMENT = gql`
  mutation DeleteTournament($id: ID!) {
    deleteTournament(where: { id: $id }) {
      id
    }
  }
`;

export const UPDATE_TOURNAMENT = gql`
  mutation UpdateTournament(
    $name: String!
    $description: String
    $start: DateTime
    $end: DateTime
    $id: ID!
    $owner: UserUpdateOneRequiredWithoutTournamentsInput!
  ) {
    updateTournament(
      data: {
        name: $name
        description: $description
        start: $start
        end: $end
        owner: $owner
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;
