import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../src/Navbar";
import React from "react";
import TournamentCreator from "../src/TournamentCreator";
import { withApollo } from "../lib/apollo";

function Home(props) {
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Navbar />
      <TournamentCreator />
    </div>
  );
}

export default withApollo()(Home);
