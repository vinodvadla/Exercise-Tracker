import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
