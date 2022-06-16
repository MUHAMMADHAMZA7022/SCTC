const express = require("express");
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors()) 
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
const fileUpload= require("express-fileupload")

const coookieparser = require("cookie-parser");
app.use(coookieparser());

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
const errormiddleware = require("./middleware/error");
// usser routes
const user = require("./routers/userroute");
app.use("/api/v1/user", user); 
// course routes
const course = require("./routers/courseroute");
app.use("/api/v1/course", course); 

app.use(errormiddleware);
module.exports = app;

