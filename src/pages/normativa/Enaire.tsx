export default function Enaire() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-green">ENAIRE / AESA</h1>
      <p className="text-xl text-gray-400 mb-8">
        En España, el espacio aéreo está regulado por ENAIRE y la Agencia Estatal de Seguridad Aérea (AESA).
      </p>
      <div className="bg-neon-green/10 border border-neon-green/30 p-6 rounded-xl mb-8">
        <h3 className="text-2xl font-bold text-neon-green mb-4">Regla de Oro</h3>
        <p className="text-gray-300">
          Antes de volar, <strong>SIEMPRE</strong> debes consultar el mapa de <a href="https://drones.enaire.es/" target="_blank" rel="noreferrer" className="text-white underline decoration-neon-green hover:text-neon-green transition-colors">ENAIRE Drones</a> para comprobar si la zona tiene restricciones (CTR, zonas ZEPA, aeropuertos, etc).
        </p>
      </div>
      <p className="text-gray-400">
        La normativa europea clasifica los vuelos en diferentes categorías (Abierta, Específica, Certificada). Para el vuelo recreativo FPV, normalmente operaremos en la <strong>Categoría Abierta</strong>.
      </p>
    </div>
  );
}
