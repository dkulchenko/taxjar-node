'use strict';

var nock = require('nock');

var TEST_API_HOST = 'https://mockapi.taxjar.com';

var CATEGORY_RES = {
  "categories": [
    {
      "name": "Digital Goods",
      "product_tax_code": "31000",
      "description": "Digital products transferred electronically, meaning obtained by the purchaser by means other than tangible storage media."
    },
    {
      "name": "Clothing",
      "product_tax_code": "20010",
      "description": " All human wearing apparel suitable for general use"
    },
    {
      "name": "Non-Prescription",
      "product_tax_code": "51010",
      "description": "Drugs for human use without a prescription"
    },
    {
      "name": "Prescription",
      "product_tax_code": "51020",
      "description": "Drugs for human use with a prescription"
    },
    {
      "name": "Food & Groceries",
      "product_tax_code": "40030",
      "description": "Food for humans consumption, unprepared"
    },
    {
      "name": "Other Exempt",
      "product_tax_code": "99999",
      "description": "Item is exempt"
    },
    {
      "name": "Software as a Service",
      "product_tax_code": "30070",
      "description": "Pre-written software, delivered electronically, but access remotely."
    }
  ]
};

nock(TEST_API_HOST)
  .matchHeader('Authorization', /Bearer.*/)
  .get('/v2/categories')
  .reply(200, function(uri, body) {
    return CATEGORY_RES;
  });

module.exports.CATEGORY_RES = CATEGORY_RES;