const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: "Bearer BQBIzq-D_IvGS70CbPT-OFBJIenqBQ7dBdXR-zi_BhktLDVnIhjGIbJCPi55HwiXK1nR3gPd_BXzfTN9N7GBjBM4pDhTRtqYliJm3Y-lKLOTe-34n5m6rA1pdEYTHQOWYksR7FbCHCl6jnB24RjJkdwR0T3uFXTYn9pYz9K-rr2khS4ivpaOYKHD4A6Q9bmOMIErOq-oUwL7TA5tYLl8JB5EzZcS8mn-FOyqCCFK1SV-FzrQLsVtQthzipi9aV9HCfVTdGIApgcShQ"

    //`Bearer ${process.env.SPOTIFY_TOKEN}`
  },
});

module.exports = api;