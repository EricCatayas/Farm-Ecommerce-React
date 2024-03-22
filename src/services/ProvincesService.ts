import Province from "../models/Province";
import { IProvincesService } from "../service contracts/IProvincesService"
import { defaultGetRequestAsync } from "../utils/getRequest.utils";
import CookieService from "./CookieService";

class ProvincesService implements IProvincesService {
  private cookieName: string;
  private cookieService: CookieService;

  constructor() {
    this.cookieName = "provinces-data";
    this.cookieService = new CookieService(this.cookieName);
  }

  async fetchAllAsync(): Promise<Province[]> {
    if (this.cookieService.hasData()) return this.cookieService.getArray();

    const endpoint = "/api/v1/Address/Provinces";
    const provinces = await defaultGetRequestAsync<Province[]>(
      endpoint,
      (data) => console.log("Success: Provinces data has been fetched."),
      (error) => console.log("Error: failed to fetch provinces data.")
    );

    this.cookieService.setArray(provinces);
    return provinces;
  }
}

export default ProvincesService;
