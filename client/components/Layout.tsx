import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Navbar } from './Navbar';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {},
  content: {
    flex: '1 0 auto',
    padding: '3em',
  },
  footer: {
    background: grey[800],
    color: '#fff',
    padding: 5,
    flexShrink: 0,
  },
});

function Layout({ children, title }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.header}>
        {title && <Typography variant="h3">{title}</Typography>}
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.footer}>
        <Typography>By Dev&Coffee</Typography>
      </div>
    </div>
  );
}

export { Layout };
