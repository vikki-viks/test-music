require("./init-config");
require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routers/index");
const errorHandling = require("./middlewares/error-handling");
const logging = require("./middlewares/logging");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logging);
app.use("/", router);

app.use(errorHandling);

const start = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log("server started "));
  } catch (e) {
    console.log(e);
  }
};

start();
