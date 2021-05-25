import gql from "graphql-tag";

const CreateUser = gql`
  mutation CreateUser($data: UserCreatInput!) {
    createUser(data: $data) {
      id
      name
      email
    }
  }
`;
