import React from "react";

const MainPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Bienvenido, Tomas</h1>
      <p className="mt-4">¿Qué módulo estás buscando?</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-bold">Adaptación</h2>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-bold">Operaciones Transportadas</h2>
          <ul className="mt-2">
            <li>Contacto</li>
            <li>Navegación</li>
            <li>Instrumentos</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-bold">Operaciones Aero-Tácticas</h2>
          <ul className="mt-2">
            <li>Campos Extraños</li>
            <li>Formación</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
