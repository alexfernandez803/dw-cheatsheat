import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";
import { AppContext } from "../libs/contextLib";
import { Auth } from "aws-amplify";

function Routes() {
  const { pathname } = useLocation();
   // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function onLoad() {
      try {
        await Auth.currentSession();
        const user = await Auth.currentAuthenticatedUser()
        userHasAuthenticated(true);
        setUser(user)
      } catch (e) {
        if (e !== "No current user") {
          history.push("/login")
        }
      }
    }
    onLoad();
  }, [pathname, history]);
  


  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, user }}>
      {isAuthenticated ? <PrivateSection /> : <PublicRoutes />}
    </AppContext.Provider>
  );
}

export default Routes;
