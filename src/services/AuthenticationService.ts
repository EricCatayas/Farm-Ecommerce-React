import { IAuthenticationService } from "../service contracts/IAuthenticationService";
import { defaultPostRequestAsync} from "../utils/postRequest.utils";
import { getCookie, deleteCookie } from "../utils/cookie.utils";
import { removeBearerPrefixInToken } from "../utils/auth.utils";
import User from "../models/User";

class AuthenticationService implements IAuthenticationService {
  constructor() {}

  async signInAsync(email:string, password:string, rememberMe:boolean): Promise<User> {
    const formData = {
      email,
      password,
      rememberMe,
    };    

    return await defaultPostRequestAsync(
      formData,
      `/api/v1/Account/Login?RememberMe=${formData.rememberMe}`,
      (response) => {
        this.setAuthCookies(response);
        //LOG
        console.log("Here is your sign in cookie:");
        console.log(getCookie("authorization"));
      }
    );
  }

  //TODO: move behavior to different module
  async signInWithTokenAsync(): Promise<User> {
    const tokenValue = getCookie("authorization");
    if(tokenValue == null)
      throw new Error("User session/cookie does not exist.");

    const token = removeBearerPrefixInToken(tokenValue);
    
    return await defaultPostRequestAsync<User>(
      null,
      `/api/v1/Account/LoginWithToken?token=${token}`,
      (response) => {
        this.setAuthCookies(response);
        //LOG
        console.log("Here is your new sign in cookie:");
        console.log(getCookie("authorization"));
      }
    );
  }

  private setAuthCookies(response: User): void{
    document.cookie = `authorization=Bearer ${encodeURIComponent(
      response.token
    )}; expires=${response.expiration}`;
    document.cookie = `refreshToken=${encodeURIComponent(
      response.refreshToken
    )}; expires=${response.refreshTokenExpirationDateTime}`;
  }

  signOut():void {
    deleteCookie("authorization");
    deleteCookie("refreshToken");
  }
}

export default AuthenticationService;
