import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


const firebaseConfig = {
  apiKey: "AIzaSyCf_QmkwRGQBIbtFBlM6VeJ6VNINnRCs-M",
    authDomain: "chatto-8bb49.firebaseapp.com",
    projectId: "chatto-8bb49",
    storageBucket: "chatto-8bb49.appspot.com",
    messagingSenderId: "673132077070",
    appId: "1:673132077070:web:33b3b386beacb321629c5f"
 };


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
