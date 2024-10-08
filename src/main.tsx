import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Goals from './views/Goals'; // Importando a nova página de metas
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Define as rotas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/metas" element={<Goals />} /> {/* Página de metas */}
      </Routes>
    </Router>
  </StrictMode>
);
