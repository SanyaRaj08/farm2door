import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductState from './Contexts/smallProducts/productState';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductState>
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
  </ProductState>
);

reportWebVitals();
