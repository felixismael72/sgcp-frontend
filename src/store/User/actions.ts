import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  logInUser(context) {
    console.log(context.state.userLogin);
    api
      .post('/api/login', context.state.userLogin)
      .then((response) => {
        context.commit('setAuth', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default actions;
