import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xWgVQjhrgt-ZYIX-XQLxXYc6U_BvvB56gqIWzQJEOmA",
  },
});
