import React from 'react';

export default function Gestion() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-pink">Gestión Documental</h1>
      <p className="text-gray-400 mb-6">
        Documentos que debes llevar siempre contigo (físicos o digitales) cuando vayas a volar:
      </p>
      <ul className="space-y-4">
        <li className="flex items-center gap-4 bg-dark-card p-4 rounded-lg border border-white/5">
          <div className="w-2 h-2 rounded-full bg-neon-pink" />
          <span>Certificado de registro de operador de AESA</span>
        </li>
        <li className="flex items-center gap-4 bg-dark-card p-4 rounded-lg border border-white/5">
          <div className="w-2 h-2 rounded-full bg-neon-pink" />
          <span>Póliza del seguro de responsabilidad civil y recibo de pago</span>
        </li>
        <li className="flex items-center gap-4 bg-dark-card p-4 rounded-lg border border-white/5">
          <div className="w-2 h-2 rounded-full bg-neon-pink" />
          <span>Certificados de formación de piloto (A1/A3, A2) si aplica</span>
        </li>
        <li className="flex items-center gap-4 bg-dark-card p-4 rounded-lg border border-white/5">
          <div className="w-2 h-2 rounded-full bg-neon-pink" />
          <span>Identificación personal (DNI/NIE)</span>
        </li>
      </ul>
    </div>
  );
}
