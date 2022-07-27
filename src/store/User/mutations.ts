import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  fillUser(state: UserStateInterface, data) {
    state.userRegister = data.user;
  },
  logInUser(state: UserStateInterface, data) {
    state.userLogin = data.user;
  },
};

export default mutation;
