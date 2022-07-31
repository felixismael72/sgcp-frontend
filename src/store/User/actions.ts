import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { getAuthorizationHeader } from '../utils';
import { UserStateInterface } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  logInUser(context) {
    return new Promise((resolve, reject) => {
      api
        .post('/api/login', context.state.userLogin)
        .then((response) => {
          context.commit('setAuth', response.data.token);
          Notify.create({
            color: 'green-5',
            textColor: 'white',
            icon: 'check',
            message: 'Usuário entrou com sucesso!',
            position: 'top-right',
            timeout: 3000,
          });
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            Notify.create({
              color: 'red-5',
              textColor: 'white',
              icon: 'priority_high',
              message: 'Verifique as credenciais e tente novamente!',
              position: 'top-right',
              timeout: 3000,
            });
          } else {
            Notify.create({
              color: 'red-5',
              textColor: 'white',
              icon: 'priority_high',
              message: 'Oops, algo deu errado! Tente novamente mais tarde.',
              position: 'top-right',
              timeout: 3000,
            });
          }
          reject(error);
        });
    });
  },

  signUp(context, userBody) {
    api
      .post('/api/register', userBody)
      .then((response) => {
        context.commit('setAuth', response.data.token);
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Usuário cadastrado com sucesso!',
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
            message: 'Verifique os dados preenchidos!',
            position: 'top-right',
            timeout: 3000,
          });
        } else {
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Oops, algo deu errado! Tente novamente mais tarde.',
            position: 'top-right',
            timeout: 3000,
          });
        }
      });
  },

  refreshUser(context) {
    return new Promise((resolve, reject) => {
      const token = context.state.token;
      const headers = getAuthorizationHeader(token);
      api
        .get('/api/refresh', headers)
        .then((response) => {
          context.commit('setAuth', response.data.token);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Sua sessão expirou!',
            position: 'top-right',
            timeout: 3000,
          });
          reject(error);
        });
    });
  },

  logOutUser(context) {
    return new Promise((resolve, reject) => {
      const token = context.state.token;
      const headers = getAuthorizationHeader(token);

      api
        .patch('/api/logout', null, headers)
        .then((response) => {
          context.commit('unsetAuth');
          Notify.create({
            color: 'green-5',
            textColor: 'white',
            icon: 'check',
            message: 'Usuário saiu com sucesso!',
            position: 'top-right',
            timeout: 3000,
          });
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Sua sessão expirou!',
            position: 'top-right',
            timeout: 3000,
          });
          reject(error);
        });
    });
  },
};

export default actions;
