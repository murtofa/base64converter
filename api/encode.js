export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Missing text field' });
  }

  const encodedText = Buffer.from(text).toString('base64');
  res.status(200).json({ encodedText });
}
