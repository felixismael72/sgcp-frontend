import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';
import { setLocalToken, removeLocalToken } from 'src/store/utils';

const mutation: MutationTree<UserStateInterface> = {
  fillUser(state: UserStateInterface, data) {
    state.userRegister = data.user;
  },
  setUserLogin(state: UserStateInterface, data) {
    state.userLogin = data;
  },
  setAuth(state: UserStateInterface, data) {
    state.token = data;
    const token = state.token;
    state.authenticated = true;

    setLocalToken(token);
    const payload = JSON.parse(atob(token.split('.')[1]));

    state.role = payload.role;
  },
  unsetAuth(state: UserStateInterface) {
    state.userLogin = { email: '', password: '' };
    state.userRegister = { id: '', name: '', email: '', password: '' };
    (state.authenticated = false),
      (state.role = ''),
      (state.token = ''),
      removeLocalToken();
  },
};

export default mutation;
