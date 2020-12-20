import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';

import './styles.css';

const Marker = ({ petshop }) => {
  
  const { petshopMapSelected } = useSelector((state) => state.shop);

  return (

    <Link to={`/petshop/${petshop._id}`}>
      <img src={petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon} alt=""/>
      <img
        src={petshop.logo}
        alt="petlove"
        className="img-marker"
      />
    </Link>
  );
}

export default Marker;