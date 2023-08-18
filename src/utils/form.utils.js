import { formatErrorMessages } from "./response.utils";

export const handleChange = async (event, formFields, setFormFields) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
}

export const defaultPostRequestAsync = (data, endpoint, callback, errorCallback) => {
    return new Promise((resolve, reject) => {  
        const url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + endpoint;
        console.log("Data sent in post request:\n");
        console.log(data);
        
        fetch(url, {
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
            if(callback)
                callback(data);            

            resolve(data);
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
        .then(data => {   
            if(callback)
                callback(data);            

            resolve(data);
        })
        .catch(error => {
            if(errorCallback)
                errorCallback(error);
            
            reject(error);
        });
    });
}