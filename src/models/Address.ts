interface Address {
  id: string; // Consider changing to a more appropriate type
  street: string;
  barangay: string;
  municipality: string;
  postal_Code: string;
  province: string;
}

export default Address;