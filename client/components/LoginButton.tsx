import { useUser } from "@auth0/nextjs-auth0";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useCreateUserMutation,
  useGetUserByEmailLazyQuery
} from "../generated/graphql";
import { useSession } from "../hooks/Session";

const LoginButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { push } = useRouter();
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
    console.log({ userSession, user });
    if (userSession) return;
    if (!user) return;
    getUser({ variables: { email: user.email } });
  }, [user]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    push("/api/auth/logout");
    setAnchorEl(null);
  };

  const handleTournaments = () => {
    push("/tournaments");
    setAnchorEl(null);
  };

  if (!userSession?.name)
    return <Button onClick={() => push("/api/auth/login")}>Login</Button>;

  return (
    <>
      <Button onClick={handleClick}>{userSession.name}</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleTournaments}>Mis torneos</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export { LoginButton };
