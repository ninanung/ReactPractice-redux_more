import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

let store = createStore(reducers);

const rootElement = document.getElementById('root');    
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, rootElement);
