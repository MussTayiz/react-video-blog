import { Container, makeStyles, Grid, Typography } from '@material-ui/core'
import VideoPlayer from './VideoPlayer'
import React from 'react'
import Post from './Post'

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
function Feed() {
    const classes = useStyle()
    return (
        <Container className={classes.container}>
            <VideoPlayer url={url} />
            <div className={classes.feedTitleBox}>
                <Typography variant='button'>New</Typography>
            </div>
            <Container>
                <Grid container rowspacing={1} direction='row' justifyContent='center' alignItems='center'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Grid>
            </Container>
        </Container>
    )
}

export default Feed