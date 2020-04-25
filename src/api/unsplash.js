import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XJRgQx_iqL2qX0NbNGv_bYHCgDGUM8ihf3qR4vwqzcQ",
  },
});
