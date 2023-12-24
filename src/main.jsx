import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './components/Header.jsx';

const headerDomNode = document.getElementById('header');
const headerRoot = createRoot(headerDomNode); 
headerRoot.render(
<StrictMode>
    <Header />
  </StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
