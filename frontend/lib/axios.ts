import axios from "axios";

export const api = axios.create({
  baseURL: "https://a.primecog.com/api-gateway/",
});
