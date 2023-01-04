import axios from "axios";

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:4000/";

const WS_URL =
  process.env.NODE_ENV === "production"
    ? window.location.origin.replace(/^http/, "ws")
    : "ws://localhost:4000";

export default axios.create({ baseURL: API_ROOT });
// export default ws = new WebSocket(WS_URL);