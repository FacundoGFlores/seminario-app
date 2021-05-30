import gql from 'graphql-tag';

export const UPDATE_TEAM_PLAYERS = gql`
  mutation UpdateTeamPlayers($teamId: ID!, $data: PlayerInput!) {
    updateTeamPlayers(teamId: $teamId, data: $data) {
      id
      name
      players {
        id
        name
      }
    }
  }
`;
