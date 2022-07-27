import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostStateInterface } from './state';

const actions: ActionTree<PostStateInterface, StateInterface> = {
  fetchPosts(context) {
    api
      .get('/api/post')
      .then((response) => {
        context.commit('fillPosts', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default actions;
