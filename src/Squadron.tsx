import React, { useState } from "react";

const Squadron: React.FC = () => {
  const [search, setSearch] = useState("");
  const members = [
    { name: "Falconi Fernandez, Diego", status: "Apto", order: "10/20" },
    { name: "Garcia Martinez, Jose", status: "No Apto", order: "15/20" },
    { name: "Perez Gomez, Carlos", status: "Apto", order: "3/20" },
    { name: "Lopez Ruiz, Antonio", status: "Apto", order: "7/20" },
    { name: "Rodriguez Diaz, Juan", status: "No Apto", order: "12/20" },
    { name: "Sanchez Alvarez, Luis", status: "Apto", order: "17/20" },
    { name: "Gonzalez Perez, Manuel", status: "Apto", order: "20/20" },
    { name: "Martinez Lopez, Pedro", status: "No Apto", order: "25/20" },
  ];

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Mi Escuadrón</h1>
        <input
          type="text"
          placeholder="Buscar miembro"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-64"
        />
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredMembers.map((member, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto"
              />
              <h2 className="mt-4 text-center font-bold">{member.name}</h2>
              <p
                className={`mt-2 text-center ${
                  member.status === "Apto" ? "text-green-500" : "text-red-500"
                }`}
              >
                {member.status}
              </p>
              <p className="mt-2 text-center">Orden: {member.order}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Squadron;
