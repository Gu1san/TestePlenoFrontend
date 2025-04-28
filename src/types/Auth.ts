export interface SignupData {
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  role: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  bio: string;
  contact: string;
  role: string;
}
