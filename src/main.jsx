import React from "react";
import { createRoot } from "react-dom/client";
import LeadBid from "./LeadBid.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LeadBid />
  </React.StrictMode>
);

// Register the service worker so the app is installable on Android/Chrome
// and launches reliably. Network-first, so investors always see the latest
// version when online (no stale demo between meetings).
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
