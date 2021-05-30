import React from 'react';
import {
  Card,
  Grid,
  FormControl,
  Input,
  Button,
  TextField,
  makeStyles,
  CardHeader,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { useForm, Controller } from 'react-hook-form';
import { Tournament, useUpdateTournamentMutation } from '../generated/graphql';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3em',
    maxHeight: '800px',
    overflowY: 'auto',
  },
}));

interface FormValues {
  tournament: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
}

interface Props {
  tournament: Tournament;
  onUpdate: () => void;
}
const TournamentUpdater: React.FC<Props> = ({ tournament, onUpdate }) => {
  const classes = useStyles();

  console.log({ tournament });
  const [updateTournament] = useUpdateTournamentMutation({
    onCompleted: (data) => {
      onUpdate();
    },
  });

  const { register, control, handleSubmit, getValues } = useForm<FormValues>({
    defaultValues: {
      tournament: tournament.name,
      startDate: tournament.start ? new Date(parseInt(tournament.start)) : null,
      endDate: tournament.start ? new Date(parseInt(tournament.end)) : null,
      description: tournament.description,
    },
  });

  const onSubmit = () => {
    const values = getValues();

    updateTournament({
      variables: {
        tournamentId: tournament.id,
        data: {
          name: values.tournament,
          start: values.startDate.toISOString(),
          end: values.endDate.toISOString(),
          description: values.description,
        },
      },
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Card className={classes.root}>
        <Grid container direction="column">
          <Grid item>
            <CardHeader title="Crea tu torneo" />
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid
                container
                direction="column"
                spacing={4}
                justify="center"
                alignContent="center"
              >
                <FormControl style={{ marginRight: '10px', marginTop: '20px' }}>
                  <Controller
                    name="tournament"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        fullWidth
                        {...field}
                        placeholder="Nombre de torneo"
                      />
                    )}
                  />
                </FormControl>
                <FormControl style={{ marginRight: '10px', marginTop: '20px' }}>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        multiline
                        placeholder="Descripcion"
                      />
                    )}
                  />
                </FormControl>
                <FormControl style={{ marginRight: '10px', marginTop: '20px' }}>
                  <Controller
                    name="startDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <DatePicker
                          autoOk
                          disablePast
                          clearable
                          format="dd/MM/yyyy"
                          emptyLabel="Fecha de Inicio"
                          {...field}
                          value={field.value ? field.value : null}
                        />
                      );
                    }}
                  />
                </FormControl>
                <FormControl style={{ marginRight: '10px', marginTop: '20px' }}>
                  <Controller
                    name="endDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <DatePicker
                        autoOk
                        disablePast
                        clearable
                        format="dd/MM/yyyy"
                        emptyLabel="Fecha de Fin"
                        {...field}
                        value={field.value ? field.value : null}
                      />
                    )}
                  />
                </FormControl>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Actualizar Torneo
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Card>
    </MuiPickersUtilsProvider>
  );
};

export { TournamentUpdater };
