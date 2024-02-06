import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Utils
import { INVALID_NAME } from "../../../../constants/util";

const EditUnitNameModal = (props) => {
  const {
    openModal,
    setOpenModal,
    units,
    unitSelected: { name: unitName, id: idUnitSelected } = {},
  } = props;

  const [newName, setNewName] = useState("");
  const [newNameError, setNewNameError] = useState("");

  const changeName = (newName) => {
    const selectedCourse = units.find(({ id }) => id === idUnitSelected);
    selectedCourse.name = newName;
  };

  const handleSaveNewName = () => {
    if (unitName === newName) {
      setNewNameError(INVALID_NAME);
    } else {
      setNewNameError("");
      changeName(newName);
      setOpenModal(false);
    }
  };

  return (
    <div className="editUnitNameModal">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="editUnitNameModal-box-container">
          <div className="editUnitNameModal-close-btn-container">
            <IconButton onClick={() => setOpenModal(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="editUnitNameModal-title-container">
            <Typography variant="h5" color="primary">
              <strong>Editar nombre</strong>
            </Typography>
          </div>
          <div className="editUnitNameModal-text-fields">
            <div className="editUnitNameModal-text-field-container">
              <TextField
                id="courseName"
                value={unitName}
                label="Nombre actual de la unidad"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                  readOnly: true,
                }}
                style={{ marginTop: 11 }}
              />
            </div>
            <div className="editUnitNameModal-text-field-container">
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
            <div className="editUnitNameModal-btn-container">
              <Button
                className="editUnitNameModal-button"
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

export default EditUnitNameModal;
