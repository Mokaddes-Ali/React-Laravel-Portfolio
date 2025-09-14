import React from "react";
import { FiDownload } from "react-icons/fi";
import cvPDF from "../assets/pdf/Cv (3).pdf";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPDF;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleDownload();
      }}
      className="flex items-center px-6 py-3 mt-6 -ml-12 bg-rose-500 text-white rounded-full hover:bg-rose-400 hover:text-black dark:hover:text-white dark:hover:bg-slate-500 transition duration-300"
    >
      <FiDownload className="mr-2" />
      Download Cv
    </a>
  );
};

export default DownloadCV;
