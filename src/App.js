import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";

import ListeELements from "./ListeElements";

function App(props) {
    var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];
    return (
        <div>
            <Link to="/">Liste complète</Link> &nbsp;&nbsp;
            <Link to="/edit/2">Index 2</Link>

            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <ListeELements {...props} elems={elems} />
                    )}
                />
                <Route
                    path="/edit/:index"
                    render={(props) => (
                        <ListeELements {...props} elems={elems} />
                    )}
                />
                <Route path="/app" render={() => <div>Route /app</div>} />
                <Route render={() => <div>Route inconnue</div>} />
            </Switch>
        </div>
    );
}

export default App;
