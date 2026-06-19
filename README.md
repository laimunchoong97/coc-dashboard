# Lootbar — CoC Account Scanner

> Real-time Clash of Clans account dashboard powered by the Supercell official API.

[![Uptime](https://img.shields.io/uptimerobot/status/m798XXXXXX?label=Dashboard&style=flat-square)](https://stats.uptimerobot.com/Bx5dpSNS6c)

**🌐 Live Dashboard:** https://coc-dashboard-iqr3.onrender.com

**📊 Status Page:** https://stats.uptimerobot.com/Bx5dpSNS6c

---

## What It Does

- Paste any CoC player tag → instantly pulls **30+ account data fields** from Supercell's official API
- No manual data entry — everything is auto-generated
- Ownership verification via Supercell's `verifytoken` endpoint
- Account value scoring (0–100) based on TH level, heroes, research, war stars & legend league

## Dashboard Sections

| Section | Data Shown |
|---|---|
| **Profile Banner** | Name, tag, TH level, league, clan, trophies, war stars, capital contribution |
| **Account Score** | 0–100 score with breakdown (TH 25pts / Heroes 40pts / Research 15pts / War Stars 10pts / Legend 10pts) |
| **Legend League** | Current season, previous season, best season trophies + rank |
| **Builder Base** | BH level, trophies, best trophies, BB heroes, BB research |
| **Heroes** | All home + builder base heroes with ring charts, level/max, MAX badge |
| **Hero Equipment** | Epic & Rare equipment sorted by rarity, maxed count |
| **Research by Category** | Elixir Troops / Dark Troops / Siege / Spells / Super Troops / Pets / Builder Base — % per category |
| **Troops & Spells** | Tabbed view across all 7 categories with max/level color coding |
| **Achievements** | Key achievements with progress bars |
| **Activity & Stats** | Attack wins, defense wins, donations, war preference, clan |
| **Ownership Verify** | Cryptographic ownership proof via Supercell `verifytoken` API |
| **Raw JSON** | Full API response (collapsible) |

---

## Self-Hosting Setup

### 1. Clone

```bash
git clone https://github.com/laimunchoong97/coc-dashboard.git
cd coc-dashboard
npm install
```

### 2. Get a CoC API Key

1. Go to [developer.clashofclans.com](https://developer.clashofclans.com)
2. Register / Log in → **My Keys → Create New Key**
3. Enter a name and **whitelist your server's IP address**
   - To find your current IP: visit [whatismyip.com](https://whatismyip.com)
4. Copy the generated API key

### 3. Create `.env` file

```bash
cp .env.example .env
```

Edit `.env`:

```
COC_API_KEY=your_api_key_here
PORT=3000
```

### 4. Run locally

```bash
npm start
```

Open **http://localhost:3000** — enter any player tag (e.g. `#QPGP88020`) and hit Scan.

---

## Cloud Deployment (Access from Anywhere)

### Deploy to Render (Free)

1. Fork this repo
2. Go to [render.com](https://render.com) → **New → Web Service**
3. Connect your forked repo
4. Set build & start commands:

| Field | Value |
|---|---|
| Build Command | `npm install` |
| Start Command | `node server.js` |

5. **Environment → Add Variable:**

| Key | Value |
|---|---|
| `COC_API_KEY` | your API key |

6. Deploy → wait ~2 minutes for live URL

### Get Your Server's Outbound IP

Once deployed, visit:
```
https://your-app.onrender.com/api/myip
```

Returns:
```json
{ "ip": "74.220.49.7" }
```

Go back to **developer.clashofclans.com → My Keys → edit** → replace the IP with this one → Save.
> ⚠️ Editing the key generates a new token — update `COC_API_KEY` in Render's environment variables with the new token.

### Keep It Awake (UptimeRobot)

Render's free tier sleeps after 15 min of inactivity. Prevent this:

1. Go to [uptimerobot.com](https://uptimerobot.com) → free account
2. **Add New Monitor:**

| Field | Value |
|---|---|
| Monitor Type | `HTTP(s)` |
| URL | `https://your-app.onrender.com` |
| Interval | `5 minutes` |

3. Save — server stays awake 24/7

---

## How to Find a Player Tag

```
Open Clash of Clans
→ Tap your profile picture (top left)
→ Tag is shown below your name  e.g. #QPGP88020
```

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/player?tag=#XXXX` | GET | Fetch full player data from Supercell API |
| `/api/verify` | POST | Verify account ownership via verifytoken |
| `/api/myip` | GET | Returns server's outbound IP address |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `COC_API_KEY` | ✅ | Supercell developer API key |
| `PORT` | ❌ | Server port (default: 3000) |

---

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla HTML/CSS/JS
- **API:** Supercell Clash of Clans official API
- **Hosting:** Render
- **Uptime:** UptimeRobot

---

## Important Notes

- The CoC API key is **IP-locked** — calls must come from the whitelisted IP
- Never commit your `.env` file — it's in `.gitignore`
- For local dev, create a **separate API key** with your home IP whitelisted
- For production, use the Render deployment key with Render's outbound IP

---

*Built for [Lootbar.com](https://lootbar.com) — Game Account Trading Platform*
