import { motion } from 'motion/react';

export default function Glosario() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Glosario FPV</h1>
        <p className="text-xl text-gray-300 mb-8">
          El mundo del FPV está lleno de términos técnicos y acrónimos. Aquí tienes una guía rápida para entender el lenguaje de los pilotos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-dark-card border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-neon-pink">Acro (Modo Acrobático)</h3>
            <p className="text-gray-400">El modo de vuelo manual donde el dron no se estabiliza automáticamente. Es el modo estándar para volar FPV.</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-neon-pink">VTX (Video Transmitter)</h3>
            <p className="text-gray-400">El transmisor de vídeo del dron que envía la señal de imagen a las gafas del piloto.</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-neon-pink">FC (Flight Controller)</h3>
            <p className="text-gray-400">La controladora de vuelo, el "cerebro" del dron que procesa las señales del mando y controla los motores.</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-neon-pink">ESC (Electronic Speed Controller)</h3>
            <p className="text-gray-400">Los variadores electrónicos que controlan la velocidad y dirección de los motores.</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-neon-pink">Cinewhoop</h3>
            <p className="text-gray-400">Un tipo de dron FPV pequeño con protectores de hélices, diseñado para volar cerca de personas y en interiores de forma segura.</p>
          </div>
          <div className="bg-dark-card border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-neon-pink">Freestyle</h3>
            <p className="text-gray-400">Estilo de vuelo enfocado en realizar acrobacias y movimientos fluidos, a menudo aprovechando el entorno (edificios, árboles).</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">¿Aún tienes dudas?</h2>
        <p className="text-gray-300 mb-6">
          No te preocupes, la curva de aprendizaje es empinada pero muy gratificante. Sigue explorando nuestras guías y pronto dominarás todos estos conceptos.
        </p>
      </motion.div>
    </div>
  );
}
