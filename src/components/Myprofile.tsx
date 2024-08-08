import { useState } from "react";
import { useUserUpdateMutation } from "../query/useMutation/useUserMutation";
import { useUserQuery } from "../query/useQueries/useUserQueries";
import { MypageWrapper, ProfileChangeButton } from "../styles/mypageStyles";
import { getCookie } from "../utils/Cookies";

import type { UserType } from "../types/userTypes";
const Myprofile = () => {
  const token: string = getCookie("accessToken");
  const userInfo = useUserQuery(token) as UserType;
  const { nickname, avatar } = userInfo;

  const { mutate: userUpdateMutation } = useUserUpdateMutation();

  const [newNickname, setNewNickname] = useState(nickname);
  const [newFile, setNewFile] = useState("");
  const [isChange, setIsChange] = useState(false);

  const profileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      const newAddedFile = URL.createObjectURL(files[0]);
      setNewFile(newAddedFile);
    }
  };

  const nicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const userProfileChangeHandler = () => {
    try {
      userUpdateMutation({ newFile, newNickname });
      setIsChange(false);
    } catch (error) {
      console.error(Error);
    }
  };

  return (
    <MypageWrapper>
      {isChange ? (
        <>
          <input
            type="text"
            value={newNickname}
            onChange={(e) => nicknameChange(e)}
          />
          <label htmlFor="file">
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={(e) => profileImgChange(e)}
            />
          </label>
          <ProfileChangeButton type="button" onClick={userProfileChangeHandler}>
            확인
          </ProfileChangeButton>
        </>
      ) : (
        <>
          <p>{nickname}</p>
          <img src={avatar} alt="유저 사진" />
          <ProfileChangeButton type="button" onClick={() => setIsChange(true)}>
            프로필 변경
          </ProfileChangeButton>
        </>
      )}
    </MypageWrapper>
  );
};

export default Myprofile;
