import { Link, Outlet, useNavigate } from "react-router-dom";

import { deleteCookie } from "../utils/Cookies";
import {
  ContentsWrapper,
  MenuWrapper,
  NavBarWrapper,
} from "../styles/navBarStyles";

const NavBar = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    const logOutConfirmation = confirm("정말 로그아웃 하시겠습니까?");
    if (logOutConfirmation) {
      deleteCookie("accessToken");
      navigate("/login");
    }
  };

  return (
    <NavBarWrapper>
      <MenuWrapper>
        <Link to="/">Home</Link>
        <Link to="/mypage/${id}">Mypage</Link>
        <div onClick={logOutHandler}>Log-out</div>
      </MenuWrapper>
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
