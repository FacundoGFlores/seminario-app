import React from "react";
import Router, { useRouter } from "next/router";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import RemoveIcon from "@material-ui/icons/Remove";

import { withApollo } from "../../../../lib/apollo";
import {
  useDeleteTournamentMutation,
  useTeamLazyQuery,
  useUpdateTeamMutation,
  useTeamsQuery,
  DeleteTeamMutationVariables,
  UpdateTeamMutationVariables,
  CreateTeamMutationVariables,
  useCreateTeamMutation,
  Player,
  PlayerCreateWithoutTeamInput,
  useDeletePlayerMutation,
} from "../../../../generated/graphql";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Typography,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Input,
  Grid,
  IconButton,
} from "@material-ui/core";
import { TEAMS_QUERY } from "../../../../generated/queries/teams";

function getModalStyle() {
  const top = 40;
  const left = 40;

  return {
    position: "absolute" as "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: "400px",
    minHeight: "400px",
  };
}

const playerIsPlayerCreateWithoutTeamInput = (
  player: Partial<Player>
): player is PlayerCreateWithoutTeamInput => (player.name ? true : false);

type PlayersCreateWithoutTeamInput = Array<PlayerCreateWithoutTeamInput>;

const playersArePlayersCreateWithoutTeamInput = (
  players: Array<Partial<Player>>
): players is PlayersCreateWithoutTeamInput =>
  players.slice(1).every(playerIsPlayerCreateWithoutTeamInput);

