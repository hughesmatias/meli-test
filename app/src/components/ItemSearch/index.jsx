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
  location,
  goToDetail
}) => (
  <div className="item-container">
    <img src={picture} alt={title} />
    <div className="information">
      <div className="price">
        <span>{formarCurrency(currency)} </span><span>{amount},{decimal}</span>
      </div>
      <div>
        <button className="btn link" onClick={() => goToDetail(id)}>{title}</button>
      </div>
    </div>
    <div className="location">
      {location}
    </div>
  </div>
);

export default ItemSearch;
