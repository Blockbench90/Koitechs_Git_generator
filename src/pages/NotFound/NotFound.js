import React from "react";

import {Grid, Typography} from "@material-ui/core";

import error from "../../assets/404.png"
import {useStyles} from "./style";


const NotFound = (props) => {
    const classes = useStyles();

    setTimeout(() => {
        props.history.push("/");
    }, 1500);


    return (
        <Grid id="not-found">
            <Grid className={classes.container}>
                <Typography variant="body1" paragraph>Sorry User not found... </Typography>
                    <img src={error} alt="error"/>
            </Grid>
        </Grid>
    );
};
export default NotFound
