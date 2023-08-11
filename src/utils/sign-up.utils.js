import { formatErrorMessages } from "./response.utils";
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

        console.log(JSON.stringify(data));

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
                const errorMessages = formatErrorMessages(errorData.errors);
                throw new Error(errorMessages);
            }        
            return response.json()
        })
        .then(data => {
            console.log('Response:', data);        
            resolve(true);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        });
    });
}