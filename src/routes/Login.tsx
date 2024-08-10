import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { UserInputWrapper } from "../styles/joinAndLoginStyles";

const Login = () => {
  return (
    <UserInputWrapper>
      <p>Log in</p>
      <LoginForm />
      <Link to={"/joinin"}>Join in으로 가기</Link>
    </UserInputWrapper>
  );
};

export default Login;
