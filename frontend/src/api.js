import axios from "axios";

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:4000/";

export default axios.create({ baseURL: API_ROOT });