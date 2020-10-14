import axios  from "axios";
import { AUTH_TOKEN_KEY, BASE_URL } from "./constants";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const attachApiToken = async (api) => {
  try {
    const apiToken = localStorage.getItem(AUTH_TOKEN_KEY);
    if (apiToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        apiToken
      )}`;
    } 
    return api;
  } catch (error) {
    console.error("REQUEST NOT SECURED");
    return api;
  }
};

export { api, attachApiToken };
