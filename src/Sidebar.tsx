import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faLayerGroup,
  faBook,
  faChartLine,
  faUsers,
  faTimes,
  faClock,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const navigate = useNavigate();

  const modules = [
    { name: "Adaptación", submodules: [] },
    {
      name: "Operaciones Transportadas",
      submodules: ["Contacto", "Navegación", "Instrumentos"],
    },
    {
      name: "Operaciones Aero-Tácticas",
      submodules: ["Campos Extraños", "Formación"],
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center lg:block">
          <h2
            className="text-lg font-bold cursor-pointer"
            onClick={() => {
              navigate("/main");
              onClose();
            }}
          >
            SIGEDA
          </h2>
          <button onClick={onClose} className="lg:hidden">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <ul>
          <li className="mt-4">
            <a href="#" className="flex items-center hover:underline">
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
              Módulos
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="flex items-center hover:underline">
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Estándares
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="flex items-center hover:underline">
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              Gestionar Reportes
            </a>
          </li>
          <li className="mt-4">
            <button
              onClick={() => {
                navigate("/squadron");
                onClose();
              }}
              className="flex items-center hover:underline w-full text-left"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Mi Escuadrón
            </button>
          </li>
          <li className="mt-4">
            <button
              onClick={() => {
                navigate("/schedule");
                onClose();
              }}
              className="flex items-center hover:underline w-full text-left"
            >
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Programación de Turnos
            </button>
          </li>
          <li className="mt-4">
            <button
              onClick={() => {
                navigate("/generate-evaluation-report");
                onClose();
              }}
              className="flex items-center hover:underline w-full text-left"
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Generar Reporte de Evaluación
            </button>
          </li>
        </ul>
        <div className="mt-8">
          <h3 className="text-md font-bold">Módulos</h3>
          <ul>
            {modules.map((module) => (
              <li key={module.name} className="mt-4">
                <button
                  onClick={() => setActiveModule(module.name)}
                  className="hover:underline flex items-center"
                >
                  {module.name}
                </button>
                {activeModule === module.name && (
                  <ul className="ml-4 mt-2">
                    {module.submodules.map((submodule) => (
                      <li key={submodule} className="mt-2">
                        <a href="#" className="hover:underline">
                          {submodule}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={() => {
            handleLogout();
            onClose();
          }}
          className="flex items-center hover:underline w-full text-left"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
