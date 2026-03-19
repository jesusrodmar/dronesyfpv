import React from 'react';

export default function Requisitos() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">Requisitos de Vuelo</h1>
      <div className="space-y-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Registro de Operador</h3>
          <p className="text-gray-400">
            Es obligatorio registrarse como operador de drones en AESA si tu dron tiene cámara o pesa más de 250g. El número de operador debe ir visible en el dron.
          </p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Seguro de Responsabilidad Civil</h3>
          <p className="text-gray-400">
            En España, es <strong>obligatorio</strong> tener un seguro de responsabilidad civil para volar cualquier dron, independientemente de su peso o uso (recreativo o profesional).
          </p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Vuelo FPV (Observador)</h3>
          <p className="text-gray-400">
            Para volar con gafas FPV en la Categoría Abierta, la normativa exige que estés acompañado de un <strong>observador visual (VLOS)</strong> que mantenga contacto visual directo con el dron y te avise de posibles peligros.
          </p>
        </div>
      </div>
    </div>
  );
}
