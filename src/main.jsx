import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/Context.jsx'
import { HelmetProvider } from 'react-helmet-async'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
  <HelmetProvider>
      <App />
    </HelmetProvider>
  </ContextProvider>
  </BrowserRouter>
)
