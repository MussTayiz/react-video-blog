import { Container, Card, Box, CardMedia, makeStyles, Typography, IconButton } from '@material-ui/core'
import { PlayCircleFilledWhite } from '@material-ui/icons'
import '../App.css'
const LINES_TO_SHOW = 3;

const useStyles = makeStyles((theme) => ({
    container: {
        padding:0,
        margin:0,
        marginBottom: theme.spacing(2)
    },
    card: {
        display: 'flex',
        padding: theme.spacing(1),
    },
    cardMedia: {
        minWidth: 70,
        height: 70,
        marginRight: theme.spacing(1),
    },
    title: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": LINES_TO_SHOW,
        "-webkit-box-orient": "vertical",
        height: "50%",
        marginLeft: theme.spacing(1)
    }
}))

function RightbarPostCard() {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Card>
                <div className={classes.card}>
                    <div class="container1">
                        <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="Avatar" class="image" />
                        <div class="middle">
                            <i class="text"><PlayCircleFilledWhite fontSize="large" /></i>
                        </div>
                    </div>
                    <Typography className={classes.title} component="div" variant="subtitle2">
                        Live From Space from space album cover space album coverspace album cover.
                    </Typography>
                </div>
            </Card>
        </Container>
    );
}
/* 
,
    iconButton: {
        padding: 0,
        margin: 0,
        justifyContent: "center",
        display: "flex"
    }
<div className={classes.iconButton}>
                    <IconButton>
                        <Person />
                        <Typography variant="body1">{50}</Typography>
                    </IconButton>
                </div>
*/
export default RightbarPostCard