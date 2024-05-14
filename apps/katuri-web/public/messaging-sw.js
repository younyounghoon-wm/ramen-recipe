"use strict";

self.addEventListener("push", (event) => {
  const payload = JSON.parse(event.data.text());
  event.waitUntil(
    registration.showNotification(payload.title, {
      body: payload.body,
      data: { link: payload.link },
    })
  );
});
