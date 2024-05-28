import { Application } from "express";

const express = require("express");
const cors = require("cors");
const app: Application = express();
const port = 8000;
require("dotenv").config();

import todosRouter from "./routes/todos";
import pushRouter from "./routes/push";

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  return res.json("Hello World");
});

app.use("/todos", todosRouter);

app.use("/push", pushRouter);
