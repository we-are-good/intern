import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../query/queryFunctions/userQueryFns";
import { UserInputWrapper, UserInputs } from "../styles/joinAndLoginStyles";
import { setCookie } from "../utils/Cookies";
import { useTokenStore } from "../store/tokenStore";

const Login = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { addToken } = useTokenStore();

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
      if (data && data.accessToken) {
        setCookie("accessToken", data.accessToken);
        addToken(data.accessToken);
      }
      navigation("/");
    } catch {
      console.error(Error);
    } finally {
      setIsLoading(false);
      setId("");
      setPassword("");
    }
  };
  return (
    <UserInputWrapper>
      <p>Log in</p>
      <UserInputs onSubmit={(e) => loginHandeler(e)}>
        <input
          id="userId"
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          id="userPassword"
          type="text"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="loginButton" type="submit">
          {isLoading ? "진행중.." : "확인"}
        </button>
      </UserInputs>
      <Link to={"/joinin"}>Join in으로 가기</Link>
    </UserInputWrapper>
  );
};

export default Login;
