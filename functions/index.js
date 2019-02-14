const request = require('request');

function getProductTags(lineItems) {
  const ids = lineItems.map(lineItem => lineItem.id);
  const tags = request().products.map(product => product.tags).join(', ').split(', ');
  return tags;
}

function addShipstationTag(orderId) {

}

function hasSale(tagArray) {

}

export { getProductTags, addShipstationTag, hasSale };
