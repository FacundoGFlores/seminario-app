import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTournamentQuery } from "../../../generated/graphql";
import { withApollo } from "../../../lib/apollo";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";

const Season = () => {
  const {
    query: { tournamentId }
  } = useRouter();
  const { data, loading, error } = useTournamentQuery({
    variables: { id: tournamentId as string }
  });

  if (loading) return <div> Loading tournament </div>;
  if (error) return <div> Error </div>;

  const schedules = data.tournament.seasons[0].schedules;

  return (
    <Grid container direction="row" justify="center" spacing={4}>
      {schedules.map(schedule => (
        <Grid item>
          <Card>
            <CardHeader title={`Fecha ${schedule.week + 1}`} />
            <CardContent>
              {schedule.matches.map(match => (
                <div>
                  {match.teamA.name} - {match.teamB.name}
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Season;
