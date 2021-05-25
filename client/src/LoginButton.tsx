import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import {
  useCreateUserMutation,
  useGetUserByEmailLazyQuery
} from "../generated/graphql";
import { useSession } from "../hooks/Session";

const LoginButton = () => {
  const { user: userSession, setUser } = useSession();

  const { user } = useUser();

  const [createUser] = useCreateUserMutation({
    onCompleted: data => {
      if (!data.createUser) return;
      setUser(data.createUser);
    }
  });

  const [getUser] = useGetUserByEmailLazyQuery({
    onCompleted: data => {
      if (!data.userByEmail) return;
      setUser(data.userByEmail);
    },
    onError: err => {
      createUser({
        variables: {
          data: {
            name: user.name,
            email: user.email
          }
        }
      });
    }
  });

  useEffect(() => {
    if (userSession) return;
    if (!user) return;
    getUser({ variables: { email: user.email } });
  }, [user]);

  if (!userSession) return <div>Loading...</div>;

  if (!userSession.name) return <Button>Login</Button>;

  return <div>{userSession.name}</div>;
};

export { LoginButton };
