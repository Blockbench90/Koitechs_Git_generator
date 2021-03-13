import React from "react";

import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";


const Footer = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.container} style={{ flexDirection: "column" }}>
            <Typography variant="h5" align="center">
                Created special for{" "}
                <a
                    href="https://koitechs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#29b6f6", textDecoration: "none" }}
                >
                    Koitechs
                </a>
            </Typography>
        </Grid>
    );
};

export default Footer
