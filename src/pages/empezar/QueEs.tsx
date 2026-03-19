import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function QueEs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">¿Qué es un dron?</h1>
        <p className="text-xl text-gray-400 mb-12">
          Un dron es un vehículo aéreo no tripulado (UAV). Dentro del mundo civil, los dividimos principalmente en dos categorías según su forma de vuelo y propósito. Descubre más sobre cada tipo y el vocabulario esencial a continuación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            to="/empezar/que-es/estabilizados"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-neon-green/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors">Drones Estabilizados</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Drones comerciales que vuelan solos y mantienen su posición. Ideales para fotografía y vídeo aéreo fácil y seguro.
            </p>
            <span className="flex items-center gap-2 text-neon-green font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/que-es/fpv"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-neon-pink/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-pink transition-colors">Drones FPV</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Vuelo en primera persona con gafas de vídeo. Vuelo manual acrobático para maniobras increíbles y velocidades extremas.
            </p>
            <span className="flex items-center gap-2 text-neon-pink font-medium mt-auto">
              Leer más <ArrowRight size={16} />
            </span>
          </Link>

          <Link 
            to="/empezar/que-es/glosario"
            className="group bg-dark-card border border-white/10 rounded-xl p-6 hover:border-white/50 transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">Glosario FPV</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Aprende el lenguaje de los pilotos. Una guía rápida para entender todos los términos técnicos y acrónimos del FPV.
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
