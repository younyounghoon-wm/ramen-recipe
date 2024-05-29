import express from "express";
const webpush = require("web-push");

const PUBLIC_KEY =
  "BGEGP34Euo3gq0WJdveZbRFY7awmPeNir7zve6sM30_S2sWB1k9hBFlo9LDbYZp97gxo7_j_z35mTFXTki5bqxU";

const PRIVATE_KEY = "wGN6ygcP3J-qpzn0zEqFFNZQbYJriuYP-m5JLT6e1gM";

webpush.setVapidDetails(
  "mailto:younghoondev@gmail.com",
  PUBLIC_KEY,
  PRIVATE_KEY
);

const router = express.Router();

router.post("/", async (req, res) => {
  const subscriptionInfo = req.body;

  return webpush.sendNotification(subscriptionInfo, "푸시 테스트입니다.");
});

export default router;
