import { getCookie } from "./cookie.utils";

export const RegisterUserAsync = async (
  userName: string,
  email: string,
  contact_Num1: string,
  contact_Num2: string,
  password: string,
  confirmPassword: string
): Promise<void> => {
  const register_url = process.env.REACT_APP_FARM_ECOMMERCE_URL + "/api/v1/Account/Register";

  const data = {
    userName,
    email,
    contact_Num1,
    contact_Num2,
    password,
    confirmPassword,
  };

  try {
    const response = await fetch(register_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorMessage = await response.statusText;
      throw new Error(errorMessage);
    }

    const responseData = await response.json();

    document.cookie = `authorization= Bearer ${encodeURIComponent(
      responseData.token
    )}; expires=${responseData.expiration}`;
    document.cookie = `refreshToken=${encodeURIComponent(
      responseData.refreshToken
    )}; expires=${responseData.refreshTokenExpirationDateTime}`;

    // Retrieve stored cookies
    console.log("Here is your registration auth cookie");
    console.log(getCookie("authorization"));

    return;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
