import React from "react";
import { Route, Redirect } from "react-router-dom";
import landingPage from "./landingPage";
import Work from "./Work";

const Routes = () => {
  return (
    <div>
      <Route path="/landing" component={landingPage} />
      <Route path="/work" component={Work} />
    </div>
  );
};

export default Routes;
