import { formarCurrency } from '../../utils/formater';

const ItemSearch = ({
  id,
  title,
  picture,
  price: {
    amount,
    decimal,
    currency,
  },
}) => (
  <div className="item-container">
    <img src={picture} alt={title} />
    <div className="information">
      <div className="price">
        <span>{formarCurrency(currency)} </span><span>{amount},{decimal}</span>
      </div>
      <div>
        <a href={`/items/${id}`}>{title}</a>
      </div>
    </div>
    <div className="location">
      localidad
    </div>
  </div>
);

export default ItemSearch;
