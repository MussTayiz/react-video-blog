import { alpha, AppBar, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#5463FF"
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "20%",
        [theme.breakpoints.down("sm")]: {
            width: "50%"
        }
    },
    searchInput: {
        color: "white",
        paddingLeft: theme.spacing(1)
    }
}))

function Header() {
    const classes = useStyles()
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6'>
                    Golden Retriever
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.searchInput} />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header