export const fetchApi = (
  endPoint: string,
  method: "GET" | "POST",
  body?: string,
  jwt?: string
) => {
  const headers: {
    "content-type": string;
    Authorization?: string;
  } = {
    "content-type": "application/json",
  };

  const URL = `http://0.0.0.0:5000/api/${endPoint}`;

  if (!!jwt) {
    headers.Authorization = `Bearer ${jwt}`;
  }

  return fetch(URL, {
    method,
    headers,
    body,
  });
};
