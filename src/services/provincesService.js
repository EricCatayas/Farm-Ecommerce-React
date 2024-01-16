import { defaultGetRequestAsync } from "../utils/request.utils";
import CookieService from "./cookieService";

class ProvincesService {  

  constructor() {
    this.cookieName = "provinces-data";
    this.cookieService = new CookieService(this.cookieName);
  }

  async fetchAllAsync() {
    if (this.cookieService.hasData()) 
      return this.cookieService.getArray();
        
    const endpoint = "/api/v1/Address/Provinces";
    const provinces = await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log("Error: failed to fetch provinces data.")
    );

    this.cookieService.setArray(provinces);
    return provinces
  }
}

export default ProvincesService;
