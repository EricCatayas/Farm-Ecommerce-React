import { formatErrorMessages } from "./response.utils";
import { getCookie } from "./cookie.utils";
// v1
export const RegisterUserAsync = async (userName, email, contact_Num1, contact_Num2, password, confirmPassword) => {  
    return new Promise((resolve, reject) => {  
        const register_url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + '/api/v1/Account/Register';

        const data = {
            userName,
            email,
            contact_Num1,
            contact_Num2,
            password,
            confirmPassword            
        };

        fetch(register_url, {
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
            document.cookie = `authorization= Bearer ${encodeURIComponent(data.token)}; expires=${data.expiration}`;
            document.cookie = `refreshToken=${encodeURIComponent(data.refreshToken)}; expires=${data.refreshTokenExpirationDateTime}`;           

            // Retrieve stored cookies
            console.log("Here is your registration auth cookie");
            console.log(getCookie('authorization'));
            resolve(true);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        });
    });
}