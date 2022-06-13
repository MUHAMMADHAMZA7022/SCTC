const app = require("./app");
require("dotenv").config({ path: "./config/config.env" });

const cdatabse = require("./config/database");
cdatabse();
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });