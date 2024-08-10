export type UserTestType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type NewUserType = {
  id: string;
  password: string;
  nickname: string;
};

export type UserType = {
  accessToken?: string;
  userId: string;
  success: boolean;
  avatar: File;
  nickname: string;
};

export type LoginUserType = {
  id: string;
  password: string;
};
