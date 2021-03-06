const axios = require("axios");
const {
  API_EXT,
  QUERY_SEARCH_LIMIT,
} = require('dotenv').config().parsed;

class ItemService {
  async getById(id) {
    // call external service
    // a API_MELI/items/:id
    // a API_MELI/items/:id/description
    try {
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
    }
    catch {
      throw new Error(`Hubo un error. No existe el id ${id}`);
    }
  };

  async search(query) {
    // call external serfice
    const {
      data,
    } = await axios.get(`${API_EXT}/sites/MLA/search?q=${query}&limit=${QUERY_SEARCH_LIMIT}`);
    console.log('search request');
    return data;
  };
};

module.exports = new ItemService();
