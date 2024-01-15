import { defaultGetRequestAsync } from "../utils/request.utils";

class ProvincesService {
  constructor() {}

  async fetchAllAsync() {
    const endpoint = "/api/v1/Address/Provinces";

    return await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log("Error: failed to fetch provinces data.")
    );
  }
}

export default ProvincesService;
