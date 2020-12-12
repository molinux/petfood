import { useDispatch, useSelector } from 'react-redux';

import { 
  setShopMapSelected, 
  setMapCenter 
} from '../../store/modules/shop/actions';

import './styles.css';

const Petshop = ({ petshop }) => {

  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector((state) => state.shop);
  const setSelectedPetshop = () => {
    // Set selected petshop
    // Set map center
    dispatch(setShopMapSelected(petshop._id));
    dispatch(setMapCenter(petshop.location));
  }

  return (
    <li 
      className={
        `petshop d-inline-block ${petshopMapSelected === petshop._id ? 'active' : ''}`
      }
      onClick={() => setSelectedPetshop()}
    >
      <div className="d-inline-block">
        <img
          src={petshop.logo}
          alt="petlove"
          className="img-fluid"
        />
        <div className="d-inline-block pl-3 align-bottom">
          <b>{petshop.nome}</b>
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