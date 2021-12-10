import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { FavouriteContextProvider } from './store/context/favouriteContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FavouriteContextProvider>
        <App />
      </FavouriteContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
