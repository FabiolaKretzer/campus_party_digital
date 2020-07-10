import axios from "axios";

const api = axios.create({
  baseURL: "http://meuIP:3333",
});

export default api;
