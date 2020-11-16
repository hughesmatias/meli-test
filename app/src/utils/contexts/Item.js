import { createContext } from 'react';

const ItemContext = createContext({
  search: null,
  setSearch: () => {},
});

export default ItemContext;
