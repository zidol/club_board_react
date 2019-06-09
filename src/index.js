import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from './module'
import {Provider} from 'react-redux'
const store = configureStore();

/**
 * Provider에 store 연결을 해야
 * 하위에 있는 컴포넌트에서 가져올 수 있음
 */
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
