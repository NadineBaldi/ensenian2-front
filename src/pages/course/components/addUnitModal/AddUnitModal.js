import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Utils
import { EMPTY_FIELD } from "../../../../constants/util";

const AddUnitModal = (props) => {
  const { openModal, setOpenModal } = props;

  // useState
  const [unitName, setUnitName] = useState("");
  const [courseNameError, setCourseNameError] = useState("");

  const handleErrorMessages = (errorType) => {
    if (errorType === EMPTY_FIELD) {
      return "El campo no puede quedar vacío";
    }
    return "";
  };

  const handleOnClick = () => {
    if (unitName === "") {
      setCourseNameError(EMPTY_FIELD);
    }
  };

  return (
    <div className="addUnitModal">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="addUnitModal-box-container">
          <div className="addUnitModal-close-btn-container">
            <IconButton onClick={() => setOpenModal(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="addUnitModal-title-container">
            <Typography variant="h5" color="primary">
              <strong>Agregar nueva unidad</strong>
            </Typography>
          </div>
          <div className="addUnitModal-text-fields">
            <div className="addUnitModal-text-field-container">
              <TextField
                id="unitName"
                value={unitName}
                label="Nombre de la unidad *"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                }}
                style={{ marginTop: 11 }}
                onChange={(event) => setUnitName(event.target.value)}
                error={courseNameError !== "" ? true : false}
                helperText={handleErrorMessages(courseNameError)}
                onBlur={() =>
                  courseNameError !== "" ? setCourseNameError("") : null
                }
              />
            </div>
          </div>
          <div className="addUnitModal-course-button-container">
            <Button
              className="addUnitModal-button"
              variant="contained"
              onClick={() => handleOnClick()}
            >
              Agregar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddUnitModal;
