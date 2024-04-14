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
} from "../../../../constants/util";

// Material UI Components
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

// Icons
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const ConfigurationView = (props) => {
  const { courseInfo } = props;

  const [data, setData] = useState({});
  const [editCourseData, setEditCourseData] = useState({
    name: false,
    status: false,
    description: false,
  });
  const [newCourseData, setNewCourseData] = useState({});
  const [alignment, setAlignment] = useState();
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (courseInfo) {
      setData(courseInfo);
      setNewCourseData(courseInfo);
    }
  }, []);

  useEffect(() => {
    const { status } = courseInfo || {};

    if (status) {
      switch (status) {
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
    setAlignment(newAlignment);
    // Falta cambiar el estado realmente llamando al back
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
    setNewCourseData(data);
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
      if (fieldName !== "id" && newCourseData[fieldName].trim() === "") {
        newErrorMessages[fieldName] = ERROR_EMPTY_FIELDS;
        hasErrors = true;
      }
    }

    setErrorMessages(newErrorMessages);

    if (!hasErrors) {
      setData(newCourseData);
      handleEditIconClick(key, false);
      // guardar en backend
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

  return (
    <div className="configuration-view">
      <div className="configuration-view__card">
        <div className="configuration-view__title-container">
          <Typography variant="h5" classes={{ root: "title-text" }}>
            Datos del curso
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
              {ARCHIVADO}
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              {PENDIENTE}
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              {PUBLICADO}
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationView;
