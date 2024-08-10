import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, { httpOnly: true, secure: true, path: "/" });
};

export const deleteCookie = (name: string) => {
  return cookies.remove(name, { path: "/" });
};
