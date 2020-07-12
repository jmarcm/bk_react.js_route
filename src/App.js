import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <Route path="/" render={() => <div>Route /</div>} />
            <Route path="/app" render={() => <div>Route /app</div>} />
        </div>
    );
}

export default App;
