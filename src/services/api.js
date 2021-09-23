import axios from "axios";

const api = axios.create({
  baseURL: "https://laparc.herokuapp.com/",
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("@laparcPatient:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalReq = err.config;
    if (err.response.status === 401 && err.config && !err.config._retry) {
      const refreshToken = localStorage.getItem("@laparcPatient:refreshToken");
      const token = localStorage.getItem("@laparcPatient:token");

      try {
        const apiRefresh = axios.create({
          baseURL: "https://laparc.herokuapp.com/",
        });
        const response = await apiRefresh.get("/refresh-token", {
          headers: { Authorization: `Bearer ${refreshToken}` },
        });
        localStorage.setItem("@LaparcPatient:token", response.data.token);
        localStorage.setItem(
          "@laparcPatient:refreshToken",
          response.data.refresh_token
        );
        originalReq.headers["Authorization"] = `Bearer ${response.data.token}`;

      } catch (error) {
        console.log(error, "error");
      }
      return axios(originalReq);
    } else {
      throw err;
    }
  }
);

export default api;
