import React from 'react';
import {
  Card,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  makeStyles,
  CardHeader,
  IconButton,
} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useCreateTournamentMutation } from '../generated/graphql';
import { useRouter } from 'next/router';
import { useSession } from '../hooks/Session';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3em',
    maxHeight: '800px',
    overflowY: 'auto',
  },
}));

interface Team {
  name: string;
}
interface FormValues {
  tournament: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
  teams: Team[];
}
const TournamentCreator = () => {
  const { push } = useRouter();
  const { user } = useSession();
  const classes = useStyles();

  const [createTournament] = useCreateTournamentMutation({
    onCompleted: (data) => {
      if (!data.createTournament) return;
      push(`/season/${data.createTournament.id}`);
    },
  });
  const { register, control, handleSubmit, getValues } = useForm<FormValues>({
    defaultValues: {
      tournament: '',
      startDate: null,
      endDate: null,
      description: '',
      teams: [{ name: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'teams',
  });

  const onSubmit = () => {
    const { tournament, teams, startDate, endDate, description } = getValues();

    createTournament({
      variables: {
        data: {
          name: tournament,
          start: startDate.toISOString(),
          end: endDate.toISOString(),
          teams: teams.map((team) => team.name),
          description,
          owner: user ? user.id : '',
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
                {fields.map((team, index) => (
                  <div key={team.id}>
                    <FormControl
                      style={{ marginRight: '10px', marginTop: '20px' }}
                    >
                      <Input
                        {...register(
                          `teams.${index}.name` as `teams.${number}.name`
                        )}
                        placeholder="Equipo"
                        defaultValue={team.name}
                      />
                    </FormControl>
                    <IconButton
                      color="primary"
                      style={{ marginTop: '20px' }}
                      onClick={() => append({ name: '' })}
                    >
                      <PlusIcon />
                    </IconButton>
                    {index > 0 && (
                      <IconButton
                        color="secondary"
                        style={{ marginTop: '20px' }}
                        onClick={() => remove(index)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    )}
                  </div>
                ))}
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Generar Schedule
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

export default TournamentCreator;
