import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { LoginButton } from "./LoginButton";
import Link from "next/link";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none !important',
      color: '#fff !important',
    }
  },
  navbar: {
    backgroundColor: lightBlue[800],
    color: '#fff',
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link href="/">Sport and Tournaments</Link>
        </Typography>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
}

export { Navbar };
