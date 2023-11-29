const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());
// julia
// 1lPVOxIXeA1LF8Js
// const DB_HOST = 'mongodb+srv://julia:1lPVOxIXeA1LF8Js@cluster0.azoxse6.mongodb.net/miraplay_user?retryWrites=true&w=majority'

// app.get("/", (req, res) => {
//   res.send("<h2>Home page</h2>");
// });

// app.get("/contacts", (req, res) => {
//   res.send("<h2>Contacts page</h2>");
//   //   console.log(req.url);
//   //   console.log(req.method);
// });
app.use("/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
