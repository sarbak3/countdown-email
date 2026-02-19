import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler() {
  const deadline = new Date('2026-02-21T04:59:00Z').getTime();
  const diff = Math.max(0, deadline - Date.now());

  const days  = String(Math.floor(diff / 86400000)).padStart(2, '0');
  const hours = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
  const mins  = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const secs  = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  const label = (num, text) => ({
    type: 'div',
    props: {
      style: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px' },
      children: [
        { type: 'div', props: { style: { color: 'white', fontSize: '60px', fontWeight: 'bold', lineHeight: '1' }, children: num } },
        { type: 'div', props: { style: { color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '3px', marginTop: '8px' }, children: text } },
      ],
    },
  });

  const colon = { type: 'div', props: { style: { color: 'rgba(255,255,255,0.3)', fontSize: '60px', fontWeight: 'bold', paddingBottom: '18px' }, children: ':' } };

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: '600px', height: '160px' },
        children: [
          { type: 'div', props: { style: { color: 'rgba(255,255,255,0.7)', fontSize: '12px', letterSpacing: '4px', marginBottom: '14px' }, children: 'HURRY — OFFER ENDS IN' } },
          { type: 'div', props: { style: { display: 'flex', alignItems: 'center', gap: '4px' }, children: [label(days, 'DAYS'), colon, label(hours, 'HOURS'), colon, label(mins, 'MINS'), colon, label(secs, 'SECS')] } },
        ],
      },
    },
    { width: 600, height: 160, headers: { 'Cache-Control': 'no-store, no-cache' } }
  );
}
