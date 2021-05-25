import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { withApollo } from "../../lib/apollo";
import { useCreateTournamentWithScheduleMutation } from "../../generated/graphql";
import { useRouter } from "next/router";

const CreateTournament = () => {
  const { push } = useRouter();
  const [createTournament] = useCreateTournamentWithScheduleMutation({
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
    const start = new Date(startDate);
    const end = new Date(endDate);
    createTournament({
      variables: {
        data: {
          name: tournament,
          start,
          end,
          teams: {
            create: teams
          },
          owner: {
            create: { name: "anonymous" }
          },
          description: ""
        }
      }
    });
  };

  return (
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
                {...register(`teams.${index}.name`)}
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
  );
};

export default withApollo()(CreateTournament);
