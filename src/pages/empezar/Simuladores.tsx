import { motion } from 'motion/react';

export default function Simuladores() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-neon max-w-none"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Simuladores FPV</h1>
        <p className="text-xl text-gray-300 mb-8">
          El simulador es el paso más importante antes de volar un dron real. Te ahorrará cientos de euros en reparaciones y te dará la memoria muscular necesaria para volar en modo Acro.
        </p>
        
        <div className="bg-dark-card border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué usar un simulador?</h2>
          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-neon-pink">Aprender sin riesgo:</strong> Estrellar un dron real cuesta dinero y tiempo de reparación. En el simulador, solo tienes que pulsar un botón para reiniciar.</li>
            <li><strong className="text-neon-pink">Memoria muscular:</strong> Volar en modo Acro requiere que tus dedos se acostumbren a movimientos muy precisos. El simulador te permite practicar horas y horas sin preocuparte por las baterías.</li>
            <li><strong className="text-neon-pink">Probar configuraciones:</strong> Puedes probar diferentes drones, configuraciones de cámara (ángulo) y ajustes de control (rates) antes de aplicarlos a tu dron real.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">Simuladores Recomendados</h2>
        <p className="text-gray-300 mb-6">
          Existen muchas opciones excelentes en el mercado, cada una con sus puntos fuertes:
          <br /><br />
          <strong>Liftoff:</strong> El más popular y completo. Físicas realistas, gran comunidad, talleres para montar drones y muchos mapas. Ideal para empezar.
          <br /><br />
          <strong>Velocidrone:</strong> Físicas muy precisas, especialmente para carreras. Gráficos menos vistosos pero excelente rendimiento en ordenadores menos potentes.
          <br /><br />
          <strong>Uncrashed:</strong> Gráficos espectaculares y físicas muy buenas para freestyle. Mapas enormes y detallados.
          <br /><br />
          <strong>Tryp FPV:</strong> El simulador con mejores gráficos actualmente. Mapas gigantescos y físicas muy realistas, pero requiere un ordenador potente.
        </p>
      </motion.div>
    </div>
  );
}
