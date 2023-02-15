const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routers = require("./routers/router");

const app = express();
const connectDatabase = require("./helpers/database/connectDatabase");
const errorHandler = require("./middlewares/errorHandler");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

//MongoDB Connection
connectDatabase();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/", routers);

app.use(errorHandler);
//PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App Started On ${PORT}`);
});
