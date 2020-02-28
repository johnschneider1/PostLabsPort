import React from "react";
import { Route, Redirect } from "react-router-dom";
import landingPage from "./landingPage";
import Work from "./Work";
import Spinners from "./spinners";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/landing" />} />
      <Route path="/landing" component={landingPage} />
      {/* <Route exact path="/landing" component={landingPage} /> */}
      <Route path="/work" component={Work} />
      <Route path="/spin" component={Spinners} />
    </div>
  );
};

export default Routes;
