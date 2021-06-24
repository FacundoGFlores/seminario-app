import React from 'react';
import formatISO from 'date-fns/formatISO';

import { withApollo } from '../../lib/apollo';

import Filter9Plus from '@material-ui/icons/Filter9Plus';
import PeopleIcon from '@material-ui/icons/Group';

import EditIcon from '@material-ui/icons/Edit';
import FlagIcon from '@material-ui/icons/Flag';
import EventIcon from '@material-ui/icons/Event';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  useTournamentsByUserIdQuery,
  useTournamentLazyQuery,
  useUpdateTournamentMutation,
  UpdateTournamentMutationVariables,
  useTeamsByTournamentLazyQuery,
  useDeleteTournamentMutation,
  Tournament,
} from '../../generated/graphql';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Input,
  Grid,
  TextField,
  IconButton,
} from '@material-ui/core';
import { TOURNAMENTS_BY_USER_ID_QUERY } from '../../generated/queries/tournaments';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import { useSession } from '../../hooks/Session';
import { GroupAdd } from '@material-ui/icons';
import { PlayerCreator } from '../../components/PlayerCreator';
import Tooltip from '@material-ui/core/Tooltip';
import { TournamentUpdater } from '../../components/TournamentUpdater';

function getModalStyle() {
  const top = 40;
  const left = 40;

  return {
    position: 'absolute' as 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    width: '400px',
    minHeight: '400px',
  };
}

const customDateFormat = (date: string): string => {
  return formatISO(date ? new Date(parseInt(date, 10)) : new Date(), {
    representation: 'date',
  });
};

const Tournaments = () => {
  const { push } = useRouter();
  const { user } = useSession();
  const [selectedTournamentId, setSelectedTournamentId] =
    React.useState<string>('');
  const [showTeamIdPlayers, setShowTeamIdPlayers] = React.useState<string>('');
  const [selectedTeamId, setSelectedTeamId] = React.useState<string>('');
  // Form Values
  const [selectedStartDate, setSelectedStartDate] = React.useState<string>();
  const [selectedEndDate, setSelectedEndDate] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();
  const [tournamentId, setTournamentId] = React.useState<string>();

  // Modal states
  const [modalStyle] = React.useState(getModalStyle);
  const [showTournamentId, setShowTournamentId] = React.useState<string>('');

  const {
    data: allTournaments,
    loading: allTournamentsLoading,
    error: allTournamentsError,
    refetch: refetchAllTournaments,
  } = useTournamentsByUserIdQuery({
    variables: { id: user?.id },
    skip: !user?.id,
  });

  const [deleteTournament] = useDeleteTournamentMutation({
    onCompleted: () => {
      refetchAllTournaments();
    },
  });

  const [
    getTeamsByTournament,
    { data: teamsData, loading: loadingTeams, error: errorTeams, refetch },
  ] = useTeamsByTournamentLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const [updateTournament] = useUpdateTournamentMutation({
    onCompleted: (data) => {
      alert('Torneo actualizado');
      setShowTournamentId('');
    },
    refetchQueries: [
      {
        query: TOURNAMENTS_BY_USER_ID_QUERY,
        variables: { id: user?.id || '' },
      },
    ],
  });

  React.useEffect(() => {
    getTeamsByTournament({ variables: { tournamentId: selectedTournamentId } });
  }, [selectedTournamentId]);

  const handleClose = () => {
    setShowTournamentId('');
  };

  const handleTournamentSelection = (id: string) => {
    setTournamentId(id);
  };

  const handleTournamentAdd = () => {
    push('/');
  };

  console.log({ showTournamentId });

  return (
    <Layout>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ marginBottom: '2em' }}
      >
        <Typography variant="h3">Lista de Torneos</Typography>
        <Button variant="contained" onClick={handleTournamentAdd}>
          Agregar Torneo
        </Button>
      </Grid>
      <Grid container>
        {allTournamentsLoading && <div>Loading</div>}
        {allTournamentsError && <div> Error </div>}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripcion</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allTournaments?.tournamentsByUserId.map((tournament) => (
                <TableRow key={tournament.id}>
                  <TableCell component="th" scope="row">
                    {tournament.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {tournament.description}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Ver equipos">
                      <IconButton
                        onClick={() => setSelectedTournamentId(tournament.id)}
                        size="small"
                      >
                        <Filter9Plus />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar torneo">
                      <IconButton
                        onClick={() => setShowTournamentId(tournament.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Ver fechas">
                      <IconButton
                        onClick={() => push(`/season/${tournament.id}`)}
                      >
                        <EventIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Ver tabla de posiciones">
                      <IconButton
                        onClick={() => push(`/positions/${tournament.id}`)}
                      >
                        <FlagIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Borrar torneo">
                      <IconButton
                        onClick={() => {
                          deleteTournament({
                            variables: { tournamentId: tournament.id },
                          });
                        }}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container style={{ marginTop: '2em' }} justify="space-around">
        {selectedTournamentId && (
          <Grid item>
            {loadingTeams && <div>Loading</div>}
            {errorTeams && <div> Error </div>}
            <Typography variant="h4">
              Equipos de{' '}
              {
                allTournaments?.tournamentsByUserId.find(
                  (tournament) => tournament.id === selectedTournamentId
                ).name
              }
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teamsData?.teams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell component="th" scope="row">
                        <Grid container alignItems="center">
                          <img
                            src={`https://ui-avatars.com/api/?name=${team.name
                              .split(' ')
                              .join('+')}&size=32&background=random`}
                          />
                          <strong>{team.name}</strong>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Ver jugadores">
                          <IconButton
                            onClick={() => setShowTeamIdPlayers(team.id)}
                            size="small"
                          >
                            <PeopleIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
        {showTeamIdPlayers && (
          <Grid item>
            {loadingTeams && <div>Loading</div>}
            {errorTeams && <div> Error </div>}
            <Typography variant="h4">
              Jugadores de{' '}
              {
                teamsData?.teams.find((team) => team.id === showTeamIdPlayers)
                  .name
              }
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <span>
                        Nombre{' '}
                        <IconButton
                          onClick={() => setSelectedTeamId(showTeamIdPlayers)}
                          size="small"
                        >
                          <GroupAdd />
                        </IconButton>
                      </span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teamsData?.teams
                    .find((team) => team.id === showTeamIdPlayers)
                    ?.players.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell component="th" scope="row">
                          <img
                            src={`https://robohash.org/${player.name}?size=48x48`}
                          />
                          {player.name}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>
      <Modal
        open={!!showTournamentId}
        onClose={() => setSelectedTournamentId('')}
        aria-labelledby="tournament-edition"
        aria-describedby="tournament-edition"
      >
        <Paper style={modalStyle}>
          <TournamentUpdater
            tournament={
              allTournaments?.tournamentsByUserId.find(
                (tournament) => tournament.id === showTournamentId
              ) as Tournament
            }
            onUpdate={() => {
              setShowTournamentId('');
              refetchAllTournaments();
            }}
          />
        </Paper>
      </Modal>
      <Modal
        open={!!selectedTeamId}
        onClose={() => setSelectedTeamId('')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <PlayerCreator
          players={
            teamsData?.teams.find((team) => team.id === selectedTeamId)
              ?.players || []
          }
          teamId={selectedTeamId}
          clearSelectedTeamId={() => {
            refetch();
            setSelectedTeamId('');
          }}
        />
      </Modal>
    </Layout>
  );
};

export default withApollo()(Tournaments);
