import { Card, CardActionArea, CardMedia, CardContent, makeStyles, Typography, CardActions, Grid, IconButton } from '@material-ui/core'
import { Share, Favorite, Person, DateRange } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    card: {
        marginBottom: theme.spacing(5)
    },
    media: {
        width: 350,
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
            width: 200,
        },
        '&:hover': {
            transform: ' scale(1.2)'
        },
        padding: theme.spacing(1),
        borderRadius: 5
    },
    post: {
        marginRight: theme.spacing(1),
        margin: 0,
        padding: 0
    },
    actionsIcons: {
        display: "flex",
        justifyContent: "space-between"
    },
    cardMedia: {
        display: "flex",
        justifyContent: "center"
    }
}))

function PageContent(props) {
    const classes = useStyles()
    return (
        <Grid item className={classes.post} xs={12} sm={12} md={12}>
            <Card className={classes.card}>
                {props.image.length > 0 && (
                    <CardActionArea className={classes.cardMedia}>
                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title={props.title}
                        />
                    </CardActionArea>
                )}

                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5">{props.title}</Typography>
                        {props.date && (
                            <div>
                                <br />
                                <Typography style={{ display: "flex" }}> <DateRange />&nbsp;&nbsp;{props.date}</Typography>
                            </div>

                        )}
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="body1">{props.description}</Typography>
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
    )
}


export default PageContent