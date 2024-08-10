import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInputs } from "../styles/joinAndLoginStyles";
import { addUser } from "../utils/api/userAPI";

const JoininForm = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const joininHandeler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password || !nickname) {
      return alert("모든 항목을 입력해주세요.");
    }
    try {
      setIsLoading(true);
      const newUser = {
        id,
        password,
        nickname,
      };
      addUser(newUser);
      navigation("/login");
    } catch {
      console.error(Error);
    } finally {
      setIsLoading(false);
      setId("");
      setPassword("");
      setNickname("");
    }
  };
  return (
    <UserInputs onSubmit={(e) => joininHandeler(e)}>
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
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button type="submit">{isLoading ? "진행중.." : "확인"}</button>
    </UserInputs>
  );
};

export default JoininForm;
