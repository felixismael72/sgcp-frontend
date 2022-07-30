import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { getAuthorizationHeader } from '../utils';
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
  fetchPostByID(context, id: string) {
    api
      .get(`/api/post/${id}`)
      .then((response) => {
        context.commit('fillOpenedPost', response.data);
      })
      .catch((error) => {
        if (error.response) {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Verifique os campos e tente novamente!',
            position: 'top-right',
            timeout: 3000,
          });
        } else {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Oops, parece que o serviço está indisponível!',
            position: 'top-right',
            timeout: 3000,
          });
        }
      });
  },
  createPost(context, postBody) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .post('/api/post/new', postBody, headers)
      .then((response) => {
        context.commit('setPostID', response.data);
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Publicação criada com sucesso!',
          position: 'top-right',
          timeout: 3000,
        });
      })
      .catch((error) => {
        if (error.response) {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Verifique os campos e tente novamente!',
            position: 'top-right',
            timeout: 3000,
          });
        } else {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Oops, parece que o serviço está indisponível!',
            position: 'top-right',
            timeout: 3000,
          });
        }
      });
  },
  updatePost(context, postBody) {
    const id = context.state.openedPost._id;

    const token = context.rootState.user.token;
    const headers = getAuthorizationHeader(token);

    api
      .put(`/api/post/${id}/edit`, postBody, headers)
      .then(() => {
        context.dispatch('fetchPosts');
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Publicação atualizada com sucesso!',
          position: 'top-right',
          timeout: 3000,
        });
      })
      .catch((error) => {
        if (error.response) {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Verifique os campos e tente novamente!',
            position: 'top-right',
            timeout: 3000,
          });
        } else {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Oops, parece que o serviço está indisponível!',
            position: 'top-right',
            timeout: 3000,
          });
        }
      });
  },
  removePost(context) {
    const id = context.state.openedPost._id;

    const token = context.rootState.user.token;
    const headers = getAuthorizationHeader(token);

    api
      .delete(`/api/post/${id}/remove`, headers)
      .then(() => {
        context.dispatch('fetchPosts');
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Publicação removida com sucesso!',
          position: 'top-right',
          timeout: 3000,
        });
      })
      .catch((error) => {
        if (error.response) {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Ocorreu um erro inesperado!',
            position: 'top-right',
            timeout: 3000,
          });
        } else {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Oops, parece que o serviço está indisponível!',
            position: 'top-right',
            timeout: 3000,
          });
        }
      });
  },
};

export default actions;
