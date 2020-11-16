import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../../components/Detail';
import BreadCrumb from '../../components/BreadCrumb';
import ItemService from '../../services/Item';
import Loading from '../../components/Loading';

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
    item ? (
    <>
      {item.category && <BreadCrumb data={item.category} />}
      <Detail {...item} buyAction={buyAction} />
    </>)
    : <Loading message="Cargando" />
  );
}

export default Item;
