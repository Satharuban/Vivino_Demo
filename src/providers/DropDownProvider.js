import React, { useState, createContext } from "react";

export const DropDownContext = createContext();

const DropDownProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <DropDownContext.Provider
      value={{
        show,
        setShow: () => setShow(show === true ? false : true)
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownProvider;
