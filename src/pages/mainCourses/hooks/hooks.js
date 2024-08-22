import { useState } from "react";

// Api
import { getSubjectById, saveSubject } from "../../../api/subject";

const useFetchSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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


  return {
    getSubjectsByTeacherId,
    subjects,
    addNewSubject,
    showSuccessMessage,
    setShowSuccessMessage
  }
};

export default useFetchSubjects;