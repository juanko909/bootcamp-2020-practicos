import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Card from './Components/Card';
import Colum from './Components/Colum'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <div>
    <Card/>
    <Colum/>

  </div>,
  document.getElementById('root')
);


