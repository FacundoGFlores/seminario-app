import React from "react";
import Container from "@material-ui/core/Container";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import { useRouter } from "next/router";
import { tournaments } from "../routes";

export default function LoginForm() {
  const { push } = useRouter();

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <form noValidate autoComplete="off">
          <FormControl style={{ marginRight: "10px" }}>
            <InputLabel htmlFor="input-with-icon-adornment">Usuario</InputLabel>
            <Input
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl style={{ marginRight: "10px" }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Contrasena
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            onClick={() => push(tournaments)}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
}
