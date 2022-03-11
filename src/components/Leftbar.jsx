import { Button, Card, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: theme.spacing(10),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  card: {
    padding: theme.spacing(1),
    textAlign: "center",
    marginBottom: theme.spacing(1)
  },
  cardActions: {
    justifyContent: "center",
    marginTop: theme.spacing(1)
  },
  cardMedia: {
    borderRadius: 5,
    '&:hover': {
      transform: ' scale(1.2)'
    }
  }
}))

function Leftbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      {GoSitesCard({
        classes: classes,
        title: "Page 1",
        imageLink: "https://mui.com/static/images/cards/paella.jpg"
      })}
      {GoSitesCard({
        classes: classes,
        title: "Page 2",
        imageLink: "https://mui.com/static/images/cards/paella.jpg"
      })}
      {GoSitesCard({
        classes: classes,
        title: "Page 3",
        imageLink: "https://mui.com/static/images/cards/paella.jpg"
      })}
    </Container>
  );
}

export const  GoSitesCard = ({ classes, title, imageLink, siteUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div" >
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        className={classes.cardMedia}
        image={imageLink}
      />

      <CardActions className={classes.cardActions}>
        <Button variant="contained" endIcon={<SendIcon />} size="small">Go Site</Button>
      </CardActions>
    </Card>
  )
}

export default Leftbar;