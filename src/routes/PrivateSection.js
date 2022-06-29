import Sidebar from "../components/sidebar/Sidebar";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes"

const PrivateSection = () => {
  const [searchText, setSearchText] = useState("");
  const { userHasAuthenticated, user } = useAppContext();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const onLogout = () => {
    Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  };

  return (

    // Change Password is next-
    <div className="flex h-auto">
      <Sidebar handleInputChange={handleInputChange} searchText={searchText} onLogout={onLogout} user={user} />
      <main className="w-full h-auto bg-gray-200">
        <PrivateRoutes searchText={searchText} />
      </main>
    </div>
  );
};

export default PrivateSection;
