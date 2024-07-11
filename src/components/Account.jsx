import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  const { currentUser, logout } = useAuth();

  async function handleClick() {
    try {
      await logout();
    } catch (err) {
      console.log("Logout error");
    }
  }

  return (
    <>
      {currentUser ? (
        <div className="account">
          <FontAwesomeIcon icon={faCircleUser} />
          <span>{currentUser.displayName}</span>
          <FontAwesomeIcon icon={faRightFromBracket} onClick={handleClick} />
        </div>
      ) : (
        <>
          <NavLink to="/registration" className="nav-link">
            Registration
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </>
      )}
    </>
  );
}
