import { motion } from 'motion/react';

export default function Fpv() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Drones FPV</h1>
        <p className="text-xl text-gray-300 mb-8">
          FPV significa "First Person View" (Vista en Primera Persona). Estos drones se vuelan utilizando unas gafas de vídeo que transmiten la imagen en tiempo real desde la cámara del dron, dándote la sensación de estar volando.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Características Principales</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Vuelo Manual (Acro):</strong> A diferencia de los estabilizados, si sueltas los mandos en un dron FPV en modo Acro, el dron no se estabiliza y caerá. Requiere mucha más habilidad.</li>
            <li><strong className="text-neon-pink">Inmersión Total:</strong> Las gafas FPV proporcionan una experiencia inmersiva única, permitiendo volar por espacios estrechos con precisión.</li>
            <li><strong className="text-neon-pink">Velocidad y Agilidad:</strong> Son mucho más rápidos y ágiles, capaces de realizar acrobacias (flips, rolls, dives).</li>
            <li><strong className="text-neon-pink">Construcción a Medida:</strong> La mayoría de los pilotos montan y configuran sus propios drones, eligiendo motores, hélices, controladoras y sistemas de vídeo.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">¿Para qué se utilizan?</h2>
        <p className="text-gray-300 mb-6">
          Originalmente populares para carreras, hoy en día el FPV Cinemático es una herramienta esencial en cine, publicidad y eventos deportivos. Permiten planos dinámicos, seguimientos a alta velocidad y transiciones imposibles con drones tradicionales.
        </p>
      </motion.div>
    </div>
  );
}
