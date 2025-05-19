
async function encodeText() {
    const text = document.getElementById('inputText').value;
    const res = await fetch('/api/encode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    const data = await res.json();
    document.getElementById('result').textContent = data.encodedText || data.error;
}

async function decodeText() {
    const base64 = document.getElementById('inputText').value;
    const res = await fetch('/api/decode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64 })
    });
    const data = await res.json();
    document.getElementById('result').textContent = data.decodedText || data.error;
}

