
export const CreateUserAddressAsync = async (
  street: string,
  barangay: string,
  postal_Code: string,
  municipality_Id: string
): Promise<void> => {
  const address_url = process.env.FARM_ECOMMERCE_URL + "api/v1/Address";
  const addressRequest = {
    street,
    barangay,
    postal_Code,
    municipality_Id,
  };

  try {
    const response = await fetch(address_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressRequest),
    });

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }

    const registerDTO = await response.json();
    console.log("Response:", registerDTO);

    return;
  } catch (error) {
    console.error("Address Creation Error:", error);
    throw error;
  }
};
