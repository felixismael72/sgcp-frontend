type UserRegistration = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  token: string;
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
}

function state(): UserStateInterface {
  return {
    userRegister: {} as UserRegistration,
    userLogin: {} as UserLogin,
  };
}

export default state;
