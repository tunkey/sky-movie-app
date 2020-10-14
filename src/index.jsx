import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import setupAxiosInterceptors from './config/axios-interceptor';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './config/reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

setupAxiosInterceptors(() => console.log('setupAxiosInterceptors Run..'));

const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware);
const store = createStore(reducer, middleware);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  //</React.StrictMode>
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
