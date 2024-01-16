import Cookies from "js-cookie";
import { defaultGetRequestAsync } from "../utils/request.utils";

class ProvincesService {  
  cookieName = "provinces-cookie";
  constructor() {}

  async fetchAllAsync() {
    const endpoint = "/api/v1/Address/Provinces";
    var provinces = Cookies.get(cookieName);

    if(provinces != null){
      console.log("provinces cookie is not null.")
      return provinces;
    }

    provinces = await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log("Error: failed to fetch provinces data.")
    );

    Cookies.set(cookieName, provinces);
    return provinces
  }
}

export default ProvincesService;
