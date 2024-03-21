import { getCookie } from "./cookie.utils";

export const multipartPostRequestAsync = <T>(
  formData: FormData,
  endpoint: string,
  callback?: (response: T) => void,
  errorCallback?: (error: Error) => void
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const url = process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;
    const authToken = getCookie("authorization");

    const headers: HeadersInit = {
      Accept: "application/json",
    };

    if (authToken !== null) {
      headers.Authorization = authToken;
    }

    fetch(url, {
      method: "POST",
      credentials: "include",
      headers,
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessages = response.statusText;
          console.log(response);
          throw new Error(errorMessages);
        }

        return response.json();
      })
      .then((jsonResponse: T) => {
        if (callback && typeof callback === "function") callback(jsonResponse);

        resolve(jsonResponse);
      })
      .catch((error) => {
        if (errorCallback && typeof errorCallback === "function")
          errorCallback(error);

        reject(error);
      });
  });
};
