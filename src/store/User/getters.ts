import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';

const getters: GetterTree<UserStateInterface, StateInterface> = {
  isAuthenticated(state) {
    return state.authenticated;
  },
};

export default getters;
