import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenStore } from "../store/tokenStore";
import { UserInputs } from "../styles/joinAndLoginStyles";
import { setCookie } from "../utils/Cookies";
import { loginUser } from "../utils/api/userAPI";

const LoginForm = () => {
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
    <UserInputs onSubmit={(e) => loginHandeler(e)}>
      <input
        data-testid="userId"
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        data-testid="userPassword"
        type="text"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-testid="loginButton" type="submit">
        {isLoading ? "진행중.." : "확인"}
      </button>
    </UserInputs>
  );
};

export default LoginForm;
