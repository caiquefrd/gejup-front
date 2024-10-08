import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './views/Login.tsx'
import Home from './views/Home.tsx'
import './index.css'
import Register from './components/RegisterForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login/>
  </StrictMode>
)
