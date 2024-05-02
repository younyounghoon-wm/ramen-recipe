import express from "express";
import TodoModel from "../model/TodoModel";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await TodoModel.find({});

    const response = todos.map((todo) => {
      return {
        _id: todo._id,
        title: todo.title,
        completed: todo.completed,
      };
    });

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("할일 저장 시작");
    // 저장 로직
    console.log(req.body);

    await TodoModel.create({
      title: req.body.title,
      completed: req.body.completed,
    });

    return res.status(200).json("저장 완료");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    console.log("할일 삭제 시작");

    console.log(req.body);
    const targetId = req.body.id;

    const target = await TodoModel.findOne({ _id: targetId });

    if (!target) {
      return res.status(404).json("삭제할 할일의 id가 없습니다.");
    }
    await target?.deleteOne();

    return res.status(200).json("삭제 완료");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/all", async (req, res) => {
  try {
    console.log("할일 전부 삭제 시작");

    await TodoModel.collection.drop();

    return res.status(200).json("삭제 완료");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/", async (req, res) => {
  try {
    console.log("할일 완료 상태 수정 시작");

    console.log(req.body);
    const targetId = req.body.id;

    const target = await TodoModel.findOne({ _id: targetId });

    if (!target) {
      return res.status(404).json("수정할 할일의 id가 없습니다.");
    }
    await target?.updateOne({ completed: !target.completed });

    return res.status(200).json("수정 완료");
  } catch (err) {
    console.log(err);
  }
});

export default router;
