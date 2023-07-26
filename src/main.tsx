import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProviderAuth } from './hooks/useAuth.tsx'
import { ProviderShopCart } from './hooks/useShopCart.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderAuth>
      <ProviderShopCart>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProviderShopCart>
    </ProviderAuth>
  </React.StrictMode>,
)
