import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Import createStore
import rootReducer from './reducers/rootReducer';
import './i18n';

const store = createStore(rootReducer);

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
