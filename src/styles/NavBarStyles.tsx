import styled from "styled-components";

export const NavBarWrapper = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  padding: 50px 0px;
  width: 100%;
  height: 100%;
  max-width: 860px;
  padding: 30px;
  border: 8px white solid;
  border-radius: 10px;
`;

export const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  gap: 20px;
  width: 200px;
  height: 200px;
  background-color: rgba(133, 184, 248, 0.9);
  border-radius: 20px;
`;

export const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  height: 200px;
  background-color: rgba(133, 184, 248, 0.9);
  border-radius: 20px;
`;
