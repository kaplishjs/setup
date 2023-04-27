import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./assets/style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import { Provider } from 'react-redux';
import store from './component/redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
