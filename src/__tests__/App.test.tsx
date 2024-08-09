// // Imports
// import { fireEvent, render, screen } from "@testing-library/react";

// import Login from "../routes/Login";

// // To Test
// // import App from "../App";
// const loginHandeler = require("../routes/Login");
// // Tests

// describe("Login Page", () => {
//   test("render correctly", () => {
//     render(<Login />);
//     const element = screen.getByText("Log in");
//     expect(element);
//   });
// });

// describe(loginHandeler, () => {
//   test("잘못된 로그인", () => {
//     //given
//     const loginComponent = render(<Login />);

//     //when
//     fireEvent.change(loginComponent.getByTestId("userId"), "invalidUserName");
//     fireEvent.change(
//       loginComponent.getByTestId("userPassword"),
//       "wrongPassWord"
//     );
//     fireEvent.keyPress(loginComponent.getByTestId("loginButton"));

//     //then
//     const errorMessage = loginComponent.getByTestId("errorMessage");
//     expect(errorMessage).toBeTruthy();
//     expect(errorMessage.textContent).toBe("유효하지 않은 계정 정보입니다.");
//   });
// });
// // {
// //   test("Renders main page correctly", async () => {});
// //   test("homepage render", () => {
// //     expect(login("ccccc", 1234)).toBe(true);
// //   });
// // }

// //   {
// //   // Setup
// //   render(<App />);
// //   const buttonCount = await screen.findByRole("button");
// //   const codeCount = await screen.queryByText(/The count is now:/);

// //   // Pre Expecations
// //   expect(buttonCount.innerHTML).toBe("count is 0");
// //   // Instead of:
// //   expect(codeCount).toBeNull();
// //   expect(codeCount).not.toBeInTheDocuement();

// //   // Init
// //   fireEvent.click(buttonCount);
// //   fireEvent.click(buttonCount);

// //   // Post Expectations
// //   expect(buttonCount.innerHTML).toBe("count is 2");
// //   expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
// // });
