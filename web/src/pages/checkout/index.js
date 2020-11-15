import Header from '../../components/header';

import './styles.css';

const Checkout = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input 
                  type="text" 
                  name="" 
                  placeholder="CEP" 
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input 
                  type="text" 
                  name="" 
                  placeholder="Cidade" 
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input 
                  type="text" 
                  name="" 
                  placeholder="Logradouro" 
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
                <div className="col-5">
                  <input 
                    type="text" 
                    name="" 
                    placeholder="Número" 
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-5 pl-0">
                  <input 
                    type="text" 
                    name="" 
                    placeholder="Bairro" 
                    className="form-control form-control-lg"
                  />
                </div>
              <div className="col-2 pl-0">
                <input 
                type="text" 
                name="" 
                placeholder="UF" 
                className="form-control form-control-lg"
                />
              </div>
            </div>
            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-12">
                <input 
                  type="text" 
                  placeholder="Número do Cartão" 
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input 
                  type="text" 
                  placeholder="Validade" 
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input 
                  type="text" 
                  placeholder="CVV" 
                  className="form-control form-control-lg"
                />
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;