const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Route to encode to Base64
app.post('/encode', (req, res) => {
    const { text } = req.body;
    const encodedText = Buffer.from(text).toString('base64');
    res.json({ encodedText });
});

// Route to decode from Base64
app.post('/decode', (req, res) => {
    const { base64 } = req.body;
    const decodedText = Buffer.from(base64, 'base64').toString('utf-8');
    res.json({ decodedText });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
