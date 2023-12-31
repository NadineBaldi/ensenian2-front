import React, { useState } from "react";

// Material UI Components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Icons
import CircleIcon from "@mui/icons-material/Circle";

const CourseCard = (props) => {
  const { courseName, courseStatus } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColor = () => {
    switch (courseStatus) {
      case "Pendiente":
        return "tertiary";
      case "Archivado":
        return "skyblue";
      case "Publicado":
        return "green";
      default:
        return "tertiary";
    }
  };

  return (
    <div className="card-container">
      {" "}
      <Card sx={{ height: 280, borderRadius: 5 }}>
        <div className="body-card-container">
          <Typography variant="title" color="primary">
            {courseName}
          </Typography>
        </div>
        <div className={`footer-container footer-container-${courseStatus}`}>
          <div className="footer-div">
            <div className="state-container">
              <CircleIcon style={{ fontSize: 10 }} color={handleColor()} />
              <div className="title-state-container">
                <Typography variant="state" color="black">
                  {courseStatus}
                </Typography>
              </div>
            </div>
            <div className="more-icon-container" onClick={handleClick}>
              <MoreHorizIcon />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openOptions}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Editar nombre</MenuItem>
              <MenuItem onClick={handleClose}>Archivar curso</MenuItem>
            </Menu>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseCard;
