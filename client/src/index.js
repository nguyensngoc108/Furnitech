// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import Productpage from './productpage';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <ul>
        <li>
          <Link to="/products" className="hover:text-brown">Products</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/products" element={<Productpage />} />
      </Routes>
    </Router>

  </React.StrictMode >,
  document.getElementById('root')
);