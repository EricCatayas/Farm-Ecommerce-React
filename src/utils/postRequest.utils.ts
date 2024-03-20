
export const defaultPostRequestAsync = <T>(
  data: any,
  endpoint: string,
  callback?: (response: T) => void,
  errorCallback?: (error: Error) => void
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const url = process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;
    console.log("Data sent in default post request:\n");
    console.log(data);

    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessages = response.statusText;
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
