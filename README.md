# Lootbar — CoC Account Scanner

A real-time Clash of Clans account dashboard that pulls live data directly from the Supercell official API.

## Features

- Instant account data pull via player tag
- Heroes, equipment, research, legend league, troops, achievements
- Account value scoring (0–100)
- Ownership verification via `verifytoken` API
- No manual data entry

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/coc-dashboard.git
cd coc-dashboard
npm install
```

### 2. Create your `.env` file

```bash
cp .env.example .env
```

Then edit `.env` and add your CoC API key:

```
COC_API_KEY=your_key_here
PORT=3000
```

### 3. Get a CoC API Key

1. Go to [developer.clashofclans.com](https://developer.clashofclans.com)
2. Register / Log in
3. My Keys → Create New Key
4. **Whitelist your server's IP address**
5. Copy the key into `.env`

### 4. Run

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (access from anywhere)

Deploy to any Node.js host (Railway, Render, Fly.io):

1. Deploy the repo
2. Set `COC_API_KEY` as an environment variable on the platform
3. Get the server's static outbound IP
4. Add that IP to your CoC API key whitelist at developer.clashofclans.com

## Environment Variables

| Variable | Description |
|---|---|
| `COC_API_KEY` | Your Supercell developer API key |
| `PORT` | Server port (default: 3000) |
