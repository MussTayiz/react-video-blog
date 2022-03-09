import { makeStyles, Grid } from '@material-ui/core'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#ECECEC",
    display: "flex"
  },
  navbar: {
   position: "sticky",
   top: 0,
   "z-index": "1",
   backgroundColor: "#ECECEC"
  },
  feed: {
    height: "auto",
    paddingTop: theme.spacing(5),
    backgroundColor: "white"
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  left: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  footer: {
    display: "flex",
    bottom: 0, 
    position:"sticky",
    marginTop: theme.spacing(5),
    backgroundColor: "red"
  }
}))

function Main() {
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item sm={12} xs={12}>
          <Header />
        </Grid>
        <Grid className={classes.navbar} item sm={12} xs={12}>
          <Navbar />
        </Grid>
        <Grid container direction='row' justifyContent='center'>
          <Grid item sm={2} className={classes.left}>
            <Leftbar />
          </Grid>
          <Grid item sm={8} xs={12} className={classes.feed}>
            <Feed />
          </Grid>
          <Grid item sm={2} className={classes.right}>
            <Rightbar /> 
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12} className={classes.footer}>Footer</Grid>
      </Grid>
    </div>
  );
}

export default Main;
