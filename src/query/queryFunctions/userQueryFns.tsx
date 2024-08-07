import axios from "axios";

import type {
  LoginUserType,
  NewUserType,
  UserTestType,
} from "../../types/userTypes";

export const fetchUserInformation = async (): Promise<UserTestType> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: UserTestType = await response.json();
  return data;
};

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (user: LoginUserType) => {
  try {
    await axios.post(`${api}/login`, user, { withCredentials: true });
  } catch (error) {
    const errorMessage: string = error.response.data.message;
    alert(errorMessage);
  }
};

export const addUser = async (newUser: NewUserType) => {
  try {
    await axios.post(`/api/register`, newUser, {
      withCredentials: true,
    });
    alert("회원가입 완료");
  } catch (error) {
    const errorMessage: string = error.response.data.message;
    alert(errorMessage);
  }
};

api.interceptors.response.use(function intercept(error) {
  console.log("오류가 발생했습니다!");
  return error;
});
