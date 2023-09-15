import React, { createContext, useContext, useState } from "react";


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const creds = {
    user: "test@xyz.com",
    password: "test123",
  };
  const [userCred, setUserCreds] = useState(creds);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        
        userCred,
        setUserCreds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Created a custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
