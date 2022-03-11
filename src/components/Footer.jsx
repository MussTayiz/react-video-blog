import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    container: {
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white"
    }
}))

function Footer() {
    const classes = useStyle()
    return (
        <Container className={classes.container}>
            <Typography className={classes.text} variant="subtitle">
                Copyright © 2022 abc.com
            </Typography>
        </Container>
    )
}

export default Footer