var mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

const registerModel = mongoose.model("Register", registerSchema);
module.exports = registerModel;
