import React, { useEffect, useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import { Tab, Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

// Constants
import {
  ERROR_EMPTY_FIELDS,
  NOT_QUESTION_SELECTED,
  grades,
} from "../../../../constants/util";
import { questions } from "../../../../constants/questions";

const ManageExamModal = (props) => {
  const { openModal, onClose, examSelected } = props;

  const [newExamData, setNewExamData] = useState({});
  const {
    description,
    timeLimit,
    minimumGrade,
    errorDescription,
    errorTimeLimit,
    errorQuestions,
  } = newExamData;
  const [isSelected, setIsSelected] = useState(false);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [newExamQuestions, setNewExamQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    if (examSelected) {
      setNewExamData({ ...examSelected });
      setIsSelected(!!examSelected.timeLimit);
      setNewExamQuestions(examSelected.questions);
    } else {
      setNewExamData({});
      setIsSelected(false);
      setCurrentTabIndex(0);
      setNewExamQuestions([]);
      setFilteredQuestions([]);
    }

    setFilteredQuestions(questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examSelected, openModal]);

  const handleChangeNewExamData = (event, key) => {
    setNewExamData({ ...newExamData, [key]: event.target.value });
  };

  const handleChangeOptions = (newValue) => {
    setIsSelected(newValue);
  };

  function valuetext(value) {
    return `${value}`;
  }

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  const handleSearch = (value) => {
    let aux = questions;

    aux = aux.filter(({ title }) =>
      title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredQuestions(aux);
  };

  const handleOnChangeCheckbox = (isChecked, question) => {
    let aux = newExamQuestions;

    if (isChecked) {
      aux = [...aux, question];
    } else {
      aux = aux.filter(({ id }) => id !== question.id);
    }

    setNewExamQuestions(aux);
  };

  const generalInformation = () => {
    return (
      <div className="edit-exam-modal__text-fields">
        <div className="edit-exam-modal__title-text-field-container">
          <TextField
            id="examDescription"
            value={description}
            label="Descripción"
            color="primary"
            focused
            InputProps={{
              className: "title-text-field",
            }}
            style={{ marginTop: 11 }}
            onChange={(event) => handleChangeNewExamData(event, "description")}
            error={!!errorDescription}
            helperText={errorDescription}
          />
        </div>
        <div className="edit-exam-modal__limit-time-text-field-container">
          <TextField
            id="examTimeLimit"
            value={timeLimit}
            label="Tiempo límite (en minutos)"
            color="primary"
            focused
            InputProps={{
              className: "time-limit-text-field",
            }}
            style={{ marginTop: 11 }}
            disabled={!isSelected}
            onChange={(event) => handleChangeNewExamData(event, "timeLimit")}
            error={!!errorTimeLimit}
            helperText={errorTimeLimit}
          />
          <div className="edit-exam-modal__checkbox-container">
            <Checkbox
              checked={isSelected}
              size="small"
              onChange={(event) => handleChangeOptions(event.target.checked)}
            />
            <Typography classes={{ root: "text" }}>
              Configurar tiempo límite del exámen
            </Typography>
          </div>
        </div>
        <div className="edit-exam-modal__grade-container">
          <Typography classes={{ root: "grade-text" }}>
            Calificación mínima para aprobación
          </Typography>
          <div className="edit-exam-modal__slider-container">
            <Slider
              aria-label="Custom grades"
              defaultValue={minimumGrade}
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              marks={grades}
            />
          </div>
        </div>
      </div>
    );
  };

  const questionsInformation = () => {
    return (
      <div className="edit-exam-modal__text-fields">
        <div className="edit-exam-modal__search-question-container">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              borderRadius: "10px",
              backgroundColor: "#D9D9D9",
              height: "35px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar pregunta"
              inputProps={{ "aria-label": "Buscar pregunta" }}
              onChange={(event) => handleSearch(event.target.value)}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="edit-exam-modal__questions-container">
          <List
            sx={{
              width: "100%",
              maxWidth: 700,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
            }}
          >
            {filteredQuestions.map((value, index) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <div>
                  <ListItem key={value} disablePadding>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={newExamQuestions?.some(
                            ({ id }) => id === value.id
                          )}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                          onChange={(event) =>
                            handleOnChangeCheckbox(event.target.checked, value)
                          }
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value.title} />
                    </ListItemButton>
                  </ListItem>
                  {index + 1 !== questions?.length ? (
                    <Divider variant="inset" component="li" />
                  ) : null}
                </div>
              );
            })}
          </List>
        </div>
      </div>
    );
  };

  const getErrorMessages = () => {
    const errorDescription = !description ? ERROR_EMPTY_FIELDS : "";
    const errorTimeLimit = !timeLimit && isSelected ? ERROR_EMPTY_FIELDS : "";
    const errorQuestions = !newExamQuestions?.length
      ? NOT_QUESTION_SELECTED
      : "";

    setNewExamData({
      ...newExamData,
      errorDescription,
      errorTimeLimit,
      errorQuestions,
    });

    return !!errorDescription || !!errorTimeLimit || !!errorQuestions;
  };

  const handleApplyChanges = () => {
    if (!getErrorMessages()) {
      console.log("Se están guardando (ponele)");
      onClose();
      //TODO aca se llama al back
    }
  };

  return (
    <div className="edit-exam-modal">
      <Modal open={openModal} onClose={() => onClose()}>
        <div className="edit-exam-modal__box-container">
          <div className="edit-exam-modal__close-btn-container">
            <IconButton onClick={() => onClose()} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="edit-exam-modal__title-container">
            <Typography variant="h5" color="primary">
              <strong>
                {examSelected ? "Editar exámen" : "Crear nuevo exámen"}{" "}
              </strong>
            </Typography>
          </div>
          <div className="edit-exam-modal__tabs-container">
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
              <Tab label="Información general" />
              <Tab label="Preguntas" />
            </Tabs>
          </div>
          <div>{currentTabIndex === 0 && generalInformation()}</div>
          <div>{currentTabIndex === 1 && questionsInformation()}</div>
          {errorQuestions !== "" ? (
            <div className="edit-exam-modal__message-error-container">
              <Typography color="error" variant="caption">
                {errorQuestions}
              </Typography>
            </div>
          ) : null}
          <div className="edit-exam-modal__btn-container">
            <Button
              className="edit-exam-modal__button"
              variant="contained"
              onClick={() => handleApplyChanges()}
            >
              {examSelected ? "Guardar cambios" : "Crear exámen"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageExamModal;
