import { createContext, useCallback, useEffect, useState } from "react";
import {
  getAuthentication,
  getLocalStorageValue,
  removeLocalStorageValue,
  setAuthentication,
  setLocalStorageValue,
} from "../services/localStorage";
import {
  UserType,
  useGetUserMeLazyQuery,
  useGetUserMeQuery,
} from "../graphql/generated";

export interface IUserContext {
  jwt?: string;
  logout?: () => void;
  login?: (token: string) => void;
  user?: UserType | undefined;
  setUser?: any;
}

export const UserContext = createContext<IUserContext>({});

export default ({ children }: { children: any }) => {
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState<UserType | undefined>();

  useEffect(() => {
    try {
      const data = getAuthentication();
      if (!!data) {
        setJwt(data);
        //refetch();
      }
    } catch {
      removeLocalStorageValue("token");
      window.location.reload();
    }
  }, []);

  // useEffect(() => {
  //   setUser(data?.user?.findMe as UserType | undefined);
  // }, [data]);

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
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
