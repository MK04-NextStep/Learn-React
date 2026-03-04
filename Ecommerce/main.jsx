import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartListProvider } from './CartList.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <CartListProvider>
        <App />
      </CartListProvider>
  </BrowserRouter>

)
