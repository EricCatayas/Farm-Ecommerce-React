import { formatErrorMessages } from "./response.utils";

export const defaultGetRequestAsync = (endpoint, callback, errorCallback) => {
  return new Promise((resolve, reject) => {
    const url = process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;

    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessages = formatErrorMessages(response.errors);
          throw new Error(errorMessages);
        }

        return response.json();
      })
      .then((jsonResponse) => {
        if (callback) callback(jsonResponse);

        resolve(jsonResponse);
      })
      .catch((error) => {
        if (errorCallback) errorCallback(error);

        reject(error);
      });
  });
};