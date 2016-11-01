import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
//import { render } from 'react-dom' <--imports only particular tiems from libraries to not import entire library
import reducers from './reducers'


let store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
) 

