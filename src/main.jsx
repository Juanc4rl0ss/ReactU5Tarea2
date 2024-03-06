//Importaciones para que funcione el componente App, incluyendo la clase de la App, react y los estilos CSS
import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from '../componentes/principal.jsx';
import './index.css'


//Renderizamos React,para que el id root sea el punto de partida
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>,
)
