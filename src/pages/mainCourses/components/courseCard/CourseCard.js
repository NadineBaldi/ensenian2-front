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
  const { courseId, courseName, courseStatus, courses } = props;

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

  const handleChangeName = () => {
    setAnchorEl(null);
    setOpenChangeCourseNameModal(true);
  };

  const changeCourseStatus = (newStatus) => {
    const selectedCourse = courses.find(({ id }) => id === courseId);
    selectedCourse.status = newStatus;
    setAnchorEl(null);
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
              <MenuItem onClick={handleChangeName}>Editar nombre</MenuItem>
              {courseStatus !== PUBLISHED_COURSE_STATUS && (
                <MenuItem
                  onClick={() => changeCourseStatus(PUBLISHED_COURSE_STATUS)}
                >
                  Publicar curso
                </MenuItem>
              )}
              {courseStatus !== ARCHIVED_COURSE_STATUS && (
                <MenuItem
                  onClick={() => changeCourseStatus(ARCHIVED_COURSE_STATUS)}
                >
                  Archivar curso
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
        courses={courses}
      />
    </div>
  );
};

export default CourseCard;
