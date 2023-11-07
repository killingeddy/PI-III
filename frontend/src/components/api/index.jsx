import axios from "axios";

const api = axios.create({
  baseURL: 'https://planetaaqua.onrender.com'
});

export default api;