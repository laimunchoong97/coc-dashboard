require('dotenv').config();
const express = require('express');
const path    = require('path');
const https   = require('https');

const app     = express();
const PORT    = process.env.PORT    || 3000;
const API_KEY = process.env.COC_API_KEY;

if (!API_KEY) {
  console.error('\n  ❌  COC_API_KEY not found in .env\n');
  process.exit(1);
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ── helper ── */
function cocFetch(apiPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.clashofclans.com',
      path:     `/v1${apiPath}`,
      method:   'GET',
      headers:  { Authorization: `Bearer ${API_KEY}`, Accept: 'application/json' },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function encodeTag(tag) {
  return encodeURIComponent(tag.startsWith('#') ? tag : '#' + tag);
}

/* ── GET /api/player?tag= ── */
app.get('/api/player', async (req, res) => {
  const { tag } = req.query;
  if (!tag) return res.status(400).json({ error: 'tag is required' });
  try {
    const result = await cocFetch(`/players/${encodeTag(tag)}`);
    res.status(result.status).json(result.body);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

/* ── GET /api/compare?tag1=&tag2= ── */
app.get('/api/compare', async (req, res) => {
  const { tag1, tag2 } = req.query;
  if (!tag1 || !tag2) return res.status(400).json({ error: 'tag1 and tag2 required' });
  try {
    const [r1, r2] = await Promise.all([
      cocFetch(`/players/${encodeTag(tag1)}`),
      cocFetch(`/players/${encodeTag(tag2)}`),
    ]);
    if (r1.status !== 200) return res.status(r1.status).json({ error: 'Player 1 not found', detail: r1.body });
    if (r2.status !== 200) return res.status(r2.status).json({ error: 'Player 2 not found', detail: r2.body });
    res.json({ player1: r1.body, player2: r2.body });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

/* ── POST /api/verify ── */
app.post('/api/verify', async (req, res) => {
  const { tag, token } = req.body;
  if (!tag || !token) return res.status(400).json({ error: 'tag and token required' });
  try {
    const encoded = encodeTag(tag);
    const result  = await new Promise((resolve, reject) => {
      const body = JSON.stringify({ token });
      const options = {
        hostname: 'api.clashofclans.com',
        path:     `/v1/players/${encoded}/verifytoken`,
        method:   'POST',
        headers: {
          Authorization:   `Bearer ${API_KEY}`,
          'Content-Type':  'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      };
      const req2 = https.request(options, r => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => { try { resolve({ status: r.statusCode, body: JSON.parse(d) }); } catch(e){ reject(e); }});
      });
      req2.on('error', reject);
      req2.write(body);
      req2.end();
    });
    res.status(result.status).json(result.body);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

/* ── GET /api/myip ── */
app.get('/api/myip', (req, res) => {
  https.get('https://api.ipify.org?format=json', r => {
    let d = '';
    r.on('data', c => d += c);
    r.on('end', () => res.json(JSON.parse(d)));
  }).on('error', e => res.status(500).json({ error: e.message }));
});

app.listen(PORT, () => {
  console.log(`\n  ✅  CoC Dashboard running at http://localhost:${PORT}\n`);
});
