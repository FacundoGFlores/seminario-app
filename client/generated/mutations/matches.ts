import gql from "graphql-tag";

export const UPDATE_MATCHES = gql`
  mutation UpdateMatches($data: [MatchResult!]!) {
    updateMatches(data: $data) {
      id
    }
  }
`;
