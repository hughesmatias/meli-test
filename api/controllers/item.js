const express = require('express');
const ItemService = require('../services/item');
const { formatSearchItems, formatItem } = require('../utils/formater');

const router = express.Router();

router.get('/items', async ({ query }, res) => {
  // query params
  // ?q=query
  const items = await ItemService.search(query.q);
  res.json(formatSearchItems(items));
});

router.get('/items/:id', async (req, res) => {
  const item = await ItemService.getById(req.params.id);

  // res.end(req.params.id + ' item ID');
  res.json(formatItem(item));
});

router.get('/', (req, res) => res.end('Version 0.0.1'));

module.exports = router;
