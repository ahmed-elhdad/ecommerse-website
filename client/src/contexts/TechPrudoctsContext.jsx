import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const TechPrudoctsContext = createContext();
const TechPrudoctsContextProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false),
    [prudocts, setPrudocts] = useState([]);
  const getPrudocts = () => {
    const res = [
      {
        img: "/public/clean_tools.png",
        name: "fdsafdas",
        description: "fdfadfdsfdsafsdfdsfdasfdsfdsfdsa",
        price: 40,
      },
    ];
    setPrudocts(res);
    if (prudocts.length > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  };
  useEffect(() => {
    getPrudocts();
  }, []);
  const value = { isLoaded, setIsLoaded, prudocts, setPrudocts };
  return (
    <TechPrudoctsContext.Provider value={value}>
      {children}
    </TechPrudoctsContext.Provider>
  );
};

export default TechPrudoctsContextProvider;
