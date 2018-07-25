import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import {createStore } from 'redux'; //don't need compose or applyMiddleware from redux since we aren't using any middleware
import {Provider} from 'react-redux';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
