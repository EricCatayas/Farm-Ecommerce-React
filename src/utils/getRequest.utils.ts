export const defaultGetRequestAsync = <T>(
  endpoint: string,
  callback?: (response: T) => void,
  errorCallback?: (error: Error) => void
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const url = `${process.env.REACT_APP_FARM_ECOMMERCE_URL}${endpoint}`;

    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessages = response.statusText;
          throw new Error(errorMessages);
        }
        return response.json() as T;
      })
      .then((jsonResponse: T) => {
        if (callback && typeof callback === "function") 
          callback(jsonResponse);
        resolve(jsonResponse);
      })
      .catch((error) => {
        if (errorCallback && typeof errorCallback === "function")
          errorCallback(error);
        reject(error);
      });
  });
};
