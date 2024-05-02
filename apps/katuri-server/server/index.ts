import { Application } from "express";
const express = require("express");
const app: Application = express();
const port = 8000;
// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const TodoModel = require("./model/TodoModel");
import TodoModel from "./model/TodoModel";
import todosRouter from "./routes/todos";
const cors = require("cors");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const uri =
  "mongodb+srv://younghoondev:asdf0108@cluster0.fqduvxx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err: any) => {
    console.log("DB connection error", err);
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  // const params = req.params;
  // const path = req.path;
  // const ip = req.ip;
  // const hontname = req.hostname;

  // try {
  //   TodoModel.create({
  //     title: "타이틀",
  //     completed: false,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  // const user = new Data({
  //   name: "younghoon",
  //   email: "spawnnim@naver.com",
  // });

  // Data.create({
  //   name: "younghoon",
  //   email: "spawn",
  //   password: "1234",
  // })
  //   .then((data: any) => {
  //     console.log("저장 완료");
  //   })
  //   .catch((err: any) => {
  //     console.log("error");
  //     console.log(err);
  //   });

  // user
  //   .save()
  //   .then((data) => {
  //     console.log("저장 완료");
  //   })
  //   .catch((err) => {
  //     console.log("error");
  //     console.log(err);
  //   });

  return res.json("Hello World");
});

app.use("/todos", todosRouter);
