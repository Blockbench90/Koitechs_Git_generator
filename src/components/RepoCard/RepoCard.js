import React from "react";

import {Grid, Typography} from "@material-ui/core";

import {useStyles} from "./style";


const RepoCard = ({item}) => {
    const classes = useStyles()

    const { name, url, description, languages} = item

    const hasLanguages = Object.keys(languages).length === 0 ? false : true

    return (
        <Grid className={classes.card}>

            <a href={url} style={{textDecoration: "none", color: "black"}}
               target="_blank" rel="noopener noreferrer" >
                <Typography variant="h6" style={{fontWeight: "bolder", wordBreak: "break-word"}}>
                    {name}
                </Typography>
            </a>

            <Typography variant="body1" style={{wordBreak: "break-word"}}>
                {description ? description : null}
            </Typography>

            <i className={[classes.icon, "fas fa-star"].join(" ")}/>
            {hasLanguages ? (
                Object.keys(languages.data).map((lang, index) =>
                    <Grid className={classes.language} key={lang}>
                        {lang}
                    </Grid>
                )
            ) : (
                <>
                    <span>no language detected</span>
                </>
            )}
        </Grid>
    )
}

export default RepoCard
