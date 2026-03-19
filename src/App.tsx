/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QueEs from './pages/empezar/QueEs';
import Estabilizados from './pages/empezar/Estabilizados';
import Fpv from './pages/empezar/Fpv';
import Glosario from './pages/empezar/Glosario';
import ComoEmpezar from './pages/empezar/ComoEmpezar';
import Rtf from './pages/empezar/Rtf';
import Montaje from './pages/empezar/Montaje';
import Emisoras from './pages/empezar/Emisoras';
import Gafas from './pages/empezar/Gafas';
import Herramientas from './pages/empezar/Herramientas';
import Simuladores from './pages/empezar/Simuladores';
import Montajes from './pages/guias/Montajes';
import Compras from './pages/guias/Compras';
import Tutoriales from './pages/guias/Tutoriales';
import Reviews from './pages/guias/Reviews';
import Enaire from './pages/normativa/Enaire';
import Requisitos from './pages/normativa/Requisitos';
import Gestion from './pages/normativa/Gestion';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="empezar">
            <Route index element={<Navigate to="que-es" replace />} />
            <Route path="que-es" element={<QueEs />} />
            <Route path="que-es/estabilizados" element={<Estabilizados />} />
            <Route path="que-es/fpv" element={<Fpv />} />
            <Route path="que-es/glosario" element={<Glosario />} />
            <Route path="como-empezar" element={<ComoEmpezar />} />
            <Route path="como-empezar/rtf" element={<Rtf />} />
            <Route path="como-empezar/montaje" element={<Montaje />} />
            <Route path="como-empezar/emisoras" element={<Emisoras />} />
            <Route path="como-empezar/gafas" element={<Gafas />} />
            <Route path="como-empezar/herramientas" element={<Herramientas />} />
            <Route path="como-empezar/simuladores" element={<Simuladores />} />
          </Route>

          <Route path="guias">
            <Route index element={<Navigate to="montajes" replace />} />
            <Route path="montajes" element={<Montajes />} />
            <Route path="compras" element={<Compras />} />
            <Route path="tutoriales" element={<Tutoriales />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="normativa">
            <Route index element={<Navigate to="enaire" replace />} />
            <Route path="enaire" element={<Enaire />} />
            <Route path="requisitos" element={<Requisitos />} />
            <Route path="gestion" element={<Gestion />} />
          </Route>

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
