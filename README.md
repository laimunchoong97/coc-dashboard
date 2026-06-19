# Lootbar — CoC Account Scanner

> Real-time Clash of Clans account dashboard powered by the Supercell official API.
> Built with CoC branding — Lilita One font, night sky background, gold UI system.

**🌐 Live Dashboard:** https://coc-dashboard-iqr3.onrender.com  
**📊 Status Page:** https://stats.uptimerobot.com/Bx5dpSNS6c  
**🐙 GitHub:** https://github.com/laimunchoong97/coc-dashboard

---

## What It Does

Paste any CoC player tag → instantly pulls **30+ data fields** from Supercell's official API.  
Zero manual input. Everything auto-generated and API-verified.

---

## Dashboard Sections

| Section | Data Shown |
|---|---|
| **Auto Listing Generator** | Copyable listing title + estimated price range ($USD) |
| **Account Highlights** | Auto-generated selling point chips (Legend rank, hero %, research %, epic equipment) |
| **Profile Banner** | TH image, name, tag, league, clan badge, trophies, war stars, capital, percentile badges |
| **Account Score** | 0–100 score: TH (25pts) · Heroes (40pts) · Research (15pts) · War Stars (10pts) · Legend (10pts) |
| **Legend League** | Current season trophies + rank, previous season, best ever, total legend trophies |
| **Builder Base** | BH level + image, BH league name, trophies, best trophies, BB heroes |
| **Heroes** | All 8 heroes (6 home + 2 BB) — 3D portrait, SVG ring chart, level badge, **equipped loadout chips** |
| **Clan Recruitment Score** | 0–100 score with HIRE/WATCH/PASS verdict — 6 weighted factors with bars |
| **Activity & Clan** | Attack wins, defense wins, **attack win rate bar**, donations, capital, war pref, clan card |
| **Hero Equipment** | All 41 pieces in image grid — Epic/Rare with name labels, rarity dot, maxed colour |
| **Research Progress** | 7-category bars: Elixir, Dark, Spells, Siege, Super, Pets, Builder Base |
| **Troops & Spells** | 7-tab image grid — **active super troops shown first** with glow badge |
| **Key Achievements** | Progress bars for 11 key achievements |
| **Player Stats** | Games Champion, War League Legend, Most Valuable Clanmate, Well Seasoned, Win Rate, CWL Active |
| **Compare Mode** | Side-by-side 2-player comparison with 13-metric diff table and visual bars |
| **Ownership Verification** | Cryptographic proof via Supercell `verifytoken` — unique to CoC API |
| **Raw JSON** | Full API response collapsible |

---

## Asset Coverage

All images sourced from the official Clash of Clans Fandom Wiki CDN.

| Category | Count | Coverage |
|---|---|---|
| Town Halls | 18 (TH1–TH18) | ✅ Complete |
| Builder Halls | BH6–BH10 | ✅ Complete |
| Heroes | 8 | ✅ Complete |
| Elixir Troops | 19 | ✅ Complete |
| Dark Troops | 10 | ✅ Complete |
| Super Troops | 15 | ✅ Complete |
| Siege Machines | 9 | ✅ Complete |
| Pets | 12 | ✅ Complete |
| Builder Base Troops | 11 | ✅ Complete |
| Spells | 17 | ✅ Complete |
| Hero Equipment | 41 | ✅ Complete |

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
2. Register → **My Keys → Create New Key**
3. Whitelist your server IP (find it at [whatismyip.com](https://whatismyip.com))
4. Copy the generated API key

### 3. Create `.env`

```bash
cp .env.example .env
# Edit .env and set COC_API_KEY=your_key_here
```

### 4. Run

```bash
npm start
# Open http://localhost:3000
```

---

## Cloud Deployment (Render — Free)

1. Fork this repo
2. [render.com](https://render.com) → **New → Web Service** → connect repo
3. Build: `npm install` · Start: `node server.js`
4. Environment → add `COC_API_KEY`
5. Deploy → visit `https://your-app.onrender.com/api/myip` to get outbound IP
6. Whitelist that IP in the CoC developer portal → update `COC_API_KEY` with new token

### Keep Awake (UptimeRobot)

1. [uptimerobot.com](https://uptimerobot.com) → New Monitor
2. URL: your Render URL · Interval: 5 minutes
3. Prevents Render free-tier sleep

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/player?tag=#XXXX` | GET | Full player data from Supercell API |
| `/api/compare?tag1=&tag2=` | GET | Side-by-side comparison of two players |
| `/api/verify` | POST | Ownership verification via verifytoken |
| `/api/myip` | GET | Server's outbound IP (for API key setup) |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `COC_API_KEY` | ✅ | Supercell developer API key (IP-locked) |
| `PORT` | ❌ | Server port (default: 3000) |

---

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla HTML/CSS/JS — no framework
- **Fonts:** Lilita One (CoC-style) + Nunito via Google Fonts
- **Images:** Clash of Clans Fandom Wiki CDN (150+ assets)
- **API:** Supercell Clash of Clans official API
- **Hosting:** Render (free tier)
- **Uptime:** UptimeRobot

---

## Notes

- The CoC API key is **IP-locked** — calls must come from the whitelisted server IP
- Never commit your `.env` file — it's in `.gitignore`
- For local dev, create a **separate API key** with your home IP whitelisted
- Editing the key in the CoC portal generates a **new token** — update `COC_API_KEY` on Render too

---

*Built for [Lootbar.com](https://lootbar.com) — Game Account Trading Platform*
