import React from "react";
import {Link} from "react-router-dom";

import {Avatar, Grid, Tooltip, Typography} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Footer from "../Footer/Footer";
import RepoCard from "../RepoCard/RepoCard";
import {useStyles} from "./style";
import Time from "../Time/Time";


const UserProfile = ({data, repos}) => {
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
                        <Avatar alt="avatar" src={data.avatar_url} className={classes.avatar}/>
                    </Grid>
                    <Grid className={classes.blockItem}>
                        {data.name && (<Typography variant="body1" paragraph>{data.name}</Typography>)}

                        {data.login && (<Typography variant="body1" paragraph>{data.login}</Typography>)}

                        {data.public_repos && (<Typography variant="body1" paragraph>public repositories: {data.public_repos}</Typography>)}

                        {data.created_at && (<Typography variant="body1" paragraph>registered: <Time date={data.created_at}/></Typography>)}
                    </Grid>
                </Grid>
                <br/>
                <Grid className={classes.blockFlexRepo}>
                    {repos.length > 0 ? (
                        repos.map((repo, index) => {
                                if(index < 10) {
                                    return <RepoCard item={repo} key={repo.name}/>
                                }
                                return null
                            }
                        )
                    ) : (
                        <Grid className={classes.info}>
                            <span>{data.name} does not has any repositories</span>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}
export default UserProfile
