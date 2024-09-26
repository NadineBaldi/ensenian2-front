import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Utils
import { INVALID_NAME } from "../../../../constants/util";

const ChangeCourseNameModal = (props) => {
  const {
    openChangeCourseNameModal,
    setOpenChangeCourseNameModal,
    courseId,
    courseName,
    editSubjectName
  } = props;

  const [newName, setNewName] = useState("");
  const [newNameError, setNewNameError] = useState("");

  const handleSaveNewName = () => {
    if (courseName === newName) {
      setNewNameError(INVALID_NAME);
    } else {
      const values = {
        id: courseId,
        name: newName
      }

      editSubjectName(values);
      setNewNameError("");
      setOpenChangeCourseNameModal(false);
    }
  };

  return (
    <div className="changeCourseNameModal">
      <Modal
        open={openChangeCourseNameModal}
        onClose={() => setOpenChangeCourseNameModal(false)}
      >
        <div className="changeCourseNameModal-box-container">
          <div className="changeCourseNameModal-title-container">
            <Typography variant="h5" color="primary">
              Editar nombre
            </Typography>
          </div>
          <div className="changeCourseNameModal-text-fields">
            <div className="changeCourseNameModal-text-field-container">
              <TextField
                id="courseName"
                value={courseName}
                label="Nombre actual de la materia"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                  readOnly: true,
                }}
                style={{ marginTop: 11 }}
              />
            </div>
            <div className="changeCourseNameModal-text-field-container">
              <TextField
                id="newCourseName"
                value={newName}
                label="Ingrese un nuevo nombre"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                }}
                style={{ marginTop: 11 }}
                onChange={(event) => setNewName(event.target.value)}
                error={newNameError !== "" ? true : false}
                helperText={newNameError}
              />
            </div>
            <div className="changeCourseNameModal-btn-container">
              <Button
                className="changeCourseNameModal-button"
                variant="contained"
                onClick={() => handleSaveNewName()}
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangeCourseNameModal;
