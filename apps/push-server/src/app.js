const express = require("express");
const cors = require("cors");
const fs = require("fs");

const webpush = require("web-push");
const PUBLIC_KEY =
  "BBz-aLS6tcINQi2bVz2c5wJDnnkWr5EaseoR38VoSfJjeivq1bioH1RRqAD1acRhTrDgab6yqn__Uva9t_D9aRo";
const PRIVATE_KEY = "3d0C6ZhzT_TqOm-bD8PYN3xfItY5KkWa0AShlUT9fNE";

webpush.setVapidDetails(
  "mailto:younghoondev@gmail.com",
  PUBLIC_KEY,
  PRIVATE_KEY
);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 구독 정보 저장 API
app.post("/subscribe", (req, res) => {
  // json 데이터로 구독 정보를 받아와서 저장

  const subscribeInfo = req.body;

  // console.log("subscribeInfo", subscribeInfo);

  const list = [];

  // 파일이 존재하면 읽어와서 list에 저장
  if (fs.existsSync(`${__dirname}/data/users.json`)) {
    const data = fs.readFileSync(`${__dirname}/data/users.json`, "utf8");
    list.push(...JSON.parse(data));
  }

  // 새로운 구독 정보를 list에 추가
  list.push(subscribeInfo);

  fs.writeFileSync(
    `${__dirname}/data/users.json`,
    JSON.stringify(list, null, 2)
  );

  // 저장 후 성공 메시지를 응답
  res.send("구독 정보 저장 성공");
});

// 전체 구독 정보 리스트 API
app.get("/subscribeList", (req, res) => {
  // 저장된 구독 정보 리스트를 응답
  const data = fs.readFileSync(`${__dirname}/data/users.json`, "utf8");
  res.send(data);
});

// 푸시 알림 발송 API
app.post("/push", (req, res) => {
  const subscriptionInfo = req.body;

  console.log("subscriptionInfo", subscriptionInfo);

  webpush.sendNotification(
    subscriptionInfo,
    JSON.stringify({
      title: "푸시 알림",
      body: "푸시 알림이 도착했습니다.",
    })
  );

  res.send("푸시 알림 발송 성공");
});
