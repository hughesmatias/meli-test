import axios from 'axios';
const {
  REACT_APP_API,
} = process.env;

const config = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  mode: 'cors',
}

const request = (method, url) => (
  axios.request({
    method,
    url,
    base: config,
  }).catch((err) => {
    throw err.response.data && err.response.data.message || "Error";
  })
);

export const getItems = async (query) => {
  const {
    data,
  } = await request('get', `${REACT_APP_API}/api/items?q=${query}`);
  return data;
};

export const getById = async (id) => {
  const {
    data,
  } = await request('get', `${REACT_APP_API}/api/items/${id}`);
  return data;
};

export default {
  getItems,
  getById,
};
