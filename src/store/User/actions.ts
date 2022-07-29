import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  logInUser(context) {
    return new Promise((resolve, reject) => {
      api
        .post('/api/login', context.state.userLogin)
        .then((response) => {
          context.commit('setAuth', response.data);
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
          console.log(error);
          Notify.create({
            color: 'red-5',
            textColor: 'white',
            icon: 'priority_high',
            message: 'Verifique as credenciais e tente novamente!',
            position: 'top-right',
            timeout: 3000,
          });
          reject(error);
        });
    });
  },

  logOutUser(context) {
    context.commit('unsetAuth');
    Notify.create({
      color: 'green-5',
      textColor: 'white',
      icon: 'check',
      message: 'Usuário saiu com sucesso!',
      position: 'top-right',
      timeout: 3000,
    });
  },
};

export default actions;
