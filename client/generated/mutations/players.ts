import gql from "graphql-tag";

export const DELETE_PLAYER = gql`
  mutation DeletePlayer($id: ID!) {
    deletePlayer(where: { id: $id }) {
      id
    }
  }
`;
