import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tab, Tabs } from "@mui/material";

// Components
import ConfigView from "./components/config/ConfigView";
import ExamsView from "./components/exams/ExamsView";
import QuestionsView from "./components/questions/QuestionsView";
import UnitsView from "./components/units/UnitsView";

const CourseView = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleManageAccount = () => {
    setAnchorEl(null);
    window.open("http://localhost:3000/accountData", "_self");
  };

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <div className="course">
      <div className="course-container">
        <div className="header-container">
          <div className="user-info-container">
            <div
              className="account-data-container"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <div className="avatar-container">
                <Avatar
                  alt="Remy Sharp"
                  src="../../../assets/images/Background.jpeg"
                  sx={{ width: 30, height: 30 }}
                />
              </div>
              <Typography variant="subtitle" color="secondary">
                Nombre de usuario
              </Typography>
            </div>
            <Menu
              id="edit-data-menu"
              anchorEl={anchorEl}
              open={openOptions}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleManageAccount}>
                Gestionar cuenta
              </MenuItem>
              <MenuItem>Cerrar sesión</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="body-container">
          <div className="title-container">
            <Typography variant="title" color="primary">
              Nombre curso
            </Typography>
          </div>
          <div className="tabs-container">
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
              <Tab label="Unidades" />
              <Tab label="Preguntas" />
              <Tab label="Exámenes" />
              <Tab label="Configuraciones" />
            </Tabs>
          </div>
          <div>{currentTabIndex === 0 && <UnitsView />}</div>
          <div>{currentTabIndex === 1 && <QuestionsView />}</div>
          <div>{currentTabIndex === 2 && <ExamsView />}</div>
          <div>{currentTabIndex === 3 && <ConfigView />}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
