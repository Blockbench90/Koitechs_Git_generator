import React from "react";
import {Grid} from "@material-ui/core";

import logo_loader from "../../assets/logo_loader.gif"
import {useStyles} from "./style";


const Preloader = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.container}>
            <Grid className={classes.content}>
                <div style={{overflow: "hidden", borderRadius: "10%"}}>
                    <img src={logo_loader} alt="logo_loader"/>
                </div>
                <span style={{fontWeight: 700, fontSize: "20px", paddingLeft: "10px"}}>
                    Generate resume...
                </span>
            </Grid>
        </Grid>
    )
}

export default Preloader
