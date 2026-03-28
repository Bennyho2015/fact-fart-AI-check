const form = new FormData();
form.append('image', file, file.name || 'photo.jpg');

try {
  const res = await fetch(`${API_BASE}/api/analyze`, {
    method: 'POST',
    body: form
  });
  const data = await res.json();
  setResult(data);
} catch (e) {
  alert('無法連線後端：' + e.message);
} finally {
  setLoading(false);
}
