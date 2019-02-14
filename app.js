const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').load();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/neworder', (req, res) => {
  console.log('webhook fired!');
  res.send(200);
  console.log(req.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000!');
});
