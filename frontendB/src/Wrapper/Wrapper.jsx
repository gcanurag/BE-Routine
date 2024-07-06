import React, { useEffect, useState } from "react";
import { currentUserContext, tokenContext } from "../hooks/userContext";

const Wrapper = ({ children }) => {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      console.log(value);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const token = getCookie("cookieToken");
    setToken(token);
    console.log(token);
  }, [token]);
  return (
    <currentUserContext.Provider value={currentUser}>
      <div>{children}</div>
    </currentUserContext.Provider>
  );
};

export default Wrapper;
