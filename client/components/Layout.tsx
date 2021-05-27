import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Navbar } from "./Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#eee",
    padding: "0",
    borderRadius: "0 0 10px 10px",
    height: "100vh",
    maxWidth: "80vw",
    margin: "auto"
  },
  header: {},
  content: {
    padding: "2em"
  },
  footer: {
    background: `linear-gradient(to bottom, ${orange[500]}, ${orange[200]})`,
    borderRadius: "0 0 10px 10px",
    color: "#fff",
    padding: 5
  }
});

function Layout({ children, title }: Props): JSX.Element {
  const classes = useStyles();

  console.log("FOOOOOO");
  return (
    <Grid container className={classes.container} direction="column">
      <Navbar />
      <Grid item className={classes.header}>
        {title && <Typography variant="h3">{title}</Typography>}
      </Grid>
      <Grid item className={classes.content}>
        {children}
      </Grid>
    </Grid>
  );
}

export { Layout };
