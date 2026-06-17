# LeadBid — Deploy to your phone (investor demo)

This folder is a complete, ready-to-deploy version of the LeadBid app. Follow the steps below to put it online and add it to your phone's home screen so it looks and launches like a real native app.

You do **not** need an app store or a developer account for this.

---

## What you need (all free)
- A free **GitHub** account — https://github.com
- A free **Vercel** account — https://vercel.com (sign up with your GitHub account)
- That's it.

---

## Option A — Deploy from your computer (recommended, ~10 min)

### 1. Install Node.js (one time)
Download the **LTS** version from https://nodejs.org and install it. This lets you run the project.

### 2. Test it locally (optional but smart)
Open a terminal in this folder and run:
```bash
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173) in your browser to confirm it works. Press Ctrl+C to stop.

### 3. Push it to GitHub
- Create a new **empty** repository on GitHub called `leadbid-app`.
- In your terminal, in this folder:
```bash
git init
git add .
git commit -m "LeadBid app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/leadbid-app.git
git push -u origin main
```

### 4. Deploy on Vercel
- Go to https://vercel.com → **Add New… → Project**.
- Pick your `leadbid-app` repo → **Import**.
- Vercel auto-detects Vite. Leave everything default → **Deploy**.
- In ~1 minute you get a live URL like `https://leadbid-app.vercel.app`.

That URL is your demo. Open it on any phone.

---

## Option B — Deploy without a computer (drag & drop, ~5 min)

If you'd rather not install anything:
1. Go to https://app.netlify.com/drop
2. You still need a built version, so this works best if someone runs `npm install && npm run build` once and gives you the `dist` folder — then drag that `dist` folder onto the Netlify drop page.

Option A is cleaner because Vercel builds it for you. Use B only if you can't install Node.

---

## Add it to your phone's home screen (the "wow" part)

Once you have your live URL:

### iPhone (Safari)
1. Open the URL in **Safari** (must be Safari, not Chrome).
2. Tap the **Share** button (square with an up-arrow).
3. Scroll down → **Add to Home Screen** → **Add**.
4. A **LeadBid icon** appears on your home screen. Tap it — it launches **full-screen**, no browser bars. Looks exactly like a downloaded app.

### Android (Chrome)
1. Open the URL in **Chrome**.
2. Tap the **⋮** menu (top right).
3. Tap **Install app** (or **Add to Home screen**).
4. Tap the LeadBid icon to launch full-screen.

---

## Demo tips for investors
- **Practice the path** once: pick a category → name a price → watch pros accept → open the booking & protected chat → flip the language to **Español** to show the bilingual experience. That sequence shows the whole value prop in under two minutes.
- **Hand them the link.** They can open it on their own phone during the meeting — far more memorable than watching your screen.
- **Heads-up:** this is a front-end demo with simulated responses, so a page **refresh resets the demo**. That's normal for a prototype — just avoid refreshing mid-walkthrough. (Real persistence comes with the backend.)
- **Updating between meetings:** if you redeploy (push to GitHub), Vercel auto-updates the same URL. The app is set to always load the latest version when you're online.

---

## What's in this folder
```
leadbid-app/
├─ index.html              ← app shell + iOS/Android install tags
├─ package.json            ← dependencies & scripts
├─ vite.config.js          ← build config
├─ src/
│  ├─ main.jsx             ← mounts the app, registers the service worker
│  └─ LeadBid.jsx          ← the full LeadBid app (your prototype)
└─ public/
   ├─ manifest.webmanifest ← makes it installable (name, icon, colors)
   ├─ sw.js                ← service worker (installable + always-fresh)
   ├─ icon-192.png / icon-512.png / icon-maskable-512.png
   ├─ apple-touch-icon.png ← the home-screen icon on iPhone
   └─ favicon-64.png
```

You're all set — deploy, add to home screen, and go pitch.
