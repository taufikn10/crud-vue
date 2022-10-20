import axios from "axios";
// Resful API Config
axios.defaults.headers["Content-Type"] = "application/json";

// Endpoint
const hostname = import.meta.env.VITE_BASE_API_URL;

// Instance Creation
const baseApi = axios.create({
  baseURL: hostname,
});

export { baseApi };
