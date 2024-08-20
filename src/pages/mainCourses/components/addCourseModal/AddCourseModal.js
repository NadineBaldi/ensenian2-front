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

const AddCourseModal = (props) => {
  const { openAddCourseModal, setOpenAddCourseModal } = props;

  // useState
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseNameError, setCourseNameError] = useState("");

  const handleErrorMessages = (errorType) => {
    if (errorType === EMPTY_FIELD) {
      return "El campo no puede quedar vacío";
    }
    return "";
  };

  const handleOnClick = () => {
    if (courseName === "") {
      setCourseNameError(EMPTY_FIELD);
    }
  };

  return (
    <div className="addCourseModal">
      <Modal
        open={openAddCourseModal}
        onClose={() => setOpenAddCourseModal(false)}
      >
        <div className="addCourseModal-box-container">
          <div className="addCourseModal-close-btn-container">
            <IconButton
              onClick={() => setOpenAddCourseModal(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="addCourseModal-title-container">
            <Typography variant="title" color="primary">
              Agregar nueva materia
            </Typography>
          </div>
          <div className="addCourseModal-text-fields">
            <div className="addCourseModal-text-field-container">
              <TextField
                id="courseName"
                value={courseName}
                label="Nombre de la materia *"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                }}
                style={{ marginTop: 11 }}
                onChange={(event) => setCourseName(event.target.value)}
                error={courseNameError !== "" ? true : false}
                helperText={handleErrorMessages(courseNameError)}
                onBlur={() =>
                  courseNameError !== "" ? setCourseNameError("") : null
                }
              />
            </div>
            <div className="addCourseModal-text-field-container">
              <TextField
                id="courseDescription"
                value={courseDescription}
                label="Descripción de la materia"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                }}
                style={{ marginTop: 11 }}
                onChange={(event) => setCourseDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="addCourseModal-course-button-container">
            <Button
              className="addCourseModal-button"
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

export default AddCourseModal;
