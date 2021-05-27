import React, { useState, createContext } from "react";

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setIsOpen: () => setIsOpen(isOpen === true ? false : true)
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
