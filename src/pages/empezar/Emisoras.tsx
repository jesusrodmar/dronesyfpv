import { motion } from 'motion/react';

export default function Emisoras() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Emisoras (Radios)</h1>
        <p className="text-xl text-gray-300 mb-8">
          La emisora es tu mando de control. Es la inversión más importante al empezar, ya que te servirá para practicar en el simulador y volar tus futuros drones.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Qué emisora elegir?</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Protocolo ExpressLRS (ELRS):</strong> Es el estándar actual. Ofrece un alcance increíble, baja latencia y receptores muy baratos. Busca emisoras con ELRS integrado.</li>
            <li><strong className="text-neon-pink">Formato Gamepad vs Clásico:</strong> Puedes elegir entre emisoras con forma de mando de consola (como la Radiomaster Pocket o Zorro) o el formato clásico de caja (como la Radiomaster Boxer o TX16S).</li>
            <li><strong className="text-neon-pink">Gimbals de calidad:</strong> Los "gimbals" son los sticks que mueves. Busca emisoras con gimbals de efecto Hall (magnéticos), ya que son más precisos y duraderos que los potenciómetros tradicionales.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">Recomendación para empezar</h2>
        <p className="text-gray-300 mb-6">
          Si tienes un presupuesto ajustado, la <strong>Radiomaster Pocket (versión ELRS)</strong> es la mejor opción calidad-precio. Si quieres algo más profesional que te dure años, la <strong>Radiomaster Boxer (versión ELRS)</strong> es la favorita de muchos pilotos experimentados.
        </p>
      </motion.div>
    </div>
  );
}
