import React from "react";

import {Grid, Typography} from "@material-ui/core";

import {useStyles} from "./style";


const RepoCard = ({item}) => {
    const classes = useStyles()

    const { name, url, description, languages} = item

    const hasLanguages = Object.keys(languages).length === 0 ? false : true

    return (
        <Grid className={classes.card}>

                <Typography variant="h6">
            <a href={url} target="_blank" rel="noopener noreferrer" >
                    {name}
            </a>
                </Typography>

            <Typography variant="subtitle2" className={classes.description}>
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
