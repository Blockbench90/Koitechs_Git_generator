import React from 'react';

import {Grid} from "@material-ui/core";

import {useStyles} from "./style";
import logo from '../../assets/Koitechs.png';


const Header = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            <Grid className={classes.languageWrapper}>
                <img src={logo} alt="logo" style={{width: "15%"}}/>
                <a
                    href="https://koitechs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#29b6f6", textDecoration: "none" }}
                >
                    Koitechs
                </a>
            </Grid>
        </Grid>
    )
}

export default Header
