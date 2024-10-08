import React from "react";
import ReactDOM from 'react-dom/client'
import { FirtsApp } from "./FirtsApp";
import './styles.css'
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirtsApp name="Pedro" age={28} />
    <CounterApp  value={ 20 }/>
  </React.StrictMode>
)
