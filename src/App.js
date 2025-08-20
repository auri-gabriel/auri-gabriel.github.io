import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageRouter from './components/LanguageRouter';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota raiz - redireciona para idioma */}
        <Route path='/' element={<LanguageRouter />} />
        {/* Rotas com idioma */}
        <Route path='/:lang' element={<LanguageRouter />} />
        {/* Fallback para rotas não encontradas */}
        <Route path='*' element={<LanguageRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
