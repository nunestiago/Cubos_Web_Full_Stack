import React, { createContext, useContext, useState } from 'react';

import { User } from '../types/UserTypes';

interface UserContext {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const userInit = { id: '', name: '', storename: '', email: '', password: '' };

const initialState: UserContext = {
  user: userInit,
  setUser: () => userInit,
  token: '',
  setToken: () => '',
};

export const AuthContext = createContext(initialState);

function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState(initialState.user);
  const [token, setToken] = useState(initialState.token);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

function UseAuth() {
  const { user, setUser, token, setToken } = useContext(AuthContext);
  return { user, setUser, token, setToken };
}

export { AuthProvider, UseAuth };
