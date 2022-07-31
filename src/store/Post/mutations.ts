import { date } from 'quasar';
import { MutationTree } from 'vuex';
import { Post, PostStateInterface } from './state';

const mutation: MutationTree<PostStateInterface> = {
  fillPosts(state: PostStateInterface, data) {
    state.posts = [
      ...data.map((post: Post) => {
        return {
          _id: post._id,
          title: post.title,
          body: post.body,
          author: post.author,
          created_at: date.formatDate(post.created_at, 'DD/MM/YYYY HH:mm'),
          updated_at: date.formatDate(post.updated_at, 'DD/MM/YYYY HH:mm'),
        };
      }),
    ];
  },

  fillOpenedPost(state: PostStateInterface, data) {
    state.openedPost._id = data._id;
    state.openedPost.title = data.title;
    state.openedPost.body = data.body;
    state.openedPost.author = data.author;
    state.openedPost.created_at = date.formatDate(
      data.created_at,
      'DD/MM/YYYY HH:mm'
    );
    state.openedPost.updated_at = date.formatDate(
      data.updated_at,
      'DD/MM/YYYY HH:mm'
    );
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
