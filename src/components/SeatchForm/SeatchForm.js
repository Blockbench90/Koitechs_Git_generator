import React from "react";

import {Button, FormControl, Grid, TextField, Typography} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {useStyles} from "./style";


const SearchForm = ({handleSubmit, handleChange, validationError}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.content}>
            <form onSubmit={handleSubmit} >
                <FormControl className="form">
                    <Grid className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">

                            <Grid item>
                                <AccountCircle fontSize="large" color="action"/>
                            </Grid>

                            <Grid item>
                                <TextField id="username" label="Github username" onChange={handleChange}
                                           placeholder="type your github username" type="text" className={classes.textField}/>
                            </Grid>

                            <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                                Create
                            </Button>
                        </Grid>
                    </Grid>


                    {validationError && (
                        <Typography className={classes.validationTypo} variant="body1">
                            Username is required
                        </Typography>
                    )}
                </FormControl>
            </form>
        </Grid>
    )
}
export default SearchForm
