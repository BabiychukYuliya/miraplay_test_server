const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("<h2>Home page</h2>");
// });

// app.get("/contacts", (req, res) => {
//   res.send("<h2>Contacts page</h2>");
//   //   console.log(req.url);
//   //   console.log(req.method);
// });
app.use("/users", userRoutes);

app.listen(3001, () => console.log("Server is running "));
