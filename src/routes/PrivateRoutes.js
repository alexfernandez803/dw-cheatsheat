import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";

const Main = lazy(() => import("../routes/main/Main"));
const ChangePassword = lazy(() => import("../routes/profile/ChangePassword"));
const PrivateRoutes = ({ searchText }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path={SLUGS.dashboard}>
          <Main searchText={searchText} />
        </Route>
        <Route exact path={SLUGS.profile}>
          <ChangePassword />
        </Route>

        <Redirect to={SLUGS.dashboard} />
      </Switch>
    </Suspense>
  );
};

export default PrivateRoutes;
