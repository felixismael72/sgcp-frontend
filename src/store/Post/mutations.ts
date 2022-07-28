import { MutationTree } from 'vuex';
import { PostStateInterface } from './state';

const mutation: MutationTree<PostStateInterface> = {
  fillPosts(state: PostStateInterface, data) {
    state.posts = [...data];
  },

  updatePosts(state: PostStateInterface, data) {
    state.posts = [...data];
  },

  fillOpenedPost(state: PostStateInterface, data) {
    state.openedPost = data;
  },
};

export default mutation;
