import { formarCurrency, formatStatics, getSingularOrPlural } from '../../utils/formater';

const Detail = ({
  title,
  condition,
  picture,
  price: {
    amount,
    decimal,
    currency,
  },
  sold_quantity,
  description,
  buyAction,
}) => (
  <article className="description-container">
    <div className="main-information">
      <img className="product" src={picture} alt={title} />
      <div className="information">
        <h4>{formatStatics(condition)} - {sold_quantity} {getSingularOrPlural(sold_quantity, 'vendido', 'vendidos')}</h4>
        <h1>{title}</h1>
        <div className="price"><span>{formarCurrency(currency)} </span><span>{amount},{decimal}</span></div>
        <button className="btn primary" type="button" onClick={buyAction}>Comprar</button>
      </div>
    </div>
    <div className="detail">
      <h3>Descripcion del producto</h3>
      <p>{description}</p>
    </div>
  </article>
);

export default Detail;
