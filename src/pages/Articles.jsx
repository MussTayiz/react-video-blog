import { Container, makeStyles, Grid, Typography } from '@material-ui/core'
import Post from '../components/PageContent'

const useStyle = makeStyles((theme) => ({
  container: {
  },
  feedTitleBox: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    backgroundColor: "#5463FF",
    height: theme.spacing(5),
    color: "white",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium! Fugiat magni rem suscipit aspernatur expedita consectetur mollitia, vitae velit in a numquam sequi fuga officia commodi doloremque laborum provident."
function Articles() {
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Container>
        <Grid container rowspacing={1} direction='row' justifyContent='center' alignItems='center'>
          <Post
            title="Toilet Training"
            image=""
            date="02/15/2020"
            description={description.repeat(5)}
          />
          <Post
            title="Game Habits"
            image=""
            date="02/15/2020"
            description={description.repeat(10)}
          />
          
        </Grid>
      </Container>
    </Container>
  )
}

export default Articles