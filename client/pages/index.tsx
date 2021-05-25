import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../src/Navbar";
import React from "react";
import TournamentCreator from "../src/TournamentCreator";
import { withApollo } from "../lib/apollo";

function Home(props) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Navbar />
        <TournamentCreator />
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

export default withApollo()(Home);
