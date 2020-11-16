import './styles.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img 
        src="https://www.petlove.com.br/images/products/210670/large/Ra%C3%A7%C3%A3o_Golden_Formula_Carne_e_Arroz_para_C%C3%A3es_Adultos_de_Ra%C3%A7as_Pequenas_-_1_Kg_1210469.jpg?1562146144" 
        alt="" 
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
        <small>
          <b>Ração Seca PremieR Pet Golden Formula Carne e Arroz para Cães Adultos de Raças Pequenas</b>
        </small>
    </div>
  )
}

export default Product;