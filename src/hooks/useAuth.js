import { useContext } from "react";
import { AuthContext } from "../context/authpovider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
