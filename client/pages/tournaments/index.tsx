import React from "react";
import formatISO from "date-fns/formatISO";

import { withApollo } from "../../lib/apollo";

import PeopleIcon from "@material-ui/icons/People";
import {
  useTournamentsQuery,
  useCreateTournamentMutation,
  CreateTournamentMutationVariables,
  useTournamentLazyQuery,
  useUpdateTournamentMutation,
  useDeleteTournamentMutation,
  UpdateTournamentMutationVariables,
  DeleteTournamentMutationVariables
} from "../../generated/graphql";
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
  TextField,
  IconButton
} from "@material-ui/core";
import { TOURNAMENTS_QUERY } from "../../generated/queries/tournaments";
import { useRouter } from "next/router";
import { teams } from "../../routes";

function getModalStyle() {
  const top = 40;
  const left = 40;

  return {
    position: "absolute" as "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: "400px",
    minHeight: "400px"
  };
}

const customDateFormat = (date: string): string =>
  formatISO(new Date(date), { representation: "date" });

const Tournaments = () => {
  const { push } = useRouter();

  // Form Values
  const [selectedStartDate, setSelectedStartDate] = React.useState<string>();
  const [selectedEndDate, setSelectedEndDate] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();
  const [tournamentId, setTournamentId] = React.useState<string>();

  // Modal states
  const [modalStyle] = React.useState(getModalStyle);
  const [modalOpen, setModalOpen] = React.useState(false);

  const [getTournament] = useTournamentLazyQuery({
    onCompleted: data => {
      setSelectedStartDate(customDateFormat(data.tournament.start));
      setSelectedEndDate(customDateFormat(data.tournament.end));
      setName(data.tournament.name);
      setDescription(data.tournament.description);
      setTournamentId(data.tournament.id);
    }
  });

  const [updateTournament] = useUpdateTournamentMutation({
    onCompleted: data => {
      alert("Torneo actualizado");
      setModalOpen(false);
    },
    refetchQueries: [{ query: TOURNAMENTS_QUERY }]
  });

  const [deleteTournament] = useDeleteTournamentMutation({
    onCompleted: data => {
      alert("Torneo borrado");
      setModalOpen(false);
    },
    refetchQueries: [{ query: TOURNAMENTS_QUERY }]
  });

  const {
    data: allTournaments,
    loading: allTournamentsLoading,
    error: allTournamentsError
  } = useTournamentsQuery();
  const [createTournament] = useCreateTournamentMutation({
    onCompleted: data => {
      alert("Torneo creado");
      setModalOpen(false);
    },
    refetchQueries: [{ query: TOURNAMENTS_QUERY }]
  });

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleTournamentSelection = (id: string) => {
    getTournament({ variables: { id } });
    setModalOpen(true);
    setTournamentId(id);
  };

  const handleTournamentAdd = () => {
    setSelectedStartDate("");
    setSelectedEndDate("");
    setName("");
    setDescription("");
    setTournamentId("");
    setModalOpen(true);
  };

  const handleTournamentDeletion = () => {
    const variables: DeleteTournamentMutationVariables = {
      id: tournamentId
    };

    deleteTournament({ variables });
  };

  const handleTournamentUpdate = () => {
    const startDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);

    const variables: UpdateTournamentMutationVariables = {
      name: name,
      description: description,
      start: startDate,
      end: endDate,
      owner: {
        connect: { id: "ckcuti685xz5409734aumeebe" }
      },
      id: tournamentId
    };

    updateTournament({ variables });
  };

  const handleTournamentCreation = () => {
    const startDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);

    const variables: CreateTournamentMutationVariables = {
      name: name,
      description: description,
      start: startDate,
      end: endDate,
      owner: {
        connect: { id: "ckcuti685xz5409734aumeebe" }
      }
    };

    createTournament({ variables });
  };

  const handleAddTeam = (tournamentId: string) => {
    push(teams(tournamentId));
  };

  const modalBody = (
    <Paper style={modalStyle}>
      <form noValidate autoComplete="off">
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <FormControl style={{ marginRight: "10px" }}>
              <InputLabel htmlFor="name">Nombre</InputLabel>
              <Input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl style={{ marginRight: "10px" }}>
              <InputLabel htmlFor="description">Descripcion</InputLabel>
              <Input
                id="description"
                type="textarea"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl style={{ marginRight: "10px" }}>
              <TextField
                id="startdate"
                type="date"
                label="Fecha Inicio"
                value={selectedStartDate}
                onChange={e => setSelectedStartDate(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl style={{ marginRight: "10px" }}>
              <TextField
                id="enddate"
                type="date"
                label="Fecha Fin"
                value={selectedEndDate}
                onChange={e => setSelectedEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            {tournamentId ? (
              <Button variant="contained" onClick={handleTournamentUpdate}>
                Actualizar Torneo
              </Button>
            ) : (
              <Button variant="contained" onClick={handleTournamentCreation}>
                Crear Torneo
              </Button>
            )}
          </Grid>
          {tournamentId && (
            <Grid item>
              <Button variant="contained" onClick={handleTournamentDeletion}>
                Borrar torneo
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );

  if (allTournamentsLoading) return <div>Loading</div>;
  if (allTournamentsError) return <div>Error</div>;

  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Lista de Torneos</Typography>
      <Button variant="contained" onClick={handleTournamentAdd}>
        Agregar Torneo
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>nombre</TableCell>
              <TableCell>descripcion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTournaments.tournaments.map(tournament => (
              <TableRow key={tournament.id}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => handleTournamentSelection(tournament.id)}
                >
                  {tournament.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {tournament.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {tournament.description}
                </TableCell>
                <IconButton
                  onClick={() => handleAddTeam(tournament.id)}
                  size="small"
                >
                  <PeopleIcon />
                </IconButton>
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

export default withApollo()(Tournaments);
