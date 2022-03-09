import { Container, makeStyles, Typography } from '@material-ui/core'
import RightbarPostCard from './RightbarPostCard'
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: theme.spacing(10),
    paddingLeft: theme.spacing(1)
  },
  title: {
    marginTop: theme.spacing(2),
  }
}))

function Rightbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>TOP 10</Typography>
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <Typography className={classes.title} gutterBottom>Last Videos (Most Vİewed olabilir)</Typography>
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />
      <RightbarPostCard />

    </Container>
  );
}

export default Rightbar;