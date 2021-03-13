import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import NotFound from "./pages/NotFound/NotFound";
import Resume from "./pages/Resume/Resume";
import Home from "./pages/Home/Home";

const App = () => (
    <Router>
        <Grid id="app">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user/:username" component={Resume} />
                <Route path="/user-not-found" component={NotFound} />
            </Switch>
        </Grid>
    </Router>
);

export default App
