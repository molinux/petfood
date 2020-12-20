import './styles.css';

const Product = ({ product }) => {
  return (
    <div className="product col-3">
      <img 
        src={product.capa} 
        alt="" 
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        {/* toFixed(2) = 2 two decimals */}
        <label className="badge badge-primary">R$ {product.preco.toFixed(2)}</label>
      </h4>
        <small>
          <b>{product.nome}</b>
        </small>
    </div>
  )
}

export default Product;