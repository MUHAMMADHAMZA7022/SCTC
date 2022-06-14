const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
const fileupload = require("express-fileupload");
const coookieparser = require("cookie-parser");
app.use(express.json());
app.use(coookieparser());
app.use(fileupload());
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Hello Backend");
});

const user = require("./routers/userroute");
app.use("/api/v1", user); 


module.exports = app;

