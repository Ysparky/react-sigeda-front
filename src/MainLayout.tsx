import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:relative w-64 bg-blue-900 text-white z-30 lg:z-auto`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-5 flex justify-between items-center bg-white shadow lg:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 lg:p-8">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
