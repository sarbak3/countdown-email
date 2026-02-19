export default function handler(req, res) {
  const deadline = new Date('2026-02-21T04:59:00Z').getTime();
  const diff = Math.max(0, deadline - Date.now());

  const days  = String(Math.floor(diff / 86400000)).padStart(2, '0');
  const hours = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
  const mins  = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const secs  = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="160">
  <rect width="600" height="160" fill="black"/>
  <text x="300" y="30" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="Arial" font-size="13" letter-spacing="4">HURRY — OFFER ENDS IN</text>
  <text x="90" y="100" text-anchor="middle" fill="white" font-family="Arial" font-size="64" font-weight="bold">${days}</text>
  <text x="90" y="130" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="Arial" font-size="11" letter-spacing="3">DAYS</text>
  <text x="195" y="95" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="Arial" font-size="64" font-weight="bold">:</text>
  <text x="300" y="100" text-anchor="middle" fill="white" font-family="Arial" font-size="64" font-weight="bold">${hours}</text>
  <text x="300" y="130" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="Arial" font-size="11" letter-spacing="3">HOURS</text>
  <text x="405" y="95" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="Arial" font-size="64" font-weight="bold">:</text>
  <text x="510" y="100" text-anchor="middle" fill="white" font-family="Arial" font-size="64" font-weight="bold">${mins}</text>
  <text x="510" y="130" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="Arial" font-size="11" letter-spacing="3">MINS</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.send(svg);
}
