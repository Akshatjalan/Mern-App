const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoShcema = new Schema({
  title: { type: String, required: true },
  status: { type: Boolean, default: false },
  timestamp: { type: String, default: Date.now() },
});

const TodoModel = mongoose.model("Todo", TodoShcema);

module.exports = TodoModel;
