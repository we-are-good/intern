import axios, { AxiosError } from "axios";
import { ProfileType } from "../../types/profileTypes";
import { deleteCookie, getCookie } from "../../utils/Cookies";

import type {
  LoginUserType,
  NewUserType,
  UserType,
} from "../../types/userTypes";

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
      deleteCookie("accessToken");
    }
  }
};

export const addUser = async (newUser: NewUserType): Promise<void> => {
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
    const data = await api.get(`/user`, {
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
    return undefined;
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
          "Content-Type": "multipart/form-data",
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
  ("오류가 발생했습니다!");
  return error;
});
