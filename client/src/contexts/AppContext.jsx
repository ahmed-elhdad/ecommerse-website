import React, { createContext, useState } from "react";
export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    photo: "/client/public/clothing.png",
    name: "afdsasfsdf",
  });
  const value = { user, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
