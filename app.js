const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/users");

const app = express();

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
app.use("/users", userRoutes);

module.exports = app;
