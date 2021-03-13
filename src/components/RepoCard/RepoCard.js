import React from "react";

import {Grid, Typography} from "@material-ui/core";

import {useStyles} from "./style";


const RepoCard = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.card}>

            <a href={"url"} style={{textDecoration: "none", color: "black"}}
               target="_blank" rel="noopener noreferrer" >
                <Typography variant="h6" style={{fontWeight: "bolder", wordBreak: "break-word"}}>
                    name
                </Typography>
            </a>

            <Typography variant="body1" style={{wordBreak: "break-word"}}>
                description
            </Typography>

            <i className={[classes.icon, "fas fa-star"].join(" ")}/>
                    <Grid className={classes.language}>
                        hasLanguages
                    </Grid>
        </Grid>
    )
}

export default RepoCard
