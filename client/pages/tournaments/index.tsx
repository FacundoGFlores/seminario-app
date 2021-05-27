import React from "react";
import formatISO from "date-fns/formatISO";

import { withApollo } from "../../lib/apollo";

import PeopleIcon from "@material-ui/icons/People";
import EditIcon from "@material-ui/icons/Edit";
import {
  useTournamentsByUserIdQuery,
  useTournamentLazyQuery,
  useUpdateTournamentMutation,
  UpdateTournamentMutationVariables
} from "../../generated/graphql";
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
  IconButton
} from "@material-ui/core";
import { TOURNAMENTS_BY_USER_ID_QUERY } from "../../generated/queries/tournaments";
import { useRouter } from "next/router";
import { teams } from "../../routes";
import { Layout } from "../../components";
import { useSession } from "../../hooks/Session";

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

const customDateFormat = (date: string): string => {
  return formatISO(date ? new Date(parseInt(date, 10)) : new Date(), {
    representation: "date"
  });
};

const Tournaments = () => {
  const { push } = useRouter();
  const { user } = useSession();

  console.log({ user });
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
    refetchQueries: [
      { query: TOURNAMENTS_BY_USER_ID_QUERY, variables: { id: user?.id || "" } }
    ]
  });

  const {
    data: allTournaments,
    loading: allTournamentsLoading,
    error: allTournamentsError
  } = useTournamentsByUserIdQuery({
    variables: { id: user?.id },
    skip: !user?.id
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
    push("/");
  };

  const handleTournamentUpdate = () => {
    const variables: UpdateTournamentMutationVariables = {
      data: {
        name,
        description,
        start: selectedStartDate,
        end: selectedEndDate,
        id: tournamentId
      }
    };

    updateTournament({ variables });
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
            {tournamentId && (
              <Button variant="contained" onClick={handleTournamentUpdate}>
                Actualizar Torneo
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Paper>
  );

  return (
    <Layout>
      <Grid>
        <Grid item>
          <Typography variant="h3">Lista de Torneos</Typography>
        </Grid>
        <Grid item>
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
                  <TableCell>nombre</TableCell>
                  <TableCell>descripcion</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allTournaments?.tournamentsByUserId.map(tournament => (
                  <TableRow key={tournament.id}>
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
                    <IconButton
                      onClick={() => handleTournamentSelection(tournament.id)}
                    >
                      <EditIcon />
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
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withApollo()(Tournaments);
