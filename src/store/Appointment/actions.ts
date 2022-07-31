import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { getAuthorizationHeader } from '../utils';
import { AppointmentStateInterface } from './state';

const actions: ActionTree<AppointmentStateInterface, StateInterface> = {
  fetchAppointments(context) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    let url = '';

    switch (context.rootGetters['user/getRole']) {
      case 'psychologist':
        url = '/api/appointment';
        break;
      case 'patient':
        url = '/api/appointment/mine';
        break;
    }

    api
      .get(url, headers)
      .then((response) => {
        context.commit('fillAppointments', response.data);
      })
      .catch(() => {
        Notify.create({
          color: 'red-5',
          textColor: 'white',
          icon: 'priority_high',
          message: 'Oops, parece que o serviço está indisponível!',
          position: 'top-right',
          timeout: 3000,
        });
      });
  },
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
        context.dispatch('fetchAppointments');
      })
      .catch(() => {
        Notify.create({
          color: 'red-5',
          textColor: 'white',
          icon: 'priority_high',
          message: 'Oops, parece que o serviço está indisponível!',
          position: 'top-right',
          timeout: 3000,
        });
      });
  },
  cancelAppointment(context, appointmentID) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .patch(`/api/appointment/${appointmentID}/cancel`, null, headers)
      .then(() => {
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Consulta cancelada com sucesso!',
          position: 'top-right',
          timeout: 3000,
        });
        context.dispatch('fetchAppointments');
      })
      .catch(() => {
        Notify.create({
          color: 'red-5',
          textColor: 'white',
          icon: 'priority_high',
          message: 'Oops, parece que o serviço está indisponível!',
          position: 'top-right',
          timeout: 3000,
        });
      });
  },
};

export default actions;
