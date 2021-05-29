import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Navbar } from "./Navbar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#eee",
    height: "100vh",
  },
  header: {},
  content: {
    padding: "2em",
    flex: 1,
    maxWidth: '1200px',
    margin: 'auto',
  },
  footer: {
    background: grey[800],
    color: "#fff",
    padding: 5,
  }
});

function Layout({ children, title }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} direction="column">
      <Navbar />
      <Grid container className={classes.header}>
        {title && <Typography variant="h3">{title}</Typography>}
      </Grid>
      <Grid container className={classes.content} direction="column">
        {children}
      </Grid>
      <Grid container direction="row-reverse" className={classes.footer}>
        <Typography>By Dev&Coffee</Typography>
      </Grid>
    </Grid>
  );
}

export { Layout };
