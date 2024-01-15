import { defaultGetRequestAsync } from "../utils/request.utils";

class MunicipalitiesService {
  constructor() {}

  async fetchFromProvinceAsync(province_Id) {
    const endpoint = `/api/v1/Address/Municipalities?province_Id=${province_Id}`;

    return await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log("Error: failed to fetch provinces data.")
    );
  }
}

export default MunicipalitiesService;
