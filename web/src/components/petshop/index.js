import './styles.css';

const Petshop = () => {
    return (
      <li className="petshop d-inline-block">
        <div className="d-inline-block">
          <img
            src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
            alt="petlove"
            className="img-fluid"
          />
          <div className="d-inline-block pl-3 align-bottom">
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>2,8</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>$$$</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>2,9Km</text>
            </div>
            <label className="badge badge-primary">Frete grátis</label>
          </div>
        </div>
      </li>
    )
}

export default Petshop;