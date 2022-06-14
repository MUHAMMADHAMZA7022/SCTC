const app = require("./app");
require("dotenv").config({ path: "./config/config.env" });

const cdatabse = require("./config/database");
cdatabse();
process.on("uncaughtException", (err) => {
  console.log("Shutting Down The Server due to Uncaught Exception");
  console.log(`Error:${err.message}`);
  process.exit(1);
});
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
//3 error

//(unhandle promise rejection) error means mongodb ki string glt dl dy
process.on("unhandledRejection", (err) => {
  //ye build in function ha sb kuch
  console.log("Shutting Down The Server due to Unhandled promise Rejection");
  console.log(`Error,${err.message}`); //ye message aye hamei k kia error ha
  server.close(() => {
    //ye hum ny jldi sy server close kr diya or bd mein call back function dy k osy exit kr diya is process sy
    process.exit(1);
  });
});
