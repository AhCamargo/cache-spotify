const api = require("./api");
const queryString = require("querystring");
const cache = require("./cache");

class Spotify {
  async recommendation(options) {
    const params = queryString.stringify(options);

    const cached = await cache.get(params); //Verificando se há cache salvo!

    console.log("cache", cached)
    if (cached) return cached;


    const {
      data
    } = await api.get(`/recommendations?${params}`);

    const response = data.tracks.map((album) => {
      return {
        artist: album.artists[0].name,
        url: album.artists[0].external_urls.spotify,
      };
    });

    cache.set(params, response, 60 * 15); //Guardando no Cache!

    return response;
  }
}

module.exports = new Spotify();