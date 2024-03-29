import { defaultPostRequestAsync} from "../utils/form.utils";
import { getCookie, deleteCookie } from "../utils/cookie.utils";
import { removeBearerPrefixInToken } from "../utils/auth.utils";

class AuthenticationService {
  constructor() {}

  async signInAsync(email, password, rememberMe) {
    const formData = {
      email,
      password,
      rememberMe,
    };    

    return await defaultPostRequestAsync(
      formData,
      `/api/v1/Account/Login?RememberMe=${formData.rememberMe}`,
      (data) => {
        this.#setAuthCookies(data);
        //LOG
        console.log("Here is your sign in cookie:");
        console.log(getCookie("authorization"));
      }
    );
  }

  //TODO: move behavior to different module
  async signInWithTokenAsync() {
    const tokenValue = getCookie("authorization");
    const token = removeBearerPrefixInToken(tokenValue);
    
    return await defaultPostRequestAsync(
      `/api/v1/Account/LoginWithToken?token=${token}`,
      (data) => {
        this.#setAuthCookies(data);
        //LOG
        console.log("Here is your new sign in cookie:");
        console.log(getCookie("authorization"));
      }
    );
  }

  #setAuthCookies(data){
    document.cookie = `authorization=Bearer ${encodeURIComponent(
      data.token
    )}; expires=${data.expiration}`;
    document.cookie = `refreshToken=${encodeURIComponent(
      data.refreshToken
    )}; expires=${data.refreshTokenExpirationDateTime}`;
  }

  signOut() {
    deleteCookie("authorization");
    deleteCookie("refreshToken");
  }
}

export default AuthenticationService;
