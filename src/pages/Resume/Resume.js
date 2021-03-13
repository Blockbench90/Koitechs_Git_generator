import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import Preloader from "../../components/Preloader/Preloader";
import UserProfile from "../../components/UserProfille/UserProfile";



const Resume = (props) => {
    const [isFetching, setIsFetching] = useState(true)

    return (isFetching
        ?
        (<Grid id="resume">
            <UserProfile />
        </Grid>)
        :
        (<Preloader />))
}
export default Resume
