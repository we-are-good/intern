import { Link } from "react-router-dom";
import JoininForm from "../components/JoininForm";
import { UserInputWrapper } from "../styles/joinAndLoginStyles";

const Joinin = () => {
  return (
    <UserInputWrapper>
      <p>Join in</p>
      <JoininForm />
      <Link to={"/login"}>Log in으로 가기</Link>
    </UserInputWrapper>
  );
};

export default Joinin;
