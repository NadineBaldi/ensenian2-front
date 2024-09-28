import { useState } from "react";

// Api
import { 
  getSubjectsById, 
  saveSubject, 
  changeSubjectName,
  changeSubjectStatus,
  changeSubjectDescription
} from "../../../api/subject";

import { 
  SUBJECT_ADDED_CORRECTLY, 
  SUBJECT_NAME_EDITED_CORRECTLY,
  SUBJECT_STATUS_EDITED_CORRECTLY,
  SUBJECT_DESCRIPTION_EDITED_CORRECTLY,
} from "../../../constants/util";

const useFetchSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false});
  
  const getSubjectsByTeacherId = async () => {
    try {
      const { data } = await getSubjectsById();

      setSubjects(data);
    } catch (e) {
      console.log(e);
    }
  }

  const addNewSubject = async (data) => {
    try {
      await saveSubject(data);
      await getSubjectsByTeacherId();
      setSnackbar({ open: true, message: SUBJECT_ADDED_CORRECTLY });
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Ocurrió un error, intente nuevamente"});
    }
  }

  const editSubjectName = async (data) => {
    try {
      await changeSubjectName(data);
      await getSubjectsByTeacherId();
      setSnackbar({ open: true, message: SUBJECT_NAME_EDITED_CORRECTLY});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Ocurrió un error, intente nuevamente"});
    }
  }

  const editSubjectStatus = async (data) => {
    try {
      await changeSubjectStatus(data);
      await getSubjectsByTeacherId();
      setSnackbar({ open: true, message: SUBJECT_STATUS_EDITED_CORRECTLY});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Ocurrió un error, intente nuevamente"});
    }
  }

  const editSubjectDescription = async (data) => {
    try {
      await changeSubjectDescription(data);
      await getSubjectsByTeacherId();
      setSnackbar({ open: true, message: SUBJECT_DESCRIPTION_EDITED_CORRECTLY});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Ocurrió un error, intente nuevamente"});
    }
  }

  return {
    getSubjectsByTeacherId,
    subjects,
    addNewSubject,
    editSubjectName,
    editSubjectStatus,
    editSubjectDescription,
    snackbar,
    setSnackbar,
  }
};

export default useFetchSubjects;