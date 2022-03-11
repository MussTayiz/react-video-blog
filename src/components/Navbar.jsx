import { Tab, Tabs, makeStyles, Container } from '@material-ui/core';
import { Home as HomeIcon, Pets, Phone, Assignment, AcUnit } from '@material-ui/icons'
import React from 'react'
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(10),
        marginBottom: 0,
        padding: 0,
    },
    tabs: {
        margin: "0 auto",
        display: "table",
        marginBottom: theme.spacing(3)
    },
    tab: {
        width: 200,
        [theme.breakpoints.down("sm")]: {
            width: 50,
            fontSize: "10px",
        },
    }
}))
function Navbar() {
    const classes = useStyle()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (       
            <Container className={classes.container}>
                <Tabs className={classes.tabs} value={0}
                value={value}
                onChange={handleChange}>
                <Tab className={classes.tab} link icon={<HomeIcon />}  component={Link} to="/" label="HOME" />
                <Tab className={classes.tab} icon={<Pets />} label="DOGS" component={Link} to="/dogs" />
                <Tab className={classes.tab} icon={<Assignment />} label="ARTICLES" component={Link} to="/articles" />
                <Tab className={classes.tab} icon={<Phone />} label="CONTACT" component={Link} to="/contact" />
            </Tabs>
               
            </Container>
    )
}
export default Navbar

/*
<Container className={classes.container}>
            <Tabs className={classes.tabs} value={0}
                value={value}
                onChange={handleChange}>
                <Tab className={classes.tab} icon={<HomeIcon />} label="HOME" />
                <Tab className={classes.tab} icon={<Pets />} label="GOLDEN" />
                <Tab className={classes.tab} icon={<AcUnit />} label="DOGS" />
                <Tab className={classes.tab} icon={<Assignment />} label="ARTICLES" />
                <Tab className={classes.tab} icon={<Phone />} label="CONTACT" />
            </Tabs>
        </Container>

        <Tabs className={classes.tabs} value={0}
                    value={value}
                    onChange={handleChange}>
                    <Link to="/"><Tab className={classes.tab} icon={<HomeIcon />} label="HOME" /></Link>
                    <Link to="/golden"><Tab className={classes.tab} icon={<Pets />} label="GOLDEN" /></Link>
                    <Link to="/dogs"><Tab className={classes.tab} icon={<AcUnit />} label="DOGS" /></Link>
                    <Link to="/articles"><Tab className={classes.tab} icon={<Assignment />} label="ARTICLES" /></Link>
                    <Link to="/contact"><Tab className={classes.tab} icon={<Phone />} label="CONTACT" /></Link>
                </Tabs>
*/