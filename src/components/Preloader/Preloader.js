import React from "react";
import {Grid} from "@material-ui/core";

import logo_loader from "../../assets/logo_loader.gif"
import {useStyles} from "./style";


const Preloader = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.container}>
            <Grid className={classes.content}>
                <div className={classes.logo}>
                    <img src={logo_loader} alt="logo_loader"/>
                </div>
                <span className={classes.title}>
                    Generate resume...
                </span>
            </Grid>
        </Grid>
    )
}

export default Preloader
