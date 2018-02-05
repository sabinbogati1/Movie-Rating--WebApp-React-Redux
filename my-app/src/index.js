import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers";
import Ratings from "./Ratings";


const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<div>
<App />
<hr/>
<Ratings/>
</div>
</Provider>
, document.getElementById('root'));

