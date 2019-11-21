import React from "react";
import { Route, Redirect } from "react-router-dom";
import landingPage from "./landingPage";

const Routes = () => {
  return (
    <div>
      <Route path="/landing" component={landingPage} />
    </div>
  );
};

export default Routes;
