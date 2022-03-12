import { Container, makeStyles, Grid, Typography } from '@material-ui/core'
import VideoPlayer from './VideoPlayer'
import { useState } from 'react'
import Post from './Post'
import { useVideoUrl } from '../context/VideoContext'
import db from '../BackendServices/db.json'


const url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'

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

const dbJson = [
    { "video1": "Meet Irwin | Sponsor a Puppy", },
    { "video1": "Meet Irwin | Sponsor a Puppy", },
    { "video1": "Meet Irwin | Sponsor a Puppy", }
]

const stockData = [
    {
        "company": "Twitter Inc",
        "ticker": "TWTR",
        "stockPrice": "22.76 USD",
        "timeElapsed": "5 sec ago",
    },
];

const Feed = () => {
    const { videoUrl } = useVideoUrl()
    const classes = useStyle()

    return (
        <Container className={classes.container}>
            <VideoPlayer url={videoUrl} />
            <div className={classes.feedTitleBox}>
                <Typography variant='button'>New</Typography>
            </div>
            <Container>
                <Grid container rowspacing={1} direction='row' justifyContent='center' alignItems='center'>
                    {db.map((video, key) => {
                        return (
                            <Post
                                title={video.title}
                                imageUrl={video.imageUrl}
                                incomingVideoUrl={video.videoUrl}
                            />
                        )
                    })}
                </Grid>
            </Container>
        </Container>
    )
}

export default Feed

/*

                                */