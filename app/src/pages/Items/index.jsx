import React, { useState, useEffect } from 'react';
import ItemSearch from '../../components/ItemSearch';
import ItemService from '../../services/Item';

const Items = () => {
  const [items, setItems] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await ItemService.getItems('televisor');
        setItems(response.items);
      } catch {
        setError(true);
      }
    };

    getItems();
    return () => ({
      items: false,
    })
  }, []);

  return (
    <article className="items-container">
        {items ? (items.length > 0 ? (
        <ul>
          {items.map(item => <li key={item.id}><ItemSearch {...item} /></li>)}
        </ul>
        ) : <h2>No hay resultados</h2>) : <h2>Buscando...</h2>}
        {error && <h2>Hubo un error</h2>}
    </article>
  );
};

export default Items;
