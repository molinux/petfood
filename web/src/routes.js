import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Home from './pages/home';

import './styles/global.css';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/petshop/:id" component={Petshop} />
      </Router>
      <Sidebar />
    </>
  );
}

export default Routes;