import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PostStateInterface } from './state';

const getters: GetterTree<PostStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
