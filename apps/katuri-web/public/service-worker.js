self.addEventListener("activate", () => {
  console.log("Service Worker is activated");
});

self.addEventListener("push", (event) => {
  const data = event.data.text();

  const title = "투리로그";
  const options = {
    body: "진주 하이!",
    badge: data.badge,
    icon: data.icon,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
