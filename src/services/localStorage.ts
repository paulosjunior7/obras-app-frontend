export const getLocalStorageValue = (key: string) => localStorage.getItem(key);
export const setLocalStorageValue = (key: string, value: string) =>
  localStorage.setItem(key, value);
export const removeLocalStorageValue = (key: string) =>
  localStorage.removeItem(key);

export const isAuthenticated = () => {
  const token = getLocalStorageValue("token");
  return !!token;
};

export const setAuthentication = (token: string) => {
  setLocalStorageValue("token", token);
};

export const getAuthentication = () => {
  return getLocalStorageValue("token");
};
