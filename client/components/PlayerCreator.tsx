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
  Paper,
} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DateFnsUtils from '@date-io/date-fns';

import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useSession } from '../hooks/Session';
import {
  PlayerInput,
  useUpdateTeamPlayersMutation,
} from '../generated/graphql';

function getModalStyle() {
  const top = 40;
  const left = 40;

  return {
    position: 'absolute' as 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    width: '400px',
    padding: '3em',
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3em',
    overflowY: 'auto',
    maxHeight: '80%',
  },
}));

interface Player {
  name: string;
}
interface FormValues {
  players: Player[];
}

interface Props {
  teamId: string;
  players: Player[];
  clearSelectedTeamId: () => void;
}
const PlayerCreator: React.FC<Props> = ({
  players,
  teamId,
  clearSelectedTeamId,
}) => {
  const [updateTeamPlayers] = useUpdateTeamPlayersMutation({
    onCompleted: (data) => {
      clearSelectedTeamId();
    },
  });

  const [modalStyle] = React.useState(getModalStyle);
  const { register, control, handleSubmit, getValues } = useForm<FormValues>({
    defaultValues: {
      players: players.length ? players : [{ name: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'players',
  });

  const onSubmit = () => {
    const values = getValues();
    const data: PlayerInput = {
      names: values.players.map(({ name }) => name),
    };
    updateTeamPlayers({
      variables: {
        teamId,
        data,
      },
    });
  };

  return (
    <Paper style={modalStyle}>
      <Grid container direction="column">
        <Grid item>
          <CardHeader title="Agrega jugadores" />
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
              {fields.map((team, index) => (
                <div key={team.id}>
                  <FormControl
                    style={{ marginRight: '10px', marginTop: '20px' }}
                  >
                    <Input
                      {...register(
                        `players.${index}.name` as `players.${number}.name`
                      )}
                      placeholder="Jugador"
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
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { PlayerCreator };
