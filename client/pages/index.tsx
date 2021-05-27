import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import { Layout } from "../components";
import TournamentCreator from "../components/TournamentCreator";
import { withApollo } from "../lib/apollo";

function Home(props) {
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Layout>
      <TournamentCreator />
    </Layout>
  );
}

export default withApollo()(Home);
