import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { CurrencyKidz } from "./components/CurrencyKidz"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrencyKidz />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)