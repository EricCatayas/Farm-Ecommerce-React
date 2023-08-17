import { formatErrorMessages } from "./response.utils";

export const handleChange = async (event, formFields, setFormFields) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
}

export const defaultPostRequestAsync = (data, path, callback, errorCallback) => {
    return new Promise((resolve, reject) => {  
        const url =  process.env.REACT_APP_FARM_ECOMMERCE_URL + path;
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
            if(callback !== null)
                callback(data);            

            resolve(data);
        })
        .catch(error => {
            if(errorCallback != null)
                errorCallback(error);
            
            reject(error);
        });
    });
}