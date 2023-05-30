import useAuth from "../hooks/useAuth";

const { createContext, useContext } = require("react");

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const General = useAuth();
  return (
    <AuthContext.Provider value={General}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};