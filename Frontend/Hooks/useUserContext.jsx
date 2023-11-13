import { useContext } from "react";
import { UserContext } from "../src/context/userContext";

export const useUserContext = () => {
  let context = useContext(UserContext);
  return context;
};
