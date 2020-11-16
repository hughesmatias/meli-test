const axios = require("axios");
const {
  API_EXT,
} = require('dotenv').config().parsed;

class ItemService {
  async getById(id) {
    // call external service
    // a API_MELI/items/:id
    // a API_MELI/items/:id/description
    const {
      data,
    } = await axios.get(`${API_EXT}/items/${id}`);
    const {
      data: categoryData,
    } = await axios.get(`${API_EXT}/categories/${data.category_id}`);
    const {
      data: description,
    } = await axios.get(`${API_EXT}/items/${id}/description`);
    console.log('get by id');

    return {
      data,
      description,
      categoryData,
    };
  };

  async search(query) {
    // call external serfice
    const {
      data,
    } = await axios.get(`${API_EXT}/sites/MLA/search?q=${query}&limit=4`);
    console.log('search request');
    return data;
  };
};

module.exports = new ItemService();
