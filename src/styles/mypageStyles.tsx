import styled from "styled-components";

export const MypageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0px;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const ProfileChangeButton = styled.button`
  width: 100px;
  background-color: white;
  padding: 5px;
  border: 3px blue solid;
  border-radius: 10px;
  cursor: pointer;
`;

export const AvatarImg = styled.label`
  width: 200px;
  overflow: hidden;
  height: 200px;
  border-radius: 10px;
  background-color: green;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 50px;
  }
  ::placeholder {
    color: black;
  }
`;
export const AvatarInput = styled.input`
  display: none;
`;
