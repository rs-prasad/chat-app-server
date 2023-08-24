const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

const authRouter = require("./src/routes/auth");

const app = express();
app.use(morgan("tiny"));

app.use("/auth", authRouter);

app.listen(process.env.PORT || 8000, () =>
  console.log(`App listening on port: ${process.env.PORT || 8000}`)
);
