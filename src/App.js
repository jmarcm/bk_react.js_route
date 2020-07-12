import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import ListeELements from "./ListeElements";

function App(props) {
	var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];
	
	function handlerClickFullList() {
		props.history.push("/");
	}

	function handlerClickIndex2() {
		props.history.push("/edit/2");
	}
    return (
        <div>
            <button onClick={handlerClickFullList}>Liste complète</button> &nbsp;&nbsp;
			<button onClick={handlerClickIndex2}>Index 2</button>

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
