import Address from "./Address";

interface Store {
  store_Id: number;
  name: string;
  description: string;
  established_Date: string;
  seller_id: string;
  images_Id: string;
  address: Address;
}

export default Store;
