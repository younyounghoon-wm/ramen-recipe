"use client";

import { PropsWithChildren, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdGwPuD5OTIT22VsJvXKEPxZVVgJEO0Zk",
  authDomain: "ramen-recipe.firebaseapp.com",
  projectId: "ramen-recipe",
  storageBucket: "ramen-recipe.appspot.com",
  messagingSenderId: "611267245427",
  appId: "1:611267245427:web:6b688a73434e8e5cfe4106",
  measurementId: "G-92B4YDZNBD",
};

function FirebaseProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          alert("Notification permission granted.");
        }
      })
      .catch((err) => {
        console.log("Error occurred while requesting permission: ", err);
        alert("Error occurred while requesting permission: " + err);
      });

    const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
      alert(
        "Message received. " +
          payload.notification?.title +
          payload.notification?.body
      );
    });
  }, []);

  return children;
}
export default FirebaseProvider;
