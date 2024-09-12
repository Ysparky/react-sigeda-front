import React from "react";

const GenerateEvaluationReport: React.FC = () => {
  const dummyData = {
    evaluator: "Tomas Ortiz",
    student: "Diego Falconi",
    date: "16-01-2023",
    maneuvers: [
      {
        name: "Despegue a hover",
        grades: [
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
        ],
      },
      {
        name: "Despegue a hover",
        grades: [
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
        ],
      },
      {
        name: "Despegue a hover",
        grades: [
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
          "EC",
        ],
      },
      // Add more maneuvers as needed
    ],
    additionalRecommendations:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    contacts: [
      {
        number: 1,
        title: "Despegue a hover",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
      // Add more contacts as needed
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Adaptación</h1>
      <div className="mb-8">
        <p>
          <strong>Evaluador:</strong> {dummyData.evaluator}
        </p>
        <p>
          <strong>Alumno:</strong> {dummyData.student}
        </p>
        <p>
          <strong>Fecha:</strong> {dummyData.date}
        </p>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Items</th>
              <th className="px-4 py-2 border">Maniobras</th>
              {Array.from({ length: 30 }, (_, i) => (
                <th key={i} className="px-4 py-2 border">
                  C{i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dummyData.maneuvers.map((maneuver, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{maneuver.name}</td>
                {maneuver.grades.map((grade, i) => (
                  <td key={i} className="px-4 py-2 border">
                    {grade}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold">Recomendaciones Adicionales</h2>
        <p className="mt-4 text-gray-700">
          {dummyData.additionalRecommendations}
        </p>
      </div>
      {dummyData.contacts.map((contact, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-bold">Contacto nº {contact.number}</h2>
          <h3 className="text-md font-semibold">{contact.title}</h3>
          <p className="mt-4 text-gray-700">{contact.content}</p>
        </div>
      ))}
    </div>
  );
};

export default GenerateEvaluationReport;
