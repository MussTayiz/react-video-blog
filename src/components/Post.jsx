import { Card, CardActionArea, CardMedia, CardContent, makeStyles, Typography, CardActions, Grid, IconButton } from '@material-ui/core'
import { Share, Favorite, Person } from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    card: {
        marginBottom: theme.spacing(5)
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
        '&:hover': {
            transform: ' scale(1.2)'
        }
    },
    post: {
        marginRight: theme.spacing(1),
        margin: 0,
        padding: 0
    },
    actionsIcons: {
        display: "flex",
        justifyContent: "space-between"
    }
}))

function Post() {
    const classes = useStyles()
    return (
        <Grid item className={classes.post} xs={12} sm={12} md={3}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        title="My Post"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">My Firtst Post</Typography>
                    </CardContent>
                </CardActionArea>
                <div className={classes.actionsIcons}>
                <CardActions >
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                </CardActions>
                <CardActions>
                    <IconButton>
                        <Person />
                        <Typography variant="button">{50}</Typography>
                    </IconButton>
                </CardActions>
                </div>
            </Card>
        </Grid>
    );
}

export default Post;