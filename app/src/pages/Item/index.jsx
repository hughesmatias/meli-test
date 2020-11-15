import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../../components/Detail';
import ItemService from '../../services/Item';

const Item = () => {
  const {
    id,
  } = useParams();
  const [item, setItem] = useState(false);

  const buyAction = () => alert('Comprame en MELI');

  useEffect(() => {
    const getItemById = async(id) => {
      const data = await ItemService.getById(id);
      setItem(data.item);
    };
    getItemById(id);

    return () => ({
      item: false,
    });
  }, [id]);

  return (
    item ? <Detail {...item} buyAction={buyAction} /> : <div>Cargando...</div>
  );
}

export default Item;
