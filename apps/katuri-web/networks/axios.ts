import axios from "axios";

const BASE_URL = "https://push-server.fly.dev";

const Axios = axios.create({
  baseURL: BASE_URL,
});

export default Axios;
