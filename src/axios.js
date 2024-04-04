import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://evangadi-forum21.onrender.com/api",
});

export default baseUrl;
