import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Import Redux Provider
import { Provider } from 'react-redux';

// ✅ Import your store
import store from './store.js';

// ✅ Wrap App with Provider so all components get access to Redux state
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
