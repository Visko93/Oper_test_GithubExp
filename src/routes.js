import React from "react";
import { Switch, Route } from "react-router-dom";
import LandPage from "./pages/Landpage";

function Routes() {
  return (
    <Switch>
      <Route>
        <LandPage />
      </Route>
    </Switch>
  );
}

export default Routes;
