const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for motorsport content (You can replace this with a real database if needed)
const motorsportData = [
  { name: 'Formula 1', image: 'car1.jpg', description: 'The pinnacle of motorsport.' },
  { name: 'MotoGP', image: 'car2.jpg', description: 'The world’s premier motorcycle racing series.' },
];

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to get motorsport data
app.get('/api/motorsports', (req, res) => {
  res.json(motorsportData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
