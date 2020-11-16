import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ItemSearch from '../../components/ItemSearch';
import Loading from '../../components/Loading';
import ItemService from '../../services/Item';

import ItemContext from '../../utils/contexts/Item';

const Items = () => {
  const [items, setItems] = useState(false);
  const [error, setError] = useState(false);

  const itemContext = useContext(ItemContext);
  const history = useHistory();

  useEffect(() => {
    const getItems = async () => {
      if (!itemContext.search) {
        history.replace('/');
      }
      try {
        const response = await ItemService.getItems(itemContext.search);
        setItems(response.items);
      } catch {
        setError(true);
      }
    };

    getItems();
    return () => ({
      items: false,
    })
  });

  const goToDetail = (id) => history.push(`/items/${id}`);

  return (
    <article className="items-container">
        {items ? (items.length > 0 ? (
        <ul>
          {items.map(item => <li key={item.id}><ItemSearch goToDetail={goToDetail} {...item} /></li>)}
        </ul>
        ) : <h2>No hay resultados</h2>) : <Loading message="Buscando" />}
        {error && <h2>Hubo un error</h2>}
    </article>
  );
};

export default Items;
