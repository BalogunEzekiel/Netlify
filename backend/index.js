const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Let frontend talk to backend

app.get('/hello', (req, res) => {
  res.send('Hello, friend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

