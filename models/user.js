const { schema, model } = require("mongoose");

const userSchema = new Schema({
  email: string,
  password: string,
});

const User = model("user", userSchema);
module.exports = User;
