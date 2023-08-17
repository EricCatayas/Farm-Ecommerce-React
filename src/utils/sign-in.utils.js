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

export const SignInUserAsync = async (email, password, rememberMe) => {  
    return new Promise((resolve, reject) => {  
        const sign_in_url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + `/api/v1/Account/Login?RememberMe=${rememberMe}`;

        const data = {
            email,
            password          
        };

        fetch(sign_in_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(!response.ok){                
                const errorMessages = formatErrorMessages(response.errors);
                throw new Error(errorMessages);
            }        
            
            return response.json()
        })
        .then(data => {   
            // Set cookies
            document.cookie = `authorization= Bearer ${encodeURIComponent(data.token)}; expires=${data.expiration}`;
            document.cookie = `refreshToken=${encodeURIComponent(data.refreshToken)}; expires=${data.refreshTokenExpirationDateTime}`;           

            // Retrieve stored cookies
            console.log("Here is your sign in cookie");
            console.log(getCookie('authorization'));

            resolve(data);
            // Cookies.set('authToken', data.token, { expires: 7, secure: true, sameSite: 'strict' });
        })
        .catch(error => {
            console.error(error);
            reject(error);
        });
    });
}

export const SignOutUser = () => {
    deleteCookie("authorization");
    deleteCookie("refreshToken");
}
