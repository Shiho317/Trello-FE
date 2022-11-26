import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import {
  AccountOption,
  HeaderWrapper,
  Icon,
  LogoutModal,
  UserInitial,
} from "./Header.style";

const Header = () => {
  const { userInfo, myStorage, setLoggedIn } = useContext(AppContext);
  const currUser = JSON.parse(userInfo);

  const navigate = useNavigate();

  const [openLogout, setOpenLogout] = useState(false);
  const openToggle = () => {
    setOpenLogout((prev) => !prev);
  };

  const loggedOut = () => {
    myStorage.removeItem("user");
    alert("You have successfully logged out.");
    setLoggedIn(false);
    setOpenLogout(false);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <HeaderWrapper>
      <h4>Trello</h4>
      <h3>our workspace</h3>
      {currUser !== null ? (
        <Icon>
          <UserInitial
            style={{ backgroundColor: currUser.color }}
            onClick={() => openToggle()}
          >
            <p>{currUser.name.split("")[0].toUpperCase()}</p>
          </UserInitial>
          {openLogout && (
            <LogoutModal>
              <li onClick={() => loggedOut()}>
                <p>Logout</p>
              </li>
            </LogoutModal>
          )}
        </Icon>
      ) : (
        <AccountOption>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
        </AccountOption>
      )}
    </HeaderWrapper>
  );
};

export default Header;
