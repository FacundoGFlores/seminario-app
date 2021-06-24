import { useRouter } from 'next/router';
import React, { useState } from 'react';
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
  IconButton,
  Typography,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import Link from '@material-ui/core/Link';
import { lightBlue } from '@material-ui/core/colors';
import {
  useTournamentQuery,
  useUpdateMatchesMutation,
  MatchResult as MatchResultPrisma,
} from '../../../generated/graphql';
import { withApollo } from '../../../lib/apollo';
import { Layout } from '../../../components';
import { useSession } from '../../../hooks/Session';
import ReactToPdf from 'react-to-pdf';
import { getFlag } from '../../../lib/flags';

const useStyles = makeStyles({
  head: {
    background: lightBlue[800],
  },
});

type MatchResult = {
  [matchId in string]: {
    scheduleId: string;
    resultA: number;
    resultB: number;
  };
};

const Season = () => {
  const ref = React.createRef();

  const [matchResults, setMatchResults] = useState<MatchResult | {}>({});
  const { user } = useSession();
  const classes = useStyles();
  const {
    query: { tournamentId },
  } = useRouter();

  const { data, loading, error } = useTournamentQuery({
    variables: { id: tournamentId as string },
    onCompleted: (data) => {
      const matches = data.tournament.seasons[0].schedules.reduce(
        (prev, schedule) => {
          const matches = schedule.matches.reduce(
            (prevMatch, currMatch) => ({
              ...prevMatch,
              [currMatch.id]: {
                scheduleId: schedule.id,
                resultA: currMatch.resultA,
                resultB: currMatch.resultB,
              },
            }),
            {}
          );
          return { ...prev, ...matches };
        },
        {}
      );
      setMatchResults(matches);
    },
  });

  const [updateMatches] = useUpdateMatchesMutation();

  const updateResultA = (matchId: string, resultA: string) => {
    const updatedMatchResults = {
      ...matchResults,
      [matchId]: {
        ...matchResults[matchId],
        resultA: parseInt(resultA || '0'),
      },
    };

    setMatchResults(updatedMatchResults);
  };

  const updateResultB = (matchId: string, resultB: string) => {
    const updatedMatchResults = {
      ...matchResults,
      [matchId]: {
        ...matchResults[matchId],
        resultB: parseInt(resultB || '0'),
      },
    };
    setMatchResults(updatedMatchResults);
  };

  function handleSave(scheduleId: string) {
    const results: (MatchResultPrisma & { scheduleId: string })[] = Object.keys(
      matchResults
    ).map((k) => ({
      ...matchResults[k],
      matchId: k,
    }));
    updateMatches({
      variables: {
        data: results
          .filter((result) => result.scheduleId === scheduleId)
          .map(({ scheduleId, ...rest }) => rest),
      },
    });
  }

  if (loading) return <div> Loading tournament </div>;
  if (error) return <div> Error </div>;

  const schedules = data.tournament.seasons[0].schedules;

  return (
    <ReactToPdf options={{ orientation: 'landscape' }} scale={0.6}>
      {({ toPdf, targetRef }) => (
        <>
          <Layout>
            <Grid container justify="space-around" style={{ width: '100%' }}>
              <Grid item style={{ marginTop: '10px' }}>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  style={{ marginBottom: '1em' }}
                >
                  {user && (
                    <Link color="inherit" href="/tournaments">
                      Mis torneos
                    </Link>
                  )}
                  <Typography color="textPrimary">
                    {data?.tournament.name}
                  </Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item>
                <IconButton onClick={toPdf}>
                  <PictureAsPdf />
                </IconButton>
              </Grid>
            </Grid>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
              ref={targetRef}
            >
              {schedules.map((schedule) => (
                <TableContainer
                  component={Paper}
                  style={{ maxWidth: '400px', margin: '16px' }}
                >
                  <Table>
                    <TableHead className={classes.head}>
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          {`Fecha ${schedule.week + 1}`}
                          <IconButton onClick={() => handleSave(schedule.id)}>
                            <SaveIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {schedule.matches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <img
                                src={`https://ui-avatars.com/api/?name=${match.teamA.name
                                  .split(' ')
                                  .join('+')}&size=32&background=random`}
                              />
                              <strong>{match.teamA.name}</strong>
                            </Grid>
                          </TableCell>
                          <TableCell style={{ width: '80px' }}>
                            <Input
                              type="number"
                              value={matchResults[match.id]?.resultA || 0}
                              onChange={(e) =>
                                updateResultA(match.id, e.target.value)
                              }
                            />
                          </TableCell>
                          <TableCell style={{ width: '80px' }}>
                            <Input
                              type="number"
                              value={matchResults[match.id]?.resultB || 0}
                              onChange={(e) =>
                                updateResultB(match.id, e.target.value)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <img
                                src={`https://ui-avatars.com/api/?name=${match.teamB.name
                                  .split(' ')
                                  .join('+')}&size=32&background=random`}
                              />
                              <strong>{match.teamB.name}</strong>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ))}
            </div>
          </Layout>
        </>
      )}
    </ReactToPdf>
  );
};

export default withApollo()(Season);
