import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import { Login, SignUp, ForgotPassword } from "../routes/login";
const PublicRoutes = () => {
  return (
    <Switch>
    
      <Route path={SLUGS.login} component={Login} />
      <Route path={SLUGS.forgotPassword} component={ForgotPassword} />
      <Route path={SLUGS.signup} component={SignUp} />
      <Redirect to={SLUGS.login} />
    </Switch>
  );
};

export default PublicRoutes;
