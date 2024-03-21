import { defaultGetRequestAsync } from "../utils/getRequest.utils";
import { IMunicipalitiesService } from "../service contracts/IMunicipalitiesService";
import CookieService from "./CookieService";
import Municipality from "../models/Municipality";

class MunicipalitiesService implements IMunicipalitiesService {
  constructor() {}

  async fetchFromProvinceAsync(province_Id: number): Promise<Municipality[]> {
    const cookieName = generateCookieName();

    const cookieService = new CookieService(cookieName);
    if (cookieService.hasData()){
      return cookieService.getArray();
    }

    const endpoint = `/api/v1/Address/Municipalities?province_Id=${province_Id}`;

    const municipalities = await defaultGetRequestAsync<Municipality[]>(
      endpoint,
      (data) => console.log(data),
      (error) => console.log("Error: failed to fetch provinces data.")
    );

    cookieService.setArray(municipalities);
    return municipalities;

    function generateCookieName() {
      return `municipalities-data-${province_Id}`;
    }
  }
}

export default MunicipalitiesService;
