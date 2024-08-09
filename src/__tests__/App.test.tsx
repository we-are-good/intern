import { fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("Login Page", () => {
  test("render correctly", () => {
    render(<Login />, { wrapper: BrowserRouter });
    const element = screen.getByText("Log in");
    expect(element).toBeInTheDocument();
  });

  test("이미 있는 유저 로그인", () => {
    //given
    const loginComponent = render(<Login />, { wrapper: BrowserRouter });

    //when
    fireEvent.change(loginComponent.getByTestId("userId"), "ccccc");
    fireEvent.change(loginComponent.getByTestId("userPassword"), "1234");
    fireEvent.keyPress(loginComponent.getByTestId("loginButton"));

    //then
    const homeComponent = render(<Home />, { wrapper: BrowserRouter });
    const goLogin = homeComponent.getByRole("heading", { level: 1 });
    expect(goLogin).toBeInTheDocument();
  });
});
