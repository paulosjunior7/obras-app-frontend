import { createContext, useCallback, useEffect, useState } from "react";
import {
  getAuthentication,
  getLocalStorageValue,
  removeLocalStorageValue,
  setAuthentication,
  setLocalStorageValue,
} from "../services/localStorage";

export interface IUserContext {
  jwt?: string;
  logout?: () => void;
  login?: (token: string) => void;
}

export const UserContext = createContext<IUserContext>({});

export default ({ children }: { children: any }) => {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    try {
      const data = getAuthentication();
      if (!!data) {
        setJwt(data);
      }
    } catch {
      removeLocalStorageValue("token");
      window.location.reload();
    }
  }, []);

  const logout = useCallback(() => {
    removeLocalStorageValue("token");
    setJwt("");
    window.location.reload();
  }, []);

  const login = useCallback((token: string) => {
    setAuthentication(token);
    setJwt(token);
    window.location.reload();
  }, []);

  return (
    <UserContext.Provider
      value={{
        jwt,
        logout,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
