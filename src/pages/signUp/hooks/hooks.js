//Api
import { signup } from "../../../../api/signup";

const useSingUp = () => {
  const saveTeacher = async (data) => {
    try {
      await signup(data);
      window.location.href = "http://localhost:3000/login";
    } catch (e) {
      console.log(e);
    }
  };

  return {
    saveTeacher,
  };
};

export default useSingUp;
