type UserRegistration = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
};

type UserLogin = {
  email: string;
  password: string;
};

export interface UserStateInterface {
  userRegister: UserRegistration;
  userLogin: UserLogin;
  token: string;
  role: string;
  authenticated: boolean;
}

function state(): UserStateInterface {
  return {
    userRegister: {} as UserRegistration,
    userLogin: {} as UserLogin,
    token: '',
    role: '',
    authenticated: false,
  };
}

export default state;
