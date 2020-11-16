import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';

import './styles/global.css';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    {/* <Cadastro /> */}
    {/* <Checkout /> */}
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
);
