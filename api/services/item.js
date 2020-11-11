const axios = require("axios");
const {
  API_EXT,
} = require('dotenv').config().parsed;

class ItemService {
  getItem(id) {
    // call external service
    return false;
  };

  async search(query) {
    // call external serfice
    const {
      data,
    } = await axios.get(`${API_EXT}/search?q=${query}&limit=4`);
    return data;
  };
};

module.exports = new ItemService();
