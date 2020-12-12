import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';

import './styles.css';

const Marker = ({ petshop }) => {
  return (
    <div>
      <img src={MarkerIcon} alt=""/>
      <img
        src={petshop.logo}
        alt="petlove"
        className="img-marker"
      />
    </div>
  );
}

export default Marker;