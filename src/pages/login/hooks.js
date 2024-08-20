import { useState } from "react";

//Api
import {
  login
} from "../../api/login";

const useFetchLogin = () => {
  const [authenticated, setAuthenticated] = useState(null);

  const loginTeacher = async (username, password) => {
    try {
      const response = await login({username, password});
      console.log(response);
      setAuthenticated(true);
    } catch (e) {
      setAuthenticated(false);
      console.log(e);
    }
  };

  return {
    authenticated,
    loginTeacher,
  };
};

export default useFetchLogin;
