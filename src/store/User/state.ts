type UserRegistration = {
  name: string;
  email: string;
  password: string;
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
  id: string;
  authenticated: boolean;
}

function state(): UserStateInterface {
  return {
    userRegister: {} as UserRegistration,
    userLogin: {} as UserLogin,
    token: '',
    role: '',
    id: '',
    authenticated: false,
  };
}

export default state;
