import { useAuthContext } from "./useAuthContext";
import { useTicketsContext } from "./useTicketsContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: ticketsDispatch } = useTicketsContext();
  const navigate = useNavigate();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    ticketsDispatch({ type: "SET_WORKOUTS", payload: null });

    // Navigate to the home page
    navigate("/");
  };

  return { logout };
};
