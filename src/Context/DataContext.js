import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Hooks
  const [data, setData] = useState({});

  console.log("daaaata", data);

  const setValues = (values) => {
    setData((prevData) => ({ ...prevData, ...values }));
  };
  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => useContext(DataContext);
