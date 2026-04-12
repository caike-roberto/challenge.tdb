import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Integrantes from '../pages/Integrantes';
import FAQ from '../pages/FAQ';
import Contato from '../pages/Contato';
import Solucao from '../pages/Solucao';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/solucao" element={<Solucao />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;