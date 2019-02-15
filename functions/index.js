const request = require('request');

exports.getProductTags = (lineItems) => {
  const ids = lineItems.map(lineItem => lineItem.id);
  const url = `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@amaryllis-land.myshopify.com/admin/products.json?ids=${ids.split()}`;
  const tags = request.get(url)
    .products.map(product => product.tags).join(', ').split(', ');
  return tags;
};

exports.addShipstationTag = (orderId) => {

};

exports.hasSale = (tagArray) => {

};
