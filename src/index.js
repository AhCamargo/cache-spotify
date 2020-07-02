require("dotenv").config();
const express = require("express");
const spotify = require("./lib/spotify");

const app = express();

app.get("/spotify", async (request, response) => {
  const params = request.query;

  const data = await spotify.recommendation(params);

  return response.json(data);
});

const port = process.env.PORT || "3000";
app.listen(port);

console.log(`Server running on port ${port}`);