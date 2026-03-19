import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ComoEmpezar() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">¿Cómo empezar en los drones FPV?</h1>
        <p className="text-xl text-gray-400 mb-12">
          Entrar en el mundo del FPV puede parecer abrumador al principio. Hay muchas decisiones que tomar, desde comprar un dron ya montado hasta elegir cada componente por separado. Explora nuestras guías para dar tus primeros pasos con seguridad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/empezar/como-empezar/rtf"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-neon-green/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors">Ready To Fly (RTF)</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Kits completos con todo lo necesario para volar desde el primer minuto. La forma más rápida y sencilla de empezar.
            </p>
            <span className="flex items-center gap-2 text-neon-green font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/como-empezar/montaje"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-neon-pink/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-pink transition-colors">Monta tu dron</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Aprende a elegir y ensamblar cada componente. La mejor opción para entender cómo funciona y saber repararlo.
            </p>
            <span className="flex items-center gap-2 text-neon-pink font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/como-empezar/emisoras"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-white/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">Emisoras (Radios)</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Tu mando de control. La inversión más importante para practicar en el simulador y volar tus drones.
            </p>
            <span className="flex items-center gap-2 text-white font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/como-empezar/gafas"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-neon-green/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors">Gafas FPV</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Tu ventana al mundo del dron. Descubre las diferencias entre sistemas analógicos y digitales.
            </p>
            <span className="flex items-center gap-2 text-neon-green font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/como-empezar/herramientas"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-neon-pink/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-pink transition-colors">Herramientas</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Lo esencial para tu taller: soldadores, estaño, llaves y consumibles para montar y reparar.
            </p>
            <span className="flex items-center gap-2 text-neon-pink font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/como-empezar/simuladores"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-white/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">Simuladores FPV</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              El paso más importante antes de volar. Aprende sin riesgo y desarrolla tu memoria muscular.
            </p>
            <span className="flex items-center gap-2 text-white font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
