import { useRouter } from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withApollo } from "../../../lib/apollo"
import { Layout } from "../../../components";
import { usePositionsByTournamentQuery, Position } from "../../../generated/graphql";
import { Table, Paper, TableContainer, TableCell, TableRow, TableHead, TableBody } from "@material-ui/core";

function Positions(): JSX.Element {
  const {
    query: { tournamentId }
  } = useRouter();

  const { data: positions, loading } = usePositionsByTournamentQuery({ variables: { id: tournamentId as string }});

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
            {positions.map(position => (
              <TableRow key={position.team.id}>
                <TableCell component="th" scope="row">
                  {position.team.name}
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
      {loading
        ? <CircularProgress />
        : positions?.positionsByTournament
          ? renderTable(positions.positionsByTournament as Position[])
          : <h1>No data</h1>}
    </Layout>
  );
}

export default withApollo()(Positions);
