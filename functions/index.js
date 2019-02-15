const request = require('request-promise-native');

exports.getProductTags = async (lineItems) => {
  const ids = lineItems.map(lineItem => lineItem.product_id);
  const requrl = `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@amaryllis-land.myshopify.com/admin/products.json?ids=${ids.join()}`;
  const options = {
    method: 'GET',
    url: requrl,
    json: true,
  };
  const tags = await request(options).then(body => body.products.map(product => product.tags).join(', ').split(', '));
  return tags;
};

exports.addOrderNote = (orderId) => {
  const requrl = `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@amaryllis-land.myshopify.com/admin/orders/${orderId}.json`;
  const orderBody = {
    order: {
      id: orderId,
      note: 'Order contains sale items',
    },
  };
  const options = {
    method: 'PUT',
    url: requrl,
    resolveWithFullResponse: true,
    json: true,
    body: orderBody,
  };

  request(options)
    .then(response => console.log(response.statusCode))
    .catch(err => console.log(err.message));
};

exports.hasSale = (tagArray) => {
  const lowTag = tagArray.map(tag => tag.toLowerCase());
  const isSale = (lowTag.indexOf('sale') > -1);
  return isSale;
};
