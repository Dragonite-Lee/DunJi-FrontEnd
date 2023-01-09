export type LoginState = {
  value: {
    USER_ID: string;
    USER_NICKNAME: string;
    IS_LOGIN: boolean;
  };
  school: string;
  email: string;
  authNumber: number;
  AUTHNUMBER_OPEN: boolean;
};
