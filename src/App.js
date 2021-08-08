import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        <NavBar/>
        </Route>


        <Route exact path="/home">

        <NavBar/>

        </Route>
      </Switch>

    </div>
  );
}

