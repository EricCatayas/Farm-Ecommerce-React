import { createContext, useState } from "react";
import { getCookie } from "../utils/cookie.utils";

export const UserContext = createContext({
  // products
  isSignedIn: false,
  setSignedIn: () => false,
});

export const UserProvider = ({ children }) => {
  var authCookie = getCookie("authorization");
  var isAuthenticated = false;
  if (authCookie !== null) isAuthenticated = true;

  const [isSignedIn, setSignedIn] = useState(isAuthenticated);

  const value = { isSignedIn, setSignedIn };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
