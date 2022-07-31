import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { getAuthorizationHeader } from '../utils';
import { AppointmentStateInterface } from './state';

const actions: ActionTree<AppointmentStateInterface, StateInterface> = {
  createAppointment(context, appointmentBody) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .post('/api/appointment/new', appointmentBody, headers)
      .then((response) => {
        context.commit('setCreatedID', response.data.id);
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Consulta marcada com sucesso!',
          position: 'top-right',
          timeout: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
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
};

export default actions;
