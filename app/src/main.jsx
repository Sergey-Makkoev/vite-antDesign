import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CountProvider} from "app/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountProvider>
    <App />
  </CountProvider>
)
