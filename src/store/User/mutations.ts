import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

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
    if (token != '') {
      state.authenticated = true;
    }

    const payload = JSON.parse(atob(JSON.stringify(token).split('.')[1]));

    state.role = payload.role;

    console.log(state);
  },
};

export default mutation;
