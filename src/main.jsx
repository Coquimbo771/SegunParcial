import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import React from 'react';
import './index.css';

function main() {
  return (
    <div className="card">
      <img src="imagen-superior.jpg" className="card-img-top" alt="Imagen superior" />
      <div className="card-body">
        <h5 className="card-title">Título</h5>
        <p className="card-text">Descripción corta del video o contenido.</p>
        <a href="#" className="btn btn-primary">Play</a>
      </div>
      <img src="imagen-inferior.jpg" className="card-img-bottom" alt="Imagen inferior" />
    </div>
  );
}

export default main;

