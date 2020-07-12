import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <div>Route /</div>} />
                <Route path="/app" render={() => <div>Route /app</div>} />
            </Switch>
        </div>
    );
}

export default App;
