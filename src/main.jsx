// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
// import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js";

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/mytasks">
    <App />
    <ToastContainer autoclose={2500} />
  </BrowserRouter>


)
