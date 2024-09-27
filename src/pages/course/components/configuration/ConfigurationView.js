/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// Constants
import {
  NAME,
  DESCRIPTION,
  ARCHIVADO,
  PENDIENTE,
  PUBLICADO,
  ERROR_EMPTY_FIELDS,
  SUBJECT_STATUS_EDITED_CORRECTLY,
  SUBJECT_NAME_EDITED_CORRECTLY,
  SUBJECT_DESCRIPTION_EDITED_CORRECTLY
} from "../../../../constants/util";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from '@mui/material/Snackbar';
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

// Icons
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

// Components
import StudentsManagementModal from "../studentsManagementModal/StudentsManagementModal";

const ConfigurationView = (props) => {
  const { 
    courseInfo,
    editSubjectStatus,
    showSuccessEditStatusMessage,
    setShowSuccessEditStatusMessage,
    editSubjectName,
    showSuccessEditNameMessage,
    setShowSuccessEditNameMessage,
    editSubjectDescription,
    showSuccessEditDescriptionMessage,
    setShowSuccessEditDescriptionMessage,
    addStudentToCourse,
  } = props;

  const [editCourseData, setEditCourseData] = useState({
    name: false,
    state: false,
    description: false,
  });
  const [newCourseData, setNewCourseData] = useState({});
  const [alignment, setAlignment] = useState();
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    description: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    if (courseInfo) {
      setNewCourseData(courseInfo);
    }
  }, [courseInfo]);

  useEffect(() => {
    if (refreshPage && courseInfo) {
      window.location.href = `http://localhost:3000/course?courseId=${courseInfo.id}`;
    }
  }, [refreshPage]);

  useEffect(() => {
    const { state } = courseInfo || {};

    if (state) {
      switch (state) {
        case ARCHIVADO:
          setAlignment("left");
          break;
        case PENDIENTE:
          setAlignment("center");
          break;
        case PUBLICADO:
          setAlignment("right");
          break;
        default:
          setAlignment("");
          break;
      }
    }
  }, [courseInfo]);

  const handleEditIconClick = (key, value) => {
    setEditCourseData({ ...editCourseData, [key]: value });
  };

  const handleAlignment = (event, newAlignment) => {
    const values = {
      id: courseInfo.id,
    }

    debugger

    if (newAlignment) {
      switch (newAlignment) {
        case "left":
          values.state = "ARCHIVED";
          break;
        case "center":
          values.state = "PENDING";
          break;
        case "right":
          values.state = "PUBLISHED";
          break;
        default:
          setAlignment("");
          break;
      }

      setAlignment(newAlignment);
      editSubjectStatus(values);
    }
  };

  const handleChangeNewCourseData = (event, key) => {
    setNewCourseData({ ...newCourseData, [key]: event.target.value });

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [key]: "",
    });
  };

  const handleCancelChange = (key) => {
    setNewCourseData(courseInfo);
    handleEditIconClick(key, false);

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [key]: "",
    });
  };

  const handleApplyChange = (key) => {
    let hasErrors = false;
    const newErrorMessages = {};

    for (const fieldName in newCourseData) {
      if (fieldName !== "id" && !newCourseData[fieldName]) {
        newErrorMessages[fieldName] = ERROR_EMPTY_FIELDS;
        hasErrors = true;
      }
    }

    setErrorMessages(newErrorMessages);

    if (!hasErrors) {
      handleEditIconClick(key, false);
      
      if (key === NAME) {
        const values = {
          id: courseInfo.id,
          name: newCourseData[NAME]
        }
        editSubjectName(values);
      } else if (key === DESCRIPTION) {
        const values = {
          id: courseInfo.id,
          description: newCourseData[DESCRIPTION]
        }
        editSubjectDescription(values)
      }
    }
  };

  const handleEndAdornment = (key) => {
    return !editCourseData[`${key}`] ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="edit field"
          onClick={() => handleEditIconClick(key, true)}
          edge="end"
        >
          <EditIcon color="green" />
        </IconButton>
      </InputAdornment>
    ) : (
      <InputAdornment position="end">
        <IconButton
          aria-label="save changes"
          onClick={() => handleApplyChange(key)}
          edge="end"
        >
          <CheckIcon color="green" />
        </IconButton>
        <IconButton
          aria-label="close edit option"
          onClick={() => handleCancelChange(key)}
          edge="end"
        >
          <CloseIcon color="green" />
        </IconButton>
      </InputAdornment>
    );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSuccessEditNameMessage(false);
    setShowSuccessEditStatusMessage(false);
    setShowSuccessEditDescriptionMessage(false);
    setRefreshPage(true);
  };

  return (
    <div className="configuration-view">
      <div className="configuration-view__card">
        <div className="configuration-view__title-container">
          <Typography variant="h5" classes={{ root: "title-text" }}>
            Datos de la materia
          </Typography>
        </div>
        <div className="configuration-view__textfield-container">
          <div>
            <Typography variant="subtitle" classes={{ root: "subtitle-text" }}>
              Nombre
            </Typography>
          </div>
          <TextField
            id={NAME}
            value={newCourseData.name}
            color="primary"
            focused
            InputProps={{
              className: "configuration-view__text-field",
              endAdornment: handleEndAdornment(NAME),
              readOnly: editCourseData.name ? false : true,
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) => handleChangeNewCourseData(event, NAME)}
            error={!!errorMessages.name}
            helperText={errorMessages.name}
          />
        </div>
        <div className="configuration-view__textfield-container">
          <div>
            <Typography variant="subtitle" classes={{ root: "subtitle-text" }}>
              Descripción
            </Typography>
          </div>
          <TextField
            id={DESCRIPTION}
            value={newCourseData.description}
            color="primary"
            focused
            InputProps={{
              className: "configuration-view__text-field",
              endAdornment: handleEndAdornment(DESCRIPTION),
              readOnly: editCourseData.description ? false : true,
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) => handleChangeNewCourseData(event, DESCRIPTION)}
            error={!!errorMessages.description}
            helperText={errorMessages.description}
          />
        </div>
        <div className="configuration-view__togglebtn-container">
          <div>
            <Typography variant="subtitle" classes={{ root: "subtitle-text" }}>
              Estado
            </Typography>
          </div>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            color="primary"
          >
            <ToggleButton value="left" aria-label="left aligned">
              Archivado
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Pendiente
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              Publicado
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="configuration-view__students-config-container">
          <div>
            <Typography variant="subtitle" classes={{ root: "subtitle-text" }}>
              Estudiantes
            </Typography>
          </div>
          <div className="configuration-view__config-students-button-container">
            <Button
              variant="contained"
              className="configuration-view__config-students-button"
              onClick={() => setOpenModal(true)}
            >
              Gestionar estudiantes
            </Button>
          </div>
        </div>
      </div>
      {openModal && <StudentsManagementModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        students={courseInfo.studentList}
        addStudentToCourse={addStudentToCourse}
      />}
      {showSuccessEditStatusMessage && (
        <div className="configuration-view__course-snackbar-container">
          <Snackbar
            open={showSuccessEditStatusMessage}
            autoHideDuration={3000}
            onClose={handleClose}
            message={SUBJECT_STATUS_EDITED_CORRECTLY}
          />
        </div>
      )}
      {showSuccessEditNameMessage && (
        <div className="configuration-view__course-snackbar-container">
          <Snackbar
            open={showSuccessEditNameMessage}
            autoHideDuration={5000}
            onClose={handleClose}
            message={SUBJECT_NAME_EDITED_CORRECTLY}
          />
        </div>
      )}
      {showSuccessEditDescriptionMessage && (
        <div className="configuration-view__course-snackbar-container">
          <Snackbar
            open={showSuccessEditDescriptionMessage}
            autoHideDuration={5000}
            onClose={handleClose}
            message={SUBJECT_DESCRIPTION_EDITED_CORRECTLY}
          />
        </div>
      )}
    </div>
  );
};

export default ConfigurationView;
