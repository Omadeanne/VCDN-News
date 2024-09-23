import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);
  const [user, setUser] = useState(null); // State to store user info (name, email)
  const navigate = useNavigate();

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Store user data when logging in
    if (redirectAfterLogin) {
      navigate(redirectAfterLogin);
      setRedirectAfterLogin(null);
    } else {
      navigate('/');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setRedirectAfterLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
