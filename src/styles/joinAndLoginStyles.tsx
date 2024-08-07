import styled from "styled-components";

export const UserInputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  & > p {
    font-size: 60px;
    color: blue;
  }
`;

export const UserInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & > input {
    width: 300px;
    font-size: 18px;
    border: 3px blue solid;
    border-radius: 10px;
    padding: 5px 20px;
  }

  & > button {
    width: 60px;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
