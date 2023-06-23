import { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

export const useAuth = () => {
  const auth = useContext(AuthContext);

  // Determine admin status based on user role or any other criteria
  const isAdmin = auth?.user?.role === 'admin';

  return {
    isAdmin,
    ...auth,
  };
};
