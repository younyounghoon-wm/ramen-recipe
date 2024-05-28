self.addEventListener("activate", () => {
  console.log("Service Worker is activated");
});

self.addEventListener("push", (event) => {
  const data = event.data.json();

  const title = "Paper";
  const options = {
    body: "푸시 테스트 중입니다.",
    badge: data.badge,
    icon: data.icon,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
