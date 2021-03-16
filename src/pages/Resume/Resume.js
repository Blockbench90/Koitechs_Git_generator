import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";

import {Grid} from "@material-ui/core";

import {fetchUserData, fetchUserRepos} from "../../api/restApi";

import Preloader from "../../components/Preloader/Preloader";
import UserProfile from "../../components/UserProfille/UserProfile";


const Resume = (props) => {
    const history = useHistory()

    const [data, setData] = useState(null)
    const [repos, setRepos] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    const username = props.match.params.username


    useEffect(() => {
        async function fetch() {
            try {
                const userData = await fetchUserData(username)
                const userRepos = await fetchUserRepos(username)
                setData(userData)
                setRepos(userRepos)
                setIsFetching(true)
            } catch (err) {
                history.push({
                    pathname: "/user-not-found"
                });
                console.log(err)
            }
        }

        fetch()
    }, [username, history])

    return (isFetching && data
        ?
        (<Grid id="resume">
            <UserProfile data={data} repos={repos}/>
        </Grid>)
        :
        (<Preloader/>))
}
export default Resume
