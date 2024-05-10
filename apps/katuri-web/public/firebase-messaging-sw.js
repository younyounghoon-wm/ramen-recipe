"use strict";

self.__WB_DISABLE_DEV_LOGS = true;

importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js"
);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdGwPuD5OTIT22VsJvXKEPxZVVgJEO0Zk",
  authDomain: "ramen-recipe.firebaseapp.com",
  projectId: "ramen-recipe",
  storageBucket: "ramen-recipe.appspot.com",
  messagingSenderId: "611267245427",
  appId: "1:611267245427:web:6b688a73434e8e5cfe4106",
  measurementId: "G-92B4YDZNBD",
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const isSupported = firebase.messaging.isSupported();
if (isSupported) {
  console.log("isSupported", isSupported);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    const {
      notification: { title, body },
      data: { reservation },
    } = payload;
    const reservationId = parseInt(reservation);
    self.registration.showNotification(title, { body });
  });

  self.addEventListener("push", function (event) {
    // 받은 푸시 데이터를 처리해 알림으로 띄우는 내용
    alert("push event");
  });
}

self.addEventListener("push", function (event) {});

// 클릭 이벤트 처리 - 알림을 클릭하면 사이트로 이동한다.
self.addEventListener("notificationclick", function (event) {});
