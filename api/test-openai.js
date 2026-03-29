// api/test-openai.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const key = process.env.OPENAI_KEY;
    if (!key) return res.status(500).json({ error: 'OPENAI_KEY 未設定' });

    const resp = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      }
    });

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(resp.status).json({ error: '第三方 API 回應非 200', detail: text });
    }

    const data = await resp.json();
    return res.status(200).json({ ok: true, models_preview_count: Array.isArray(data.data) ? data.data.length : null });
  } catch (e) {
    return res.status(500).json({ error: '呼叫失敗', message: e.message });
  }
}
