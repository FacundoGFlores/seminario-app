import gql from "graphql-tag";

const CreateUser = gql`
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      name
      email
    }
  }
`;
