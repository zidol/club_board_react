import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from './module'
import {Provider} from 'react-redux'
import firebase from 'firebase'
import * as authActions from './module/authReducer'

const store = configureStore();

var config = {
    apiKey: "AIzaSyCDJ3tkdeTvBuzA6twVk6jt9vHBMeMNwzY",
    authDomain: "clubboard-f4152.firebaseapp.com",
    databaseURL: "https://clubboard-f4152.firebaseio.com",
    projectId: "clubboard-f4152",
    storageBucket: "clubboard-f4152.appspot.com",
    messagingSenderId: "812384309490",
    appId: "1:812384309490:web:2be3665c1e698cd3"
  };

  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    store.dispatch(authActions.updateUser(user));// 스토어 안에 디스 패치있기때문
  });

/**
 * Provider에 store 연결을 해야
 * 하위에 있는 컴포넌트에서 state에 값을 가져오거나
 * action을 dispatch할 수 있음.
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
