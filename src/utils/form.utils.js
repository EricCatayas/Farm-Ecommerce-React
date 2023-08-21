import { getCookie } from "./cookie.utils";
import { formatErrorMessages } from "./response.utils";

export const handleChange = async (event, formFields, setFormFields) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
}

export const defaultPostRequestAsync = (data, endpoint, callback, errorCallback) => {
    return new Promise((resolve, reject) => {  
        const url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;
        console.log("Data sent in default post request:\n");
        console.log(data);
        
        fetch(url, {
            method: 'POST',
            credentials: 'include',
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
        .then(jsonResponse => {   
            if(callback)
                callback(jsonResponse);            

            resolve(jsonResponse);
        })
        .catch(error => {
            if(errorCallback)
                errorCallback(error);
            
            reject(error);
        });
    });
}

export const formDataPostRequestAsync = (formData, endpoint, callback, errorCallback) => {
    return new Promise((resolve, reject) => {  
        const url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;
        const authToken = getCookie("authorization");

        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Authorization' : authToken
            },
            body: formData
        })
        .then((response) => {
            if(!response.ok){                
                const errorMessages = formatErrorMessages(response.errors);
                console.log(response);
                throw new Error(errorMessages);
            }        
            
            return response.json()
        })
        .then(jsonResponse => {   
            if(callback)
                callback(jsonResponse);            

            resolve(jsonResponse);
        })
        .catch(error => {
            if(errorCallback)
                errorCallback(error);
            
            reject(error);
        });
    });
}

export const defaultGetRequestAsync = (endpoint, callback, errorCallback) => {
    return new Promise((resolve, reject) => {  

        const url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;
        
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            if(!response.ok){                
                const errorMessages = formatErrorMessages(response.errors);
                throw new Error(errorMessages);
            }        
            
            return response.json()
        })
        .then(jsonResponse => {   
            if(callback)
                callback(jsonResponse);            

            resolve(jsonResponse);
        })
        .catch(error => {
            if(errorCallback)
                errorCallback(error);
            
            reject(error);
        });
    });
}