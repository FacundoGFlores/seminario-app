import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { withApollo } from '../../../lib/apollo';
import { Layout } from '../../../components';
import {
  usePositionsByTournamentQuery,
  Position,
  useTournamentQuery,
} from '../../../generated/graphql';
import {
  Grid,
  Table,
  Paper,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Typography,
} from '@material-ui/core';
import { getFlag } from '../../../lib/flags';

function Positions(): JSX.Element {
  const {
    query: { tournamentId },
  } = useRouter();

  const { data: positions, loading } = usePositionsByTournamentQuery({
    variables: { id: tournamentId as string },
  });
  const { data: tournament } = useTournamentQuery({
    variables: { id: tournamentId as string },
  });

  function renderTable(positions: Position[]): React.ReactElement {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>PG</TableCell>
              <TableCell>PE</TableCell>
              <TableCell>PP</TableCell>
              <TableCell>GF</TableCell>
              <TableCell>GC</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.team.id}>
                <TableCell component="th" scope="row">
                  <Grid container alignItems="center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${position.team.name
                        .split(' ')
                        .join('+')}&size=32&background=random`}
                    />
                    <strong>{position.team.name}</strong>
                  </Grid>
                </TableCell>
                <TableCell component="th" scope="row">
                  {position.pg}
                </TableCell>
                <TableCell component="th" scope="row">
                  {position.pe}
                </TableCell>
                <TableCell component="th" scope="row">
                  {position.pp}
                </TableCell>
                <TableCell component="th" scope="row">
                  {position.gf}
                </TableCell>
                <TableCell component="th" scope="row">
                  {position.gc}
                </TableCell>
                <TableCell component="th" scope="row">
                  {position.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '1em' }}>
        <Link color="inherit" href="/tournaments">
          Mis torneos
        </Link>
        <Typography color="textPrimary">
          {tournament?.tournament.name}
        </Typography>
      </Breadcrumbs>
      {loading ? (
        <CircularProgress />
      ) : positions?.positionsByTournament ? (
        renderTable(positions.positionsByTournament as Position[])
      ) : (
        <h1>No data</h1>
      )}
    </Layout>
  );
}

export default withApollo()(Positions);
