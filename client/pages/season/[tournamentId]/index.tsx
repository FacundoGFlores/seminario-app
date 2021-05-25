import { useRouter } from "next/router";
import React from "react";
import { Grid, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, makeStyles } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { useTournamentQuery } from "../../../generated/graphql";
import { withApollo } from "../../../lib/apollo";
import { Layout } from "../../../components";

const useStyles = makeStyles({
  head: {
    background: `linear-gradient(to bottom, ${lightBlue[400]}, ${lightBlue[100]})`,
  },
});

const Season = () => {
  const classes = useStyles();
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
    <Layout title={`Torneo ${data.tournament.name}`}>
      <Grid container direction="row" justify="center" spacing={4}>
        {schedules.map(schedule => (
          <Grid item>
            <TableContainer component={Paper}>
            <Table>
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell colSpan={4} align="center">{`Fecha ${schedule.week + 1}`}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.matches.map((match) => (
                  <TableRow key={match.id}>
                    <TableCell>{match.teamA.name}</TableCell>
                    <TableCell>{0}</TableCell>
                    <TableCell>{0}</TableCell>
                    <TableCell>{match.teamB.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default withApollo()(Season);
