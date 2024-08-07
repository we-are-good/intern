import { useState } from "react";
import { UserInputWrapper, UserInputs } from "../styles/joinAndLoginStyles";
import { loginUser } from "../query/queryFunctions/userQueryFns";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/userInfoStore";

const Login = () => {
  const { userLogin, user } = useAuthStore();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandeler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password) {
      return alert("모든 항목을 입력해주세요.");
    }
    try {
      setIsLoading(true);
      const nowUser = {
        id,
        password,
      };
      const data = await loginUser(nowUser);
      userLogin(data);
      navigation("/");
    } catch {
      console.error(Error);
    } finally {
      setIsLoading(false);
      setId("");
      setPassword("");
    }
  };
  console.log(user);

  return (
    <>
      <UserInputWrapper>
        <p>Log in</p>
        <UserInputs onSubmit={(e) => loginHandeler(e)}>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLoading ? "진행중.." : "확인"}</button>
        </UserInputs>
        <Link to={"/joinin"}>Join in으로 가기</Link>
      </UserInputWrapper>
    </>
  );
};

export default Login;
