import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// Components
import AddStudentModal from "../addStudentModal/AddStudentModal";
import DeleteStudentModal from "../deleteStudentModal/DeleteStudentModal";

const columns = [
  { id: "name", label: "Nombre", minWidth: 170, align: "center" },
  {
    id: "enrollmentNumber",
    label: "Número de legajo",
    minWidth: 170,
    align: "center",
  },
  {
    id: "email",
    label: "Correo electrónico",
    minWidth: 170,
    align: "center",
  },
  {
    id: "delete",
    label: "Eliminar",
    minWidth: 100,
    align: "center",
  },
];

const StudentsManagementModal = (props) => {
  const { openModal, setOpenModal, students, addStudentToCourse } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAddStudentModal, setOpenAddStudentModal] = useState(false);
  const [openDeleteStudentModal, setOpenDeleteStudentModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="studentsManagementModal">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="studentsManagementModal__box-container">
          <div className="studentsManagementModal__close-btn-container">
            <IconButton onClick={() => setOpenModal(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="studentsManagementModal__title-container">
            <Typography variant="h6" color="primary">
              <strong>Gestión de estudiantes</strong>
            </Typography>
          </div>
          <div>
            <div className="studentsManagementModal__add-student-btn-container">
              <Button
                variant="contained"
                className="studentsManagementModal__add-student-btn"
                onClick={() => setOpenAddStudentModal(true)}
              >
                Agregar estudiante
              </Button>
            </div>
            <div>
              <TableContainer sx={{ maxHeight: 300 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((student) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={student.id}
                          >
                            <TableCell align="center">{student.name}</TableCell>
                            <TableCell align="center">
                              {student.docketNumber}
                            </TableCell>
                            <TableCell align="center">
                              {student.username}
                            </TableCell>
                            <TableCell align="center">
                              <Button
                                onClick={() => setOpenDeleteStudentModal(true)}
                              >
                                <DeleteForeverIcon />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={students.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Filas por página"
              />
            </div>
          </div>
        </div>
      </Modal>
      <DeleteStudentModal
        openModal={openDeleteStudentModal}
        setOpenModal={setOpenDeleteStudentModal}
      />
      <AddStudentModal
        openModal={openAddStudentModal}
        setOpenModal={setOpenAddStudentModal}
        addStudentToCourse={addStudentToCourse}
      />
    </div>
  );
};

export default StudentsManagementModal;
