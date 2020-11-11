const express = require('express');
const ItemService = require('../services/item');

const router = express.Router();

router.get('/items', async ({ query }, res) => {
  // llamo a API_MELI/search?q=:query
  // ?q=query
  await ItemService.getItem(query.q);
  res.end(query.q + ' query');
});

router.get('/items/:id', (req, res) => {
  // llamo a API_MELI/item/:id
  // llamo a API_MELI/item/:id/description
  res.end(req.params.id + ' item ID');
});

router.get('/', (req, res) => res.end('Version 0.0.1'));

module.exports = router;
