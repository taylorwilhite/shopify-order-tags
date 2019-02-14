const express = require('express');

require('dotenv').load();

const app = express();

app.get('/neworder', (req, res) => {
  console.log('webhook fired!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000!');
});
