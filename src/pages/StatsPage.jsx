// src/pages/StatsPage.jsx
import React from "react";
import jsPDF from "jspdf";

const StatsPage = () => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    doc.setDrawColor(0);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Certificado de Curso", 105, 40);

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Este documento certifica la simulación exitosa de la descarga del PDF.",
      60,
      70
    );

    const fecha = new Date().toLocaleDateString();
    doc.text(`Fecha de emisión: ${fecha}`, 60, 100);

    doc.setFont("helvetica", "italic");
    doc.text("____________________", 190, 140);
    doc.text("Firma Autorizada", 200, 150);

    doc.save("certificado_curso.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-orange-800">
          Certificado de Curso
        </h1>
        <p className="text-gray-700 mb-6">
          Presiona el botón para generar un certificado en formato PDF.
        </p>
        <button
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Descargar Certificado PDF
        </button>
      </div>
    </div>
  );
};

export default StatsPage;
