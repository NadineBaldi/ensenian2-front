import { useState } from "react";

//Api
import {
  login
} from "../../api/login";

const useFetchLogin = () => {
  const [authenticated, setAuthenticated] = useState(null);

  const loginTeacher = async (username, password) => {
    try {
      await login({username, password});
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
