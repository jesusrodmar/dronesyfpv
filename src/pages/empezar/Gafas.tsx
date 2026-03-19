import { motion } from 'motion/react';

export default function Gafas() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Gafas FPV</h1>
        <p className="text-xl text-gray-300 mb-8">
          Las gafas FPV son tu ventana al mundo del dron. Reciben la señal de vídeo de la cámara del dron y te permiten volar en primera persona.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Sistemas de Vídeo: Analógico vs Digital</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Analógico:</strong> La opción más barata y con menor latencia. La imagen es de menor calidad (como una televisión antigua), pero es muy fiable y los componentes son económicos. Ideal para empezar o para carreras.</li>
            <li><strong className="text-neon-pink">Digital (DJI, Walksnail, HDZero):</strong> La imagen es en alta definición (HD), lo que hace la experiencia mucho más inmersiva. Son más caras y los componentes del dron (VTX y cámara) también lo son.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">Tipos de Gafas</h2>
        <p className="text-gray-300 mb-6">
          Existen dos formatos principales:
          <br /><br />
          <strong>Gafas de caja (Box Goggles):</strong> Son más grandes y baratas, con una sola pantalla grande. Ideales para presupuestos ajustados (ej. Eachine EV800D).
          <br /><br />
          <strong>Gafas binoculares:</strong> Son más pequeñas, cómodas y caras, con dos pantallas independientes (una para cada ojo). Son la opción estándar para pilotos avanzados (ej. FatShark, Skyzone, DJI Goggles).
        </p>
      </motion.div>
    </div>
  );
}
