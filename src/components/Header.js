import React from 'react';
import { useNavigate } from "react-router-dom";
import URL from '../URL';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/AuthReducer';

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src= {`${URL}/img/argentBankLogo.webp`}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {user ? (
          <div>
            <a className="main-nav-item" href="./Profile">
              <i className="fa fa-user-circle"></i>
              {` ${user.userName}`}
            </a>
            <button className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        ) : (
          <a className="main-nav-item" href="./login">
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;
