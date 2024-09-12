import React from "react";

const GenerateEvaluationReport: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Adaptación</h1>
      <div className="mb-8">
        <p>
          <strong>Evaluador:</strong> Tomas Ortiz
        </p>
        <p>
          <strong>Alumno:</strong> Diego Falconi
        </p>
        <p>
          <strong>Fecha:</strong> 16-01-2023
        </p>
      </div>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Maniobra</th>
              <th className="px-4 py-2 border">C01</th>
              <th className="px-4 py-2 border">C02</th>
              <th className="px-4 py-2 border">C03</th>
              <th className="px-4 py-2 border">C04</th>
              <th className="px-4 py-2 border">C05</th>
              <th className="px-4 py-2 border">C06</th>
              <th className="px-4 py-2 border">C07</th>
              <th className="px-4 py-2 border">C08</th>
              <th className="px-4 py-2 border">C09</th>
              <th className="px-4 py-2 border">C10</th>
              <th className="px-4 py-2 border">C11</th>
              <th className="px-4 py-2 border">C12</th>
              <th className="px-4 py-2 border">C13</th>
              <th className="px-4 py-2 border">C14</th>
              <th className="px-4 py-2 border">C15</th>
              <th className="px-4 py-2 border">C16</th>
              <th className="px-4 py-2 border">C17</th>
              <th className="px-4 py-2 border">C18</th>
              <th className="px-4 py-2 border">C19</th>
              <th className="px-4 py-2 border">C20</th>
            </tr>
          </thead>
          <tbody>
            {/* Add more rows as necessary */}
            <tr>
              <td className="px-4 py-2 border">Despegue a hover</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
              <td className="px-4 py-2 border">EC</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold">Recomendaciones Adicionales</h2>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          dui id ornare arcu. Neque volutpat ac tincidunt vitae semper quis
          lectus. Bibendum neque egestas congue quisque egestas diam in arcu.
          Nunc faucibus a pellentesque sit amet porttitor eget. Massa enim nec
          dui nunc. Ultrices in iaculis nunc sed augue lacus viverra vitae.
          Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida
          arcu. Neque laoreet suspendisse interdum consectetur libero id
          faucibus. Enim eu turpis egestas pretium aenean pharetra magna. Vel
          fringilla est ullamcorper eget nulla facilisi etiam dignissim.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold">Contacto nº 1</h2>
        <h3 className="text-md font-semibold">Despegue a hover</h3>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          dui id ornare arcu. Neque volutpat ac tincidunt vitae semper quis
          lectus. Bibendum neque egestas congue quisque egestas diam in arcu.
          Nunc faucibus a pellentesque sit amet porttitor eget. Massa enim nec
          dui nunc. Ultrices in iaculis nunc sed augue lacus viverra vitae.
          Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida
          arcu. Neque laoreet suspendisse interdum consectetur libero id
          faucibus. Enim eu turpis egestas pretium aenean pharetra magna. Vel
          fringilla est ullamcorper eget nulla facilisi etiam dignissim.
        </p>
      </div>
    </div>
  );
};

export default GenerateEvaluationReport;
