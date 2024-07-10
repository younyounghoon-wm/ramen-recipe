import axios from "axios";

const BASE_URL = "https://e8eb-59-12-102-133.ngrok-free.app";

const Axios = axios.create({
  baseURL: BASE_URL,
});

export default Axios;
