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

    api
      .get('/api/appointment', headers)
      .then((response) => {
        context.commit('clearAppointments');
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
  fetchPatAppointments(context) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .get('/api/appointment/mine', headers)
      .then((response) => {
        context.commit('clearAppointments');
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
  fetchCanceledAppointments(context) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .get('/api/appointment/inactive', headers)
      .then((response) => {
        context.commit('clearCanceledOnes');
        context.commit('fillCanceledOnes', response.data);
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
  fetchFinishedAppointments(context) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .get('/api/appointment/finished', headers)
      .then((response) => {
        context.commit('clearFinishedOnes');
        context.commit('fillFinishedOnes', response.data);
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
        context.dispatch('fetchCanceledAppointments');
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
  finishAppointment(context, appointmentID) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .patch(`/api/appointment/${appointmentID}/finish`, null, headers)
      .then(() => {
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Consulta finalizada com sucesso!',
          position: 'top-right',
          timeout: 3000,
        });
        context.dispatch('fetchAppointments');
        context.dispatch('fetchFinishedAppointments');
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