const Team: React.FC = () => {
  const {
    query: { tournamentId },
  } = useRouter();

  // Form Values
  const [name, setName] = React.useState<string>();
  const [teamId, setTeamId] = React.useState<string>();
  const [currentPlayer, setCurrentPlayer] = React.useState<string>("");
  const [players, setPlayers] = React.useState<Array<Partial<Player>>>([
    { name: "" },
  ]);

  // Modal states
  const [modalStyle] = React.useState(getModalStyle);
  const [modalOpen, setModalOpen] = React.useState(false);

  const [getTeam] = useTeamLazyQuery({
    onCompleted: (data) => {
      setTeamId(data.team.id);
      setName(data.team.name);
      setPlayers([{ name: "" }, ...data.team.players]);
    },
  });

  const [updateTeam] = useUpdateTeamMutation({
    onCompleted: (data) => {
      alert("Equipo actualizado");
      setModalOpen(false);
    },
    refetchQueries: [
      {
        query: TEAMS_QUERY,
        variables: { tournamentId: tournamentId as string },
      },
    ],
  });

  const [deleteTeam] = useDeleteTournamentMutation({
    onCompleted: (data) => {
      alert("Equipo borrado");
      setModalOpen(false);
    },
    refetchQueries: [
      {
        query: TEAMS_QUERY,
        variables: { tournamentId: tournamentId as string },
      },
    ],
  });

  const [createTeam] = useCreateTeamMutation({
    onCompleted: (data) => {
      alert("Equipo creado");
      setCurrentPlayer("");
      setModalOpen(false);
    },
    refetchQueries: [
      {
        query: TEAMS_QUERY,
        variables: { tournamentId: tournamentId as string },
      },
    ],
  });

  const [deletePlayer] = useDeletePlayerMutation({
    refetchQueries: [
      {
        query: TEAMS_QUERY,
        variables: { tournamentId: tournamentId as string },
      },
    ],
  });

  const {
    data: allTeams,
    loading: allTeamsLoading,
    error: allTeamsError,
  } = useTeamsQuery({ variables: { tournamentId: tournamentId as string } });

  const handleClose = () => {
    setModalOpen(false);
    setTeamId("");
  };

  const handleTeamSelection = (id: string) => {
    getTeam({ variables: { id } });
    setTeamId(id);
    setModalOpen(true);
  };

  const handleTeamAdd = () => {
    setName("");
    setTeamId("");
    setModalOpen(true);
  };

  const handleTeamDeletion = () => {
    const variables: DeleteTeamMutationVariables = {
      id: teamId,
    };

    deleteTeam({ variables });
  };

  const handleTeamUpdate = () => {
    if (!players.length) {
      const variables: UpdateTeamMutationVariables = {
        name: name,
        tournament: {
          connect: { id: tournamentId as string },
        },
        id: teamId,
      };
      updateTeam({ variables });
    }

    const oldPlayers = players.filter((player) => !!player.id);
    const newPlayers = players.filter((player) => !player.id);

    if (playersArePlayersCreateWithoutTeamInput(newPlayers)) {
      const variables: UpdateTeamMutationVariables = {
        id: teamId,
        name: name,
        tournament: {
          connect: { id: tournamentId as string },
        },
        players: {
          create: [
            { name: currentPlayer ? currentPlayer : undefined },
            ...newPlayers.slice(1),
          ],
          set: oldPlayers.map<{ id: string }>((oldPlayer) => {
            return { id: oldPlayer.id || "" };
          }),
        },
      };
      return updateTeam({ variables });
    }
  };

  const handleTeamCreation = () => {
    if (!players.length) {
      const variables: CreateTeamMutationVariables = {
        name: name,
        tournament: {
          connect: { id: tournamentId as string },
        },
      };
      return createTeam({ variables });
    }

    if (playersArePlayersCreateWithoutTeamInput(players)) {
      const variables: CreateTeamMutationVariables = {
        name: name,
        tournament: {
          connect: { id: tournamentId as string },
        },
        players: {
          create: [
            { name: currentPlayer ? currentPlayer : undefined },
            ...players.slice(1),
          ],
        },
      };
      return createTeam({ variables });
    }
  };

  const modalBody = (
    <Paper style={modalStyle}>
      <form noValidate autoComplete="off">
        <Grid container justify="center" spacing={4}>
          <Grid container item spacing={4}>
            <Grid item>
              <FormControl style={{ marginRight: "10px" }}>
                <InputLabel htmlFor="name">Nombre</InputLabel>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Grid>

            {players.map((player, id) => (
              <Grid item>
                <InputLabel htmlFor="name">Jugador</InputLabel>
                <Input
                  id="name"
                  value={player.name ? player.name : currentPlayer}
                  onChange={(e) => setCurrentPlayer(e.target.value)}
                />
                {id > 0 ? (
                  <IconButton
                    onClick={() => {
                      setPlayers([
                        ...players.slice(0, id),
                        ...players.slice(id + 1),
                      ]);
                      setCurrentPlayer("");
                      deletePlayer({ variables: { id: player.id } });
                    }}
                    size="small"
                  >
                    <RemoveIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      setPlayers([...players, { name: currentPlayer }]);
                      setCurrentPlayer("");
                    }}
                    size="small"
                  >
                    <PersonAddIcon />
                  </IconButton>
                )}
              </Grid>
            ))}
          </Grid>

          <Grid item>
            {teamId ? (
              <Button variant="contained" onClick={handleTeamUpdate}>
                Actualizar Equipo
              </Button>
            ) : (
              <Button variant="contained" onClick={handleTeamCreation}>
                Crear Equipo
              </Button>
            )}
          </Grid>
          {teamId && (
            <Grid item>
              <Button variant="contained" onClick={handleTeamDeletion}>
                Borrar Equipo
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );

  if (allTeamsLoading) return <div>Loading</div>;
  if (allTeamsError) return <div>Error</div>;

  return (
    <Container maxWidth="xl">
      <Button onClick={() => Router.back()}>Ir a Torneos</Button>
      <Typography variant="h3">Lista de Equipos</Typography>
      <Button variant="contained" onClick={handleTeamAdd}>
        Agregar Equipo
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>nombre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTeams.teams.map((team) => (
              <TableRow key={team.id}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => handleTeamSelection(team.id)}
                >
                  {team.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {team.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </Container>
  );
};

export default withApollo()(Team);
