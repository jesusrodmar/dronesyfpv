export default function Compras() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Guías de compra</h1>
      <div className="space-y-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-neon-green/50 transition-colors">
          <h3 className="text-2xl font-bold mb-2">Mejores Emisoras 2026</h3>
          <p className="text-gray-400">Comparativa de emisoras ELRS para todos los presupuestos.</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-neon-green/50 transition-colors">
          <h3 className="text-2xl font-bold mb-2">Gafas Digitales vs Analógicas</h3>
          <p className="text-gray-400">¿Qué sistema elegir según tu estilo de vuelo y presupuesto?</p>
        </div>
      </div>
    </div>
  );
}
