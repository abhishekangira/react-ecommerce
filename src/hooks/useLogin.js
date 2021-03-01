import { useHistory } from "react-router-dom";
import auth from "../auth";

export default function useLogin(email, password, setCurrentUser) {
  const history = useHistory();
  return async (cb) => {
    try {
      let loginResponse = await auth.login(email, password, true);
      setCurrentUser(auth.currentUser());
      console.log("Logged In");
      history.push("/");
      return loginResponse;
    } catch (e) {
      console.error(e);
      return e;
    }
    cb();
  };
}
