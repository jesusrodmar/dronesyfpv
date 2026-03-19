import { motion } from 'motion/react';

export default function Herramientas() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Herramientas Básicas</h1>
        <p className="text-xl text-gray-300 mb-8">
          Montar y reparar drones FPV requiere un conjunto de herramientas específicas. Aquí tienes una lista de lo esencial para empezar tu taller.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">El Kit Básico</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Soldador de calidad:</strong> Es la herramienta más importante. Recomendamos soldadores portátiles como el Pinecil, TS100 o TS101, que se calientan rápido y son muy precisos.</li>
            <li><strong className="text-neon-pink">Estaño y Flux:</strong> Usa estaño 60/40 o 63/37 con núcleo de resina (flux). El flux adicional en pasta o líquido te ayudará a hacer soldaduras perfectas.</li>
            <li><strong className="text-neon-pink">Juego de llaves hexagonales (Allen):</strong> Necesitarás llaves de 1.5mm, 2.0mm y 2.5mm de buena calidad para montar el chasis y los motores.</li>
            <li><strong className="text-neon-pink">Alicates de corte y pelacables:</strong> Para cortar cables a medida y pelarlos antes de soldar.</li>
            <li><strong className="text-neon-pink">Multímetro:</strong> Fundamental para comprobar continuidades (cortocircuitos) antes de conectar la batería por primera vez.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">Consumibles</h2>
        <p className="text-gray-300 mb-6">
          Además de las herramientas, necesitarás tener siempre a mano: cinta aislante líquida o conformal coating (para proteger la electrónica del agua), bridas de nylon de varios tamaños, tubo termorretráctil, cinta de doble cara y fijador de roscas (Loctite azul).
        </p>
      </motion.div>
    </div>
  );
}
