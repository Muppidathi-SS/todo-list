export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterUser {
  userName: string;
  userEmail: string;
  userPassword: string;
}

export const REGISTER_EMPTY: RegisterData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginUser {
  userEmail: string;
  userPassword: string;
}

export interface LoginResponse {
  message: string;
  id: string;
  userName: string;
  userEmail: string;
  token: string;
  user?: {
    _id?: string;
    id?: string;
    userName?: string;
    userEmail?: string;
  };
}

export const LOGIN_EMPTY: LoginData = {
  email: "",
  password: "",
};
