import React from 'react'
import ReactPlayer from 'react-player'
import { Button, Card, CardActionArea, CardActions, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    card: {
        margin: "0 auto",
        display: "table"
    },
    videoPlayer: {
        width: 640,
        height: 360,
        [theme.breakpoints.down("sm")]: {
            width: 320,
            height: 180,
        }
    }
}))

function VideoPlayer(props) {
    const classes = useStyle()
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.videoPlayer}>
                <ReactPlayer
                    url={props.url}
                    width="100%"
                    height="100%"
                    controls={true} />
            </CardActionArea>
        </Card>
    )
}

export default VideoPlayer