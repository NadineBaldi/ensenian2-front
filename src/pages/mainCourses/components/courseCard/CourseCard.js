import React, { useState } from "react";

// Material UI Components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Icons
import CircleIcon from "@mui/icons-material/Circle";

// Components
import ChangeCourseNameModal from "../changeCourseNameModal/ChangeCourseNameModal";

// Utils
import {
  ARCHIVED_COURSE_STATUS,
  PUBLISHED_COURSE_STATUS,
} from "../../../../constants/util";

const CourseCard = (props) => {
  const { 
    courseId, 
    courseName, 
    courseStatus, 
    editSubjectName,
    editSubjectStatus
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);

  const [openChangeCourseNameModal, setOpenChangeCourseNameModal] =
    useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColor = () => {
    switch (courseStatus) {
      case "PENDING":
        return "tertiary";
      case "ARCHIVED":
        return "skyblue";
      case "PUBLISHED":
        return "green";
      default:
        return "tertiary";
    }
  };

  const handleCourseStatus = () => {
    switch (courseStatus) {
      case "PENDING":
        return "Pendiente";
      case "ARCHIVED":
        return "Archivado";
      case "PUBLISHED":
        return "Publicado";
      default:
        return "Pendiente";
    }
  }

  const handleChangeName = () => {
    setAnchorEl(null);
    setOpenChangeCourseNameModal(true);
  };

  const changeCourseStatus = (newStatus) => {
    const values = {
      id: courseId,
      state: newStatus
    }

    editSubjectStatus(values);
    setAnchorEl(null);
  };

  const handleOnClick = () => {
    if (courseId !== undefined) {
      let id = courseId;
      let newUrl = "http://localhost:3000/course?courseId=" + id;

      window.location.href = newUrl;
    }
  };

  return (
    <div className="card-container">
      {" "}
      <Card sx={{ height: 280, borderRadius: 5 }}>
        <div className="body-card-container" onClick={() => handleOnClick()}>
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
                  {handleCourseStatus()}
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
              <MenuItem onClick={handleChangeName}>Editar nombre</MenuItem>
              {courseStatus !== PUBLISHED_COURSE_STATUS && (
                <MenuItem
                  onClick={() => changeCourseStatus(PUBLISHED_COURSE_STATUS)}
                >
                  Publicar materia
                </MenuItem>
              )}
              {courseStatus !== ARCHIVED_COURSE_STATUS && (
                <MenuItem
                  onClick={() => changeCourseStatus(ARCHIVED_COURSE_STATUS)}
                >
                  Archivar materia
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </Card>
      <ChangeCourseNameModal
        openChangeCourseNameModal={openChangeCourseNameModal}
        setOpenChangeCourseNameModal={setOpenChangeCourseNameModal}
        courseId={courseId}
        courseName={courseName}
        editSubjectName={editSubjectName}
      />
    </div>
  );
};

export default CourseCard;
