import { motion } from 'motion/react';

export default function Estabilizados() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Drones Estabilizados</h1>
        <p className="text-xl text-gray-300 mb-8">
          Los drones estabilizados son la opción más común para fotografía y vídeo aéreo tradicional. 
          Están diseñados para ser fáciles de volar y mantener su posición en el aire de forma autónoma.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Características Principales</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Vuelo Autónomo:</strong> Utilizan GPS y sensores para mantener su posición y altitud sin intervención del piloto.</li>
            <li><strong className="text-neon-pink">Gimbal de 3 Ejes:</strong> La cámara está montada en un estabilizador mecánico que absorbe los movimientos del dron, resultando en vídeos perfectamente fluidos.</li>
            <li><strong className="text-neon-pink">Sensores Anticolisión:</strong> Muchos modelos incluyen sensores que detectan obstáculos y evitan choques automáticamente.</li>
            <li><strong className="text-neon-pink">Facilidad de Uso:</strong> Ideales para principiantes, ya que si sueltas los mandos, el dron simplemente se queda quieto en el aire.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">¿Para qué se utilizan?</h2>
        <p className="text-gray-300 mb-6">
          Estos drones son la herramienta estándar en la industria audiovisual para planos generales, seguimientos suaves, fotografía inmobiliaria y topografía. Marcas como DJI dominan este mercado con modelos como la serie Mavic o Mini.
        </p>
      </motion.div>
    </div>
  );
}
