import { motion } from 'motion/react';

export default function Rtf() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Ready To Fly (RTF)</h1>
        <p className="text-xl text-gray-300 mb-8">
          Los kits RTF (Ready To Fly) vienen con todo lo necesario para empezar a volar desde el primer minuto: Dron, emisora (mando), gafas FPV, baterías y cargador.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué elegir un kit RTF?</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Sin complicaciones:</strong> No tienes que preocuparte por compatibilidades entre componentes, soldaduras o configuraciones complejas en el ordenador.</li>
            <li><strong className="text-neon-pink">Todo incluido:</strong> Tienes la garantía de que todos los elementos funcionan juntos perfectamente.</li>
            <li><strong className="text-neon-pink">Ideal para empezar:</strong> Es la forma más rápida y menos frustrante de tener tu primer contacto con el FPV.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">Kits Recomendados</h2>
        <p className="text-gray-300 mb-6">
          Actualmente, existen excelentes opciones en el mercado para principiantes, como los kits de BetaFPV (Cetus Pro, Aquila16) o EMAX (Tinyhawk). Estos kits suelen incluir drones pequeños (Tinywhoops) que son seguros para volar en interiores y muy resistentes a los golpes.
        </p>
      </motion.div>
    </div>
  );
}
