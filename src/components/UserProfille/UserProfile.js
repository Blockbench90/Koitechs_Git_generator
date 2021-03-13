import React from "react";
import {Link} from "react-router-dom";

import {Avatar, Grid, Tooltip, Typography} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Footer from "../Footer/Footer";
import RepoCard from "../RepoCard/RepoCard";
import {useStyles} from "./style";


const UserProfile = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid container className={classes.container}>
                <Link to="/" className="link--back">
                    <i className={[classes.icon, "fas fa-chevron-left fa-2x"].join(" ")}/>
                    <Tooltip title="Back to Homepage" aria-label="add">
                      <ArrowBackIcon color="primary"/>
                    </Tooltip>
                </Link>

                <Grid className={classes.blockFlex}>
                    <Grid className={classes.blockItem}>
                        <Avatar alt="avatar"
                                src="https://avatars.githubusercontent.com/u/61389735?s=460&u=1f728e3e551fc8b29ea158e21d963a53901128f5&v=4"
                                className={classes.avatar}/>
                    </Grid>

                    <Grid className={classes.blockItem}>
                        <Typography variant="body1" paragraph>name</Typography>

                        <Typography variant="body1" paragraph>login</Typography>

                        <Typography variant="body1" paragraph>public repositories: 100</Typography>

                        <Typography variant="body1" paragraph>registered: 2020-30-05</Typography>
                    </Grid>
                </Grid>
                <br/>
                <Grid className={classes.blockFlexRepo}>
                    <RepoCard/>
                    <RepoCard/>
                    <RepoCard/>
                    <RepoCard/>
                    <RepoCard/>
                    <RepoCard/>
                </Grid>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}
export default UserProfile
