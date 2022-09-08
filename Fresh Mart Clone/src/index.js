import React from 'react';
import ReactDOM from 'react-dom';
import App from './Frontend/components/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './Frontend/reducers/index';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import history from './Frontend/history/index'
import './Frontend/components/style.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}>
  <HistoryRouter history={history} >
    
    <App />
  </HistoryRouter>
   </Provider>);

//React 18

