import React, { createContext, useState, useEffect } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      setRegistrationData(JSON.parse(storedData));
    }
  }, []);

  const saveRegistrationData = (data) => {
    setRegistrationData(data);
    localStorage.setItem("registrationData", JSON.stringify(data));
  };

  return (
    <RegistrationContext.Provider
      value={{ registrationData, saveRegistrationData }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
