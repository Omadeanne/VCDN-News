import { createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);
  const navigate = useNavigate();

  const login = () => {
    // You can add your login logic here if needed
    setIsAuthenticated(true);
    if (redirectAfterLogin) {
      navigate(redirectAfterLogin);
      setRedirectAfterLogin(null); // Clear the stored redirect URL after using it
    } else {
      navigate('/'); // Default redirect if no saved page
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // Use useEffect to handle navigation when redirectAfterLogin changes
  // useEffect(() => {
  //   if (redirectAfterLogin) {
  //     navigate(redirectAfterLogin);
  //     setRedirectAfterLogin(null); // Clear the stored redirect URL after using it
  //   } else {
  //     navigate('/'); // Default redirect if no saved page
  //   }
  // }, [redirectAfterLogin, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, setRedirectAfterLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
