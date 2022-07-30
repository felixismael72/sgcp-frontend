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

  setPostID(state: PostStateInterface, data) {
    state.createdID = data;
  },

  setPostTitle(state: PostStateInterface, data) {
    state.openedPost.title = data;
  },

  setPostBody(state: PostStateInterface, data) {
    state.openedPost.body = data;
  },

  setPostAuthor(state: PostStateInterface, data) {
    state.openedPost.author = data;
  },
};

export default mutation;
