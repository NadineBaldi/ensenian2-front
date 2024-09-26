import { useState } from "react";

// Api
import { 
  getSubjectById, 
  saveSubject, 
  changeSubjectName,
  changeSubjectStatus,
  changeSubjectDescription
} from "../../../api/subject";

const useFetchSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessEditNameMessage, setShowSuccessEditNameMessage] = useState(false);
  const [showSuccessEditStatusMessage, setShowSuccessEditStatusMessage] = useState(false);
  const [showSuccessEditDescriptionMessage, setShowSuccessEditDescriptionMessage] = useState(false);
  
  const getSubjectsByTeacherId = async (id) => {
    try {
      const { data } = await getSubjectById(id);

      setSubjects(data);
    } catch (e) {
      console.log(e);
    }
  }

  const addNewSubject = async (data) => {
    try {
      await saveSubject(data);
      setShowSuccessMessage(true);
    } catch (e) {
      console.log(e);
      setShowSuccessMessage(false);
    }
  }

  const editSubjectName = async (data) => {
    try {
      await changeSubjectName(data);
      setShowSuccessEditNameMessage(true);
    } catch (e) {
      console.log(e);
      setShowSuccessEditNameMessage(false);
    }
  }

  const editSubjectStatus = async (data) => {
    try {
      await changeSubjectStatus(data);
      setShowSuccessEditStatusMessage(true);
    } catch (e) {
      console.log(e);
      setShowSuccessEditStatusMessage(false);
    }
  }

  const editSubjectDescription = async (data) => {
    try {
      await changeSubjectDescription(data);
      setShowSuccessEditDescriptionMessage(true);
    } catch (e) {
      console.log(e);
      setShowSuccessEditDescriptionMessage(false);
    }
  }

  return {
    getSubjectsByTeacherId,
    subjects,
    addNewSubject,
    showSuccessMessage,
    setShowSuccessMessage,
    editSubjectName,
    showSuccessEditNameMessage,
    setShowSuccessEditNameMessage,
    editSubjectStatus,
    showSuccessEditStatusMessage,
    setShowSuccessEditStatusMessage,
    editSubjectDescription,
    showSuccessEditDescriptionMessage,
    setShowSuccessEditDescriptionMessage
  }
};

export default useFetchSubjects;