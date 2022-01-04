import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };
  const login = (email, password) => {
    dispatch(authActions.login({ email, password }));
  };

  return { auth, login, logout };
};

export default useAuth;
