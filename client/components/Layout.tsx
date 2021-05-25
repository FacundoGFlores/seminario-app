import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const useStyles = makeStyles({
  container: {
    backgroundColor: '#eee',
    padding: '0',
    borderRadius: '0 0 10px 10px',
  },
  header: {
    padding: '2em',
  },
  content: {
    padding: '2em',
    minHeight: '90vh',
  },
  footer: {
    background: `linear-gradient(to bottom, ${orange[500]}, ${orange[200]})`,
    borderRadius: '0 0 10px 10px',
    color: '#fff',
    padding: 5,
  },
});

function Layout({ children, title }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container className={classes.header}>
        {title && <Typography variant="h3">{title}</Typography>}
      </Grid>
      <Grid container className={classes.content}>
        {children}
      </Grid>
      <Grid container direction="row-reverse" className={classes.footer}>
        <Typography>By Dev&Coffee</Typography>
      </Grid>
    </Container>
  )
}

export { Layout };
