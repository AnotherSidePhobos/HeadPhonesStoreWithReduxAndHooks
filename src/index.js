import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from './redux/rootReducer';
import {Provider} from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const store = createStore(rootReducers, compose(
  applyMiddleware(
    thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
