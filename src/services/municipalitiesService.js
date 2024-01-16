import { defaultGetRequestAsync } from "../utils/request.utils";
import CookieService from "./cookieService";

class MunicipalitiesService {
  constructor() {
  }

  async fetchFromProvinceAsync(province_Id) {
    const cookieName = generateCookieName();

    const cookieService = new CookieService(cookieName);
    if(cookieService.hasData())
      return cookieService.getArray();

    const endpoint = `/api/v1/Address/Municipalities?province_Id=${province_Id}`;

    const municipalities = await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log("Error: failed to fetch provinces data.")
    );

    cookieService.setArray(municipalities);
    return municipalities;

    function generateCookieName(){
      return `municipalities-data-${province_Id}`;
    }
  }
}

export default MunicipalitiesService;
