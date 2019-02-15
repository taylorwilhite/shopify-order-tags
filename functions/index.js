const request = require('request-promise-native');

exports.getProductTags = async (lineItems) => {
  const ids = lineItems.map(lineItem => lineItem.product_id);
  const requrl = `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@amaryllis-land.myshopify.com/admin/products.json?ids=${ids.join()}`;
  const options = {
    method: 'GET',
    url: requrl,
    json: true,
  };
  const tags = await request(options).then((body) => body.products.map(product => product.tags).join(', ').split(', '));

  console.log('External Tags: ' + typeof(tags) + tags);
  return tags;
};

exports.addShipstationTag = (orderId) => {

};

exports.hasSale = (tagArray) => {
  const lowTag = tagArray.map(tag => tag.toLowerCase());
  const isSale = (lowTag.indexOf('sale') > -1);
  return isSale;
};
