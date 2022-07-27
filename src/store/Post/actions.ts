import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostStateInterface } from './state';

const actions: ActionTree<PostStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
