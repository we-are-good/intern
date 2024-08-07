import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  NavBarWrapper,
  MenuWrapper,
  ContentsWrapper,
} from "../styles/NavBarStyles";

const NavBar = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    const logOutConfirmation = confirm("정말 로그아웃 하시겠습니까?");
    if (logOutConfirmation) {
      //유저 로그아웃 로직
      navigate("/login");
    }
  };
  return (
    <NavBarWrapper>
      <MenuWrapper>
        <Link to="/">Home</Link>
        <Link to="/mypage:id">Mypage</Link>
        <div onClick={logOutHandler}>Log-out</div>
      </MenuWrapper>
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
