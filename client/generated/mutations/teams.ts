import gql from "graphql-tag";

export const CREATE_TEAM = gql`
  mutation CreateTeam(
    $name: String!
    $tournament: TournamentCreateOneWithoutTeamsInput!
    $players: PlayerCreateManyWithoutTeamInput
  ) {
    createTeam(
      data: { name: $name, tournament: $tournament, players: $players }
    ) {
      id
    }
  }
`;

export const DELETE_TEAM = gql`
  mutation DeleteTeam($id: ID!) {
    deleteTeam(where: { id: $id }) {
      id
    }
  }
`;

export const UPDATE_TEAM = gql`
  mutation UpdateTeam(
    $id: ID!
    $name: String!
    $tournament: TournamentUpdateOneRequiredWithoutTeamsInput
    $players: PlayerUpdateManyWithoutTeamInput
  ) {
    updateTeam(
      data: { name: $name, tournament: $tournament, players: $players }
      where: { id: $id }
    ) {
      id
    }
  }
`;
