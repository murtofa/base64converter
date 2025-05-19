export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { base64 } = req.body;
  if (!base64) {
    return res.status(400).json({ error: 'Missing base64 field' });
  }

  const decodedText = Buffer.from(base64, 'base64').toString('utf-8');
  res.status(200).json({ decodedText });
}
