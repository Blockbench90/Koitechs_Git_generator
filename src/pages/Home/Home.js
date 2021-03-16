import React, {useState} from "react";
import {useHistory} from "react-router";

import {Grid, Typography} from "@material-ui/core";

import SearchForm from "../../components/SeatchForm/SeatchForm";
import Header from "../../components/Header/Header";
import {classes} from "./style";

const Home = () => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [validationError, setValidationError] = useState(false)

    const handleChange = (event) => {
        setUsername( event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.trim() !== "") {
            history.push("/user/" + username);
        } else {
            setValidationError( true );
        }
    }

    return (
        <React.Fragment>
            <Header />
            <Grid id="home" container className={classes.container} style={{ flexDirection: "column" }}>

                <Typography variant="h5" align="center">
                    Github Resume Generator
                </Typography>

                <Typography variant="body1" className="description" align="center">
                    Please, enter GitHub User Name
                </Typography>

                <SearchForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    validationError={validationError}
                />
            </Grid>
        </React.Fragment>
    )
}

export default Home
