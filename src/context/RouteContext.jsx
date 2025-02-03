import { createContext, useEffect, useState } from "react";

export const RouteContext = createContext({});

export const RouteProvider = ({ children }) => {
  const [path, setPath] = useState("sign-in");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    if (userData.email && userData.password) {
      setPath("/");
    }
  }, []);

  const handlePathChange = (url = "/") => {
    setPath(url);
  };

  return (
    <RouteContext.Provider
      value={{ path, onPathChange: handlePathChange, setPath }}
    >
      {children}
    </RouteContext.Provider>
  );
};
