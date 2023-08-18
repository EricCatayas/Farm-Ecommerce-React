import { formatErrorMessages } from "./response.utils";
import { getCookie, deleteCookie } from "./cookie.utils";

const authResponseBody = {
    personName:"",
    email:"",
    token:"",
    expiration:"",
    refreshToken:"",
    refreshTokenExpirationDateTime:""
  };
// v1
export const DefaultPostRequest = (data, callback, errorCallback) => {
    // what types of logic should class or functional components hold? 
}

export const SignOutUser = () => {
    deleteCookie("authorization");
    deleteCookie("refreshToken");
}
