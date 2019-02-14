const express = require('express');

const app = express();

app.get('/neworder', (req, res) => {
  console.log('webhook fired!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
