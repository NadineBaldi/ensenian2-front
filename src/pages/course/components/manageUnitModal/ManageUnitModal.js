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
import { Tab, Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

// Constants
import {
  ERROR_EMPTY_FIELDS,
  INVALID_NAME,
} from "../../../../constants/util";

const ManageUnitModal = (props) => {
  const { 
    openModal, 
    onClose, 
    unitIdSelected, 
    saveNewUnit, 
    updateUnitDetails,
    getUnitData,
    unitData,
    questions,
  } = props;

  const [newUnitData, setNewUnitData] = useState({});
  const {
    id,
    name: unitName,
    description,
    unitNameError,
    errorDescription,
    errorQuestions,
  } = newUnitData;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [newUnitQuestions, setNewUnitQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    if (unitIdSelected) getUnitData(unitIdSelected);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unitIdSelected]);

  useEffect(() => {
    if (unitData) {
      setNewUnitData({ ...unitData });
      setNewUnitQuestions(unitData.questionsList || []);
    } else {
      setNewUnitData({});
      setCurrentTabIndex(0);
      setNewUnitQuestions([]);
      setFilteredQuestions([]);
    }

    setFilteredQuestions(questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unitData, openModal]);

  const handleChangeNewUnitData = (event, key) => {
    setNewUnitData({ ...newUnitData, [key]: event.target.value });
  };

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  const handleSearch = (value) => {
    let aux = questions;

    aux = aux.filter(({ question }) =>
      question.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredQuestions(aux);
  };

  const handleOnChangeCheckbox = (isChecked, question) => {
    let aux = newUnitQuestions;

    if (isChecked) {
      aux = [...aux, question];
    } else {
      aux = aux.filter(({ id }) => id !== question.id);
    }

    setNewUnitQuestions(aux);
  };

  const generalInformation = () => {
    return (
      <div className="edit-unit-modal__text-fields">
        <div className="edit-unit-modal__title-text-field-container">
          <TextField
            id="unitName"
            value={unitName}
            label="Nombre de la unidad *"
            color="primary"
            focused
            InputProps={{
              className: "title-text-field",
            }}
            style={{ marginTop: 11 }}
            onChange={(event) => handleChangeNewUnitData(event, "name")}
            error={!!unitNameError}
            helperText={unitNameError}
          />
        </div>
        <div className="edit-unit-modal__title-text-field-container">
          <TextField
            id="unitDescription"
            value={description}
            label="Descripción"
            color="primary"
            focused
            InputProps={{
              className: "title-text-field",
            }}
            style={{ marginTop: 11 }}
            onChange={(event) => handleChangeNewUnitData(event, "description")}
            error={!!errorDescription}
            helperText={errorDescription}
          />
        </div>
      </div>
    );
  };

  const questionsInformation = () => {
    return (
      <div className="edit-unit-modal__text-fields">
        <div className="edit-unit-modal__search-question-container">
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
        <div className="edit-unit-modal__questions-container">
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
                          checked={newUnitQuestions?.some(
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
                      <ListItemText id={labelId} primary={value.question} />
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
    let unitNameError = !unitName ? ERROR_EMPTY_FIELDS : "";
    unitNameError = (unitData && unitName === unitData.name) ? INVALID_NAME : unitNameError;

    setNewUnitData({
      ...newUnitData,
      unitNameError,
    });

    return !!unitNameError || !!errorQuestions;
  };

  const handleApplyChanges = () => {
    if (!getErrorMessages()) {
      if (unitIdSelected) {
        updateUnitDetails({
          id,
          name: unitName,
          description,
          questionsListId: newUnitQuestions.map(({ id }) => (id)),
        })
      } else {
        saveNewUnit({
          name: unitName,
          description,
          questionsListId: newUnitQuestions.map(({ id }) => (id)),
        });
      }
      onClose();
    }
  };

  return (
    <div className="edit-unit-modal">
      <Modal open={openModal} onClose={() => onClose()}>
        <div className="edit-unit-modal__box-container">
          <div className="edit-unit-modal__close-btn-container">
            <IconButton onClick={() => onClose()} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="edit-unit-modal__title-container">
            <Typography variant="h5" color="primary">
              <strong>
                {unitIdSelected ? "Editar unidad" : "Agregar nueva unidad"}{" "}
              </strong>
            </Typography>
          </div>
          <div className="edit-unit-modal__tabs-container">
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
              <Tab label="Información general" />
              <Tab label="Preguntas" />
            </Tabs>
          </div>
          <div>{currentTabIndex === 0 && generalInformation()}</div>
          <div>{currentTabIndex === 1 && questionsInformation()}</div>
          {errorQuestions !== "" ? (
            <div className="edit-unit-modal__message-error-container">
              <Typography color="error" variant="caption">
                {errorQuestions}
              </Typography>
            </div>
          ) : null}
          <div className="edit-unit-modal__btn-container">
            <Button
              className="edit-unit-modal__button"
              variant="contained"
              onClick={() => handleApplyChanges()}
            >
              {unitIdSelected ? "Guardar cambios" : "Agregar"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageUnitModal;
