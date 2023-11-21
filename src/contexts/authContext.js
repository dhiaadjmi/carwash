import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);


  const login = (userToken) => {
    console.log(userToken); 
    setToken(userToken);
  };


  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
