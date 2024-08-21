import { useState } from "react";

// Api
import { getSubjectById } from "../../../api/subject";

const useFetchSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  const getSubjectsByTeacherId = async (id) => {
    try {
      const { data } = await getSubjectById(id);

      setSubjects(data);
    } catch (e) {
      console.log(e);
    }
  }


  return {
    getSubjectsByTeacherId,
    subjects
  }
};

export default useFetchSubjects;