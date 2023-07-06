const express = require("express"); // framework to create our API
const cors = require("cors"); //setup the rule to b/w the communication b/w front and backend
const mongoose = require("mongoose"); //communication with mongodb
const Todo = require("./models/Todo");

const app = express();

app.use(express.json());
app.use(cors()); //will allow frontend to use our backend services

mongoose.connect(
  "mongodb+srv://akshat:Gamesforever13@firstmern.nrvt4ho.mongodb.net/"
);

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", async (req, res) => {
  const title = req.body;
  const newTodo = new Todo(title);
  await newTodo.save();
  res.json(title);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put("/todo/status/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.status = !todo.status;
  todo.save();

  res.json(todo);
});

app.listen(3001, () => console.log("Server started!"));
