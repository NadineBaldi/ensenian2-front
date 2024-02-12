import React from "react";

const FileUploader = () => {
  const handleFileUpload = (event) => {
    console.log(event.target.files);
    //TODO lógica para cargar archivo, mostrar el loader y mostrar el archivo una vez cargado con éxito
  };

  return (
    <div className="create-bulk-question-modal__file-uploader-container">
      <div className="create-bulk-question-modal__file-uploader">
        <label className="create-bulk-question-modal__file-uploader-label">
          <span className="create-bulk-question-modal__visually-hidden">
            Seleccionar archivos
          </span>
        </label>
        <div className="create-bulk-question-modal__dropzone">
          <svg
            className="create-bulk-question-modal__dropzone-dashed-border"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            aria-hidden={true}
          >
            <rect
              width="100%"
              height="100%"
              fill="none"
              rx="6"
              ry="6"
              strokeDasharray="8, 4"
              strokeDashoffset="0"
            ></rect>
          </svg>
          <input
            type="file"
            className="create-bulk-question-modal__dropzone-input"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
          />
          <div className="create-bulk-question-modal__dropzone-button">
            <div className="create-bulk-question-modal__dropzone-description-container">
              <span
                className="create-bulk-question-modal__dropzone-icon"
                aria-hidden={true}
              >
                <svg
                  aria-hidden={true}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.40202 6.44859L3.54841 5.60517L7.94826 1.15216L12.4484 5.5946L11.6054 6.44859L8.59993 3.48167V11H7.39993V3.41446L4.40202 6.44859Z"
                    fill="#4E35F2"
                  ></path>
                  <path
                    d="M1.39893 12.7993V9.79974H2.59893V12.7993C2.59893 13.1307 2.86755 13.3993 3.19893 13.3993H12.7989C13.1303 13.3993 13.3989 13.1307 13.3989 12.7993V9.79974H14.5989V12.7993C14.5989 13.7934 13.793 14.5993 12.7989 14.5993H3.19893C2.20481 14.5993 1.39893 13.7934 1.39893 12.7993Z"
                    fill="#4E35F2"
                  ></path>
                </svg>
              </span>
              <span
                className="create-bulk-question-modal__dropzone-call-to-action"
                aria-hidden={true}
              >
                Seleccionar
              </span>{" "}
              <span
                className="create-bulk-question-modal__dropzone-description"
                aria-hidden={true}
              >
                o arrastrar el archivo aquí.
              </span>
              <span
                className="create-bulk-question-modal__dropzone-requirements"
                aria-hidden={true}
              >
                Hasta 10 archivos .xlsx o .xls con peso máximo 100KB cada uno.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
