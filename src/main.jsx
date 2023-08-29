import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import App from './App.jsx'
import { store } from './services/store';

/*wrapping the app with a provider that contains the store with articles api*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
