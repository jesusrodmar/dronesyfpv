function GuideCard({ title, level, time }: { title: string, level: string, time: string }) {
  return (
    <div className="p-6 bg-dark-card border border-white/5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
      <h3 className="text-xl font-bold mb-4 group-hover:text-neon-pink transition-colors">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="px-2 py-1 bg-white/10 rounded">{level}</span>
        <span>⏱ {time}</span>
      </div>
    </div>
  );
}

export default function Montajes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-pink">Montajes Paso a Paso</h1>
      <p className="text-xl text-gray-400 mb-8">
        Aprende a montar tu dron desde cero con nuestras guías detalladas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GuideCard title="Build 5 Pulgadas Freestyle" level="Intermedio" time="4 horas" />
        <GuideCard title="Build Tinywhoop 65mm" level="Principiante" time="2 horas" />
        <GuideCard title="Build Cinewhoop 3 Pulgadas" level="Avanzado" time="5 horas" />
      </div>
    </div>
  );
}
