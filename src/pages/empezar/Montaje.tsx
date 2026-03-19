import { motion } from 'motion/react';

export default function Montaje() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Monta tu dron</h1>
        <p className="text-xl text-gray-300 mb-8">
          Montar tu propio dron FPV desde cero es la esencia de este hobby. Aunque la curva de aprendizaje es más pronunciada, los beneficios a largo plazo son inmensos.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué montar tu propio dron?</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Aprender a reparar:</strong> En el FPV, vas a estrellar tu dron. Si lo has montado tú, sabrás exactamente cómo arreglarlo cuando se rompa.</li>
            <li><strong className="text-neon-pink">Personalización total:</strong> Puedes elegir cada componente (motores, controladora, cámara, chasis) para adaptarlo a tu estilo de vuelo (freestyle, carreras, cinemático).</li>
            <li><strong className="text-neon-pink">Ahorro a largo plazo:</strong> Reparar piezas individuales es mucho más barato que comprar drones nuevos o enviarlos al servicio técnico.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">¿Qué necesitas saber?</h2>
        <p className="text-gray-300 mb-6">
          Para montar un dron necesitarás aprender a soldar componentes electrónicos básicos, entender cómo conectar los diferentes elementos (diagramas de cableado) y configurar el software de la controladora de vuelo (como Betaflight). No te preocupes, hay miles de tutoriales disponibles para guiarte paso a paso.
        </p>
      </motion.div>
    </div>
  );
}
