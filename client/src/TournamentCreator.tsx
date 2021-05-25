import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Typography
} from "@material-ui/core";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { useCreateTournamentMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { useSession } from "../hooks/Session";

const TournamentCreator = () => {
  const { push } = useRouter();
  const {user} = useSession()

  const [createTournament] = useCreateTournamentMutation({
    onCompleted: data => {
      if (!data.createTournament) return;
      push(`/season/${data.createTournament.id}`);
    }
  });
  const { register, control, handleSubmit, getValues } = useForm({
    defaultValues: {
      tournament: "",
      startDate: "",
      endDate: "",
      description: "",
      teams: [{ name: "" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "teams"
  });

  const onSubmit = () => {
    const { tournament, teams, startDate, endDate, description } = getValues();


    createTournament({
      variables: {
        data: {
          name: tournament,
          start: startDate,
          end: endDate,
          teams: {
            name: teams.map(team => team.name)
          },
          description,
          owner: user.id
        }
      }
    });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4">Crea tu torneo</Typography>
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
            <Grid item>
              <FormControl style={{ marginRight: "10px" }}>
                <Controller
                  name="tournament"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} placeholder="Nombre de torneo" />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ marginRight: "10px" }}>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} multiline placeholder="Descripcion" />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ marginRight: "10px" }}>
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ marginRight: "10px" }}>
                <Controller
                  name="endDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <InputLabel>Equipos</InputLabel>
            {fields.map((team, index) => (
              <div key={team.id}>
                <FormControl style={{ marginRight: "10px" }}>
                  <Input
                    {...register(`teams.${index}.name` as `teams.${number}.name`)}
                    defaultValue={team.name}
                  />
                </FormControl>

                <Button onClick={() => append({ name: "" })}>+</Button>
                {index > 0 && <Button onClick={() => remove(index)}>-</Button>}
              </div>
            ))}
            <Button type="submit">Generar Schedule</Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default TournamentCreator;
