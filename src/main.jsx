import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUs from './components/AboutUs'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutUs /> 
  </StrictMode>,
)
