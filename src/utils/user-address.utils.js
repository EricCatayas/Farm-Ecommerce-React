
export const CreateUserAddressAsync = async (street, barangay, postal_Code, municipality_Id) => {
    return new Promise((resolve, reject) => {
        const address_url = process.env.FARM_ECOMMERCE_URL + 'api/v1/Address';
        const addressRequest = {
            street,
            barangay,
            postal_Code,
            municipality_Id,
        };

        fetch(address_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressRequest)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(registerDTO => {
            console.log('Response:', registerDTO);
            resolve(true);
        })
        .catch(error => {
            console.error('Address Creation Error:', error);
            reject(false);
        });
    });
};
