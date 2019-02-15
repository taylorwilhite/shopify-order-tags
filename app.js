const express = require('express');
const bodyParser = require('body-parser');
const { getProductTags, addShipstationTag, hasSale } = require('./functions');

require('dotenv').load();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/neworder', async (req, res) => {
  console.log('webhook fired!');
  res.send(200);
  const tags = await getProductTags(req.body.line_items);
  console.log('App.js Tags: ' + tags);
  if (hasSale(tags)) {
    addShipstationTag(req.body.id);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000!');
});
