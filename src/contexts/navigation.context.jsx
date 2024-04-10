import React, { createContext, useState } from "react";

// Create a new context
const NavigationContext = createContext();

// Create a provider component
export const NavigationProvider = ({ children }) => {
  const [showSidebar, setToggleSidebar] = useState(false);

  return (
    <NavigationContext.Provider value={{ showSidebar, setToggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
