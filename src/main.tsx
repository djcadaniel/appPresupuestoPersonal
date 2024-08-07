import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PresupuestProvider } from './context/PresupuestContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PresupuestProvider>
      <App />
    </PresupuestProvider>
  </React.StrictMode>,
)
