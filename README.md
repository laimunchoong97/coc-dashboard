# Lootbar — CoC Account Scanner

> The most comprehensive Clash of Clans account intelligence dashboard ever built.
> Real-time data from Supercell's official API — zero manual input, everything auto-generated.

**🌐 Live:** https://coc-dashboard-iqr3.onrender.com  
**📊 Status:** https://stats.uptimerobot.com/Bx5dpSNS6c

---

## Intelligence Engines (Unique — Nobody Else Has These)

| Feature | What It Does |
|---|---|
| **⏱ Time to Max Calculator** | Estimates days remaining to fully max every hero, troop, spell and equipment piece. Works from any public tag — no login needed. |
| **🧬 Playstyle DNA Radar** | 5-axis SVG radar chart scoring Warrior / Competitor / Team Player / Grinder / Veteran with auto-generated profile tag. |
| **📊 Progression Intelligence** | 9-category completeness grid (Heroes, Elixir, Dark, Spells, Siege, Pets, Epic Equip, Rare Equip, Builder Base) each graded S/A/B/C. |
| **⚔️ Hero Loadout Analysis** | Shows exactly which 2 equipment are equipped per hero, grades each loadout (Meta / Good / Mixed / Weak) against known meta combos. |
| **💰 Grind Value** | Calculates hours invested, Gold Pass months, Gold Pass dollar value, and gem cost to skip remaining upgrades — shows buyers what they're actually saving. |
| **🎯 Buyer Match Profiles** | Scores account fit for 6 buyer types: CWL War Player, Trophy Pusher, Max Grinder, Clan Leader, Equipment Collector, Budget Buyer. |
| **🏷️ Auto Listing Generator** | Generates a ready-to-post listing title + estimated price range ($USD) with one-click copy. |
| **🎯 Smart Price Engine** | Multi-factor price estimation: TH level + hero % + legend league + research + equipment maxed + war stars. |

---

## Full Dashboard Sections (23 total)

| Section | Data |
|---|---|
| Account Highlights | Auto chips: Legend rank, hero %, research %, epic equipment maxed |
| Listing Card | Copyable title + USD price estimate |
| Profile Banner | TH image, name, league, clan, trophies, war stars + percentile badges |
| **Playstyle DNA** | SVG radar + 5-axis legend + profile tag |
| **Account Intelligence** | Win rate, account age estimate, donations, BB league |
| Account Score | 0–100 weighted score (TH/Heroes/Research/War/Legend) |
| Legend League | Current + previous + best season trophies and rank |
| Builder Base | BH level + league name + trophies + BB heroes |
| Heroes | All 8 heroes — portrait, ring chart, level badge, **equipped loadout chips** |
| Clan Recruitment Score | 0–100 HIRE/WATCH/PASS verdict — 6 weighted factors |
| Activity & Clan | Attack wins, defense wins, **attack win rate bar**, donations, clan card |
| Hero Equipment | 41 pieces — image grid with name, Epic/Rare, maxed colour |
| Research Progress | 7-category bars: Elixir, Dark, Spells, Siege, Super, Pets, Builder |
| Troops & Spells | 7-tab image grid — active super troops shown with glow badge |
| Key Achievements | 11 achievement progress bars |
| Player Stats | Games Champion, CWL wars, Capital Gold, Season Points, CWL active |
| **⏱ Time to Max** | Per-category day estimates + top-8 incomplete items ranked |
| **📊 Progression Intelligence** | 9-category grid with S/A/B/C grades + overall % |
| **⚔️ Hero Loadout Analysis** | Per-hero equipment grade vs meta database |
| **💰 Grind Value** | Hours saved, Gold Pass value, gem skip cost |
| **🎯 Buyer Profiles** | 6 buyer type match cards (Great/Partial/Not Ideal) |
| Compare Mode | Side-by-side 13-metric diff table with visual bars |
| Raw JSON | Full API response (collapsible) |

---

## Asset Coverage — All Complete

| Category | Count |
|---|---|
| Town Halls | TH1–TH18 (18) |
| Builder Halls | BH6–BH10 |
| Heroes | 8 (all) |
| Elixir Troops | 19 |
| Dark Troops | 10 |
| Super Troops | 15 |
| Siege Machines | 9 |
| Pets | 12 |
| Builder Base Troops | 11 |
| Spells | 17 (all, real images) |
| Hero Equipment | 41 (all) |

---

## Setup

```bash
git clone https://github.com/laimunchoong97/coc-dashboard.git
cd coc-dashboard && npm install
cp .env.example .env   # add your COC_API_KEY
npm start              # http://localhost:3000
```

**Get API key:** [developer.clashofclans.com](https://developer.clashofclans.com) → My Keys → Create Key → whitelist your IP.

---

## Deploy to Render (Free, Static IP)

1. Fork → [render.com](https://render.com) → New Web Service → connect repo
2. Build: `npm install` · Start: `node server.js`
3. Environment: `COC_API_KEY=your_key`
4. After deploy: visit `/api/myip` to get outbound IP → whitelist in CoC portal

**Keep awake:** [uptimerobot.com](https://uptimerobot.com) → monitor your URL every 5 min.

---

## API Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/player?tag=` | Full player data |
| `GET /api/compare?tag1=&tag2=` | Side-by-side comparison |
| `POST /api/verify` | Ownership verification |
| `GET /api/myip` | Server outbound IP |

---

*Built for [Lootbar.com](https://lootbar.com)*
