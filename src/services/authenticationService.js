import { defaultPostRequestAsync} from "../utils/form.utils";
import { getCookie, deleteCookie } from "../utils/cookie.utils";

class AuthenticationService {
  constructor() {}
  
  async signInAsync(email, password, rememberMe) {

    const formData = {
        email,
        password,
        rememberMe,
    }

    return await  defaultPostRequestAsync(
      formData,
      `/api/v1/Account/Login?RememberMe=${formData.rememberMe}`,
      (data) => {
        // Setting authorization tokens as cookies
        document.cookie = `authorization= Bearer ${encodeURIComponent(data.token)}; expires=${data.expiration}`;
        document.cookie = `refreshToken=${encodeURIComponent(data.refreshToken)}; expires=${data.refreshTokenExpirationDateTime}`;
        // Retrieve stored cookies
        console.log("Here is your sign in cookie:");
        console.log(getCookie("authorization"));
      }
    );
  }

  signOut(){
    deleteCookie("authorization");
    deleteCookie("refreshToken");
  }
}

export default AuthenticationService;
