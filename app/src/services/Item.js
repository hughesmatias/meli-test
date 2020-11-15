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
  })
);

export const getItems = async (query) => {
  const {
    data,
  } = await request('get', `${REACT_APP_API}/api/items?q=${query}`);
  return data;
};

export default {
  getItems,
};
