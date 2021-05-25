import React, { useState } from "react";
import { User } from "../generated/graphql";

export type PrismaUser = Pick<User, "id" | "name" | "email">;

interface Session {
  user?: PrismaUser;
  setUser: (user: PrismaUser) => void;
}

const PrismaUserContext = React.createContext<Session>({
  user: undefined,
  setUser: () => {}
});

const SessionProvider = ({ children }) => {
  const [prismaUser, setPrismaUser] = useState<PrismaUser | undefined>();

  function handleChangePrismaUser(user: PrismaUser) {
    setPrismaUser(user);
  }

  return (
    <PrismaUserContext.Provider
      value={{ user: prismaUser, setUser: handleChangePrismaUser }}
    >
      {children}
    </PrismaUserContext.Provider>
  );
};

function useSession() {
  const context = React.useContext(PrismaUserContext);

  return context;
}

export { useSession, SessionProvider };
