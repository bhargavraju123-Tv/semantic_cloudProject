// import apiClient from "./apiClient";
// import { API_ENDPOINTS } from "../constants/apiConstants";

// const searchService = {
//   async search(query, mode = "semantic") {
//     const response = await apiClient.get(
//       API_ENDPOINTS.SEARCH.BASE,
//       {
//         params: {
//           query,
//           mode,
//         },
//       }
//     );

//     return response.data;
//   },
// };

// export default searchService;

import apiClient from "./apiClient";
import { API_ENDPOINTS } from "../constants/apiConstants";

const searchService = {
  async search(query, mode = "semantic") {
    const response = await apiClient.get(
      API_ENDPOINTS.SEARCH.BASE,
      {
        params: {
          query,
          mode,
        },
      }
    );

    return response.data;
  },
};

export default searchService;