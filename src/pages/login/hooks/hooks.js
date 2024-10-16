import { useState } from "react";

//Api
import { login, getCurrentUser } from "../../../api/login";

// Cookies
import { setCookie, deleteCookie } from "../../../commons/helpers/cookies";

// Constants
import { TOKEN, USER_ID } from "../../../constants/util";

const useFetchLogin = () => {
  const [error, setError] = useState(false);

  const loginTeacher = async (username, password) => {
    try {
      const {
        data: { token },
      } = await login({ username, password });
      setCookie(TOKEN, token);

      const { data: { id: userId } } = await getCurrentUser(token);
      setCookie(USER_ID, userId);

      window.location.href = "http://localhost:3000/courses";
    } catch (e) {
      deleteCookie(TOKEN);
      console.log(e);
      setError(true);
    }
  };

  return {
    error,
    loginTeacher,
  };
};

export default useFetchLogin;
