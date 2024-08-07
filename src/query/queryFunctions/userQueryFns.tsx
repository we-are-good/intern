import type { UserTestType } from "../../types/UserTypes";

export const fetchUserInformation = async (): Promise<UserTestType> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: UserTestType = await response.json();
  console.log(data);
  return data;
};
