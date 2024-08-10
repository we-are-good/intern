import { useState } from "react";
import { useUserUpdateMutation } from "../query/useMutation/useUserMutation";
import { useUserQuery } from "../query/useQueries/useUserQueries";
import {
  AvatarImg,
  AvatarInput,
  MypageWrapper,
  ProfileChangeButton,
} from "../styles/mypageStyles";
import { getCookie } from "../utils/Cookies";
import { Navigate } from "react-router-dom";

import type { UserType } from "../types/userTypes";
const Myprofile = () => {
  const token: string = getCookie("accessToken");
  const { data, isError } = useUserQuery(token);
  const { nickname, avatar } = data as UserType;

  const { mutate: userUpdateMutation } = useUserUpdateMutation();

  const [newNickname, setNewNickname] = useState(nickname);
  const [newFile, setNewFile] = useState<File>(avatar);
  const [isChange, setIsChange] = useState(false);

  const profileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setNewFile(files[0]);
    }
  };

  const nicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const userProfileChangeHandler = () => {
    if (!newNickname) {
      return alert("닉네임은 필수입니다.");
    }
    try {
      userUpdateMutation({ newFile, newNickname });
      setIsChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!token || isError) {
    return <Navigate to="/login" />;
  }

  return (
    <MypageWrapper>
      {isChange ? (
        <>
          <input
            type="text"
            value={newNickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              nicknameChange(e)
            }
          />
          <AvatarImg htmlFor="avatar">
            <img src={`${newFile}`} alt="유저 사진" />
            <AvatarInput
              placeholder="이미지"
              id="avatar"
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                profileImgChange(e)
              }
            />
          </AvatarImg>
          <ProfileChangeButton type="button" onClick={userProfileChangeHandler}>
            확인
          </ProfileChangeButton>
        </>
      ) : (
        <>
          <p>{nickname}</p>
          <AvatarImg htmlFor="avatar">
            <img src={`${avatar}`} alt="유저 사진" />
          </AvatarImg>
          <ProfileChangeButton type="button" onClick={() => setIsChange(true)}>
            프로필 변경
          </ProfileChangeButton>
        </>
      )}
    </MypageWrapper>
  );
};

export default Myprofile;
