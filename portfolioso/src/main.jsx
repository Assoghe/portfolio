import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { index } from './index.jsx'
import style from './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
