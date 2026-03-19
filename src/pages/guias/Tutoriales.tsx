import React from 'react';

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

export default function Tutoriales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Tutoriales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GuideCard title="Configurar Betaflight 4.5" level="Todos" time="30 min" />
        <GuideCard title="Aprende a soldar" level="Principiante" time="45 min" />
        <GuideCard title="Flashear ELRS" level="Intermedio" time="20 min" />
        <GuideCard title="Ajuste de PIDs" level="Avanzado" time="1 hora" />
      </div>
    </div>
  );
}
