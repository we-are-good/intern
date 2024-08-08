import axios, { AxiosError } from "axios";

import type {
  LoginUserType,
  NewUserType,
  UserType,
} from "../../types/userTypes";
import { deleteCookie, getCookie } from "../../utils/Cookies";
import { ProfileType } from "../../types/profileTypes";

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (
  user: LoginUserType
): Promise<UserType | undefined> => {
  try {
    const response = await axios.post(`/api/login`, user, {
      withCredentials: true,
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage: string = error.response?.data.message;
      console.error(errorMessage);
    }
  }
};

export const addUser = async (newUser: NewUserType) => {
  try {
    await axios.post(`/api/register`, newUser, {
      withCredentials: true,
    });
    alert("회원가입 완료");
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage: string = error.response?.data.message;
      console.error(errorMessage);
    }
  }
};

export const fetchUser = async (
  accessToken: string
): Promise<UserType | undefined> => {
  try {
    const data = await axios.get(`/api/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`,
      },
    });
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage: string = error.response?.data.message;
      alert(`유저확인오류 ${errorMessage}`);
    }
    deleteCookie("accessToken");
  }
};

export const updateUser = async ({
  newFile,
  newNickname,
}: ProfileType): Promise<UserType | undefined> => {
  try {
    const accessToken: string = getCookie("accessToken");
    const data = await axios.patch(
      `/api/profile`,
      {
        avatar: newFile,
        nickname: newNickname,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${accessToken}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage: string = error.response?.data.message;
      console.error(errorMessage);
    }
  }
};

api.interceptors.response.use(function intercept(error) {
  console.log("오류가 발생했습니다!");
  return error;
});
