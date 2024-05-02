import { Schema, model } from "mongoose";

interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
}

const Todo = new Schema<ITodo>({
  title: String,
  completed: Boolean,
});

export default model("Todo", Todo);
