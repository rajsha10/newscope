import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './navbar/Nav.jsx'
import Footer from './sections/Footer.jsx'
import CategoryBar from './navbar/CategoryBar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <CategoryBar />
    <App />
    <Footer />
  </StrictMode>,
)
