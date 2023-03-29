// * DEPENDENCIES
const express = require("express");

// * ENVIRONMENT VARIABLES
const ENV = "development";
const DOMAIN = ENV === "development" ? "localhost" : "";
const PORT = 6001;

// * EXPRESS SERVER
const app = express();
app.listen(PORT, `${DOMAIN}`, () => {
  console.log(`Server listening on port ${PORT}`);
});

// * Database
require("./database/db");

// * MiddleWare & Routes
app.use(express.json());
const api = require("./routes/api");
app.use(api);
