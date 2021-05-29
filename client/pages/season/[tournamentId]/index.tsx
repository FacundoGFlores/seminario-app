import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  Input,
  IconButton
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { lightBlue } from "@material-ui/core/colors";
import {
  useTournamentQuery,
  useUpdateMatchesMutation,
  MatchResult as MatchResultPrisma
} from "../../../generated/graphql";
import { withApollo } from "../../../lib/apollo";
import { Layout } from "../../../components";

const useStyles = makeStyles({
  head: {
    background: lightBlue[800]
  }
});

type MatchResult = {
  [matchId in string]: {
    resultA: number;
    resultB: number;
  };
};

const Season = () => {
  const [matchResults, setMatchResults] = useState<MatchResult | {}>({});

  const classes = useStyles();
  const {
    query: { tournamentId }
  } = useRouter();

  const { data, loading, error } = useTournamentQuery({
    variables: { id: tournamentId as string },
    onCompleted: data => {
      const matches = data.tournament.seasons[0].schedules.reduce(
        (prev, curr) => {
          const matches = curr.matches.reduce(
            (prevMatch, currMatch) => ({
              ...prevMatch,
              [currMatch.id]: {
                resultA: currMatch.resultA,
                resultB: currMatch.resultB
              }
            }),
            {}
          );
          return { ...prev, ...matches };
        },
        {}
      );
      setMatchResults(matches);
    }
  });

  const [updateMatches] = useUpdateMatchesMutation();

  const updateResultA = (matchId: string, resultA: string) => {
    const updatedMatchResults = {
      ...matchResults,
      [matchId]: {
        ...matchResults[matchId],
        resultA: parseInt(resultA ? resultA : "0")
      }
    };

    setMatchResults(updatedMatchResults);
  };

  const updateResultB = (matchId: string, resultB: string) => {
    const updatedMatchResults = {
      ...matchResults,
      [matchId]: {
        ...matchResults[matchId],
        resultB: parseInt(resultB ? resultB : "0")
      }
    };
    setMatchResults(updatedMatchResults);
  };

  function handleSave() {
    const results: MatchResultPrisma[] = Object.keys(matchResults).map(k => ({
      ...matchResults[k],
      matchId: k
    }));
    updateMatches({ variables: { data: results } });
  }

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
                    <TableCell colSpan={4} align="center">
                      {`Fecha ${schedule.week + 1}`}
                      <IconButton onClick={handleSave}>
                        <SaveIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {schedule.matches.map(match => (
                    <TableRow key={match.id}>
                      <TableCell>{match.teamA.name}</TableCell>
                      <TableCell style={{ width: "80px" }}>
                        <Input
                          type="number"
                          value={matchResults[match.id]?.resultA || 0}
                          onChange={e =>
                            updateResultA(match.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell style={{ width: "80px" }}>
                        <Input
                          type="number"
                          value={matchResults[match.id]?.resultB || 0}
                          onChange={e =>
                            updateResultB(match.id, e.target.value)
                          }
                        />
                      </TableCell>
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
