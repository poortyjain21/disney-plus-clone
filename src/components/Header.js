import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      const user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          userPhoto: user.photoURL,
        })
        // <Link to={"/Home"}></Link>;
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());

      navigate("/login");
      console.log("signed out ");
    });
  };

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            userPhoto: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  });
  return (
    <Nav>
      <Logo src="../images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="../images/home-icon.svg" />
              <span>HOME</span>
            </a>

            <a>
              <img src="../images/search-icon.svg" />
              <span>SEARCH</span>
            </a>

            <a>
              <img src="../images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>

            <a>
              <img src="../images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>

            <a>
              <img src="../images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>

            <a>
              <img src="../images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src="../images/poorty_img.jpg" onClick={signOut} />
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0px 16px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "  ";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 50px;
  border-radius: 50%;
  width: 50px;
  cursor: pointer;
`;

const Login = styled.div`
  height: 40px;
  width: 90px;
  border: 1px solid #f9f9f9;

  padding: 6px 0px;
  letter-spacing: 1.5px;
  // margin-left: 88%;
  cursor: pointer;
  // font-size: 20px;
  // display: flex;
  // align-items: center;
  // text-align: center;
  padding: 8px 16px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  &:hover {
    background: #f9f9f9;
    color: black;
    border-color: transparent;
  }
  border-radius: 4px;
`;

const LoginContainer = styled.div``;
export default Header;
