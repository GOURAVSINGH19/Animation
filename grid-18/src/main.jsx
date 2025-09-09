import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrollWrapper from './component/Lenis.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollWrapper>
      <App />
    </SmoothScrollWrapper>
  </StrictMode>,
)
