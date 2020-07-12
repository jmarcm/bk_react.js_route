import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import ListeELements from "./ListeElements";

function App(props) {
    var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => <ListeELements elems={elems} />}
            />
            <Route path="/app" render={() => <div>Route /app</div>} />
            <Route render={() => <div>Route inconnue</div>} />
        </Switch>
    );
}

export default App;
