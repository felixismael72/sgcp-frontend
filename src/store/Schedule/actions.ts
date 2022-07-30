import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { getAuthorizationHeader } from '../utils';
import { ScheduleStateInterface } from './state';

const actions: ActionTree<ScheduleStateInterface, StateInterface> = {
  fetchSchedules(context) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .get('/api/schedule', headers)
      .then((response) => {
        context.commit('fillSchedules', response.data);
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
  fetchScheduleByID(context, scheduleID) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .get(`/api/schedule/${scheduleID}`, headers)
      .then((response) => {
        context.commit('fillOpenedSchedule', response.data);
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
  createSchedule(context, scheduleBody) {
    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .post('/api/schedule/new', scheduleBody, headers)
      .then((response) => {
        context.commit('setScheduleID', response.data.id);
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Horário registrado com sucesso!',
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
  editSchedule(context, scheduleBody) {
    const id = context.state.openedSchedule.id;

    const token = context.rootGetters['user/getToken'];
    const headers = getAuthorizationHeader(token);

    api
      .put(`/api/schedule/${id}/edit`, scheduleBody, headers)
      .then(() => {
        context.dispatch('fetchSchedules');
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Horário atualizado com sucesso!',
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
  removeSchedule(context) {
    const id = context.state.openedSchedule.id;

    const token = context.rootState.user.token;
    const headers = getAuthorizationHeader(token);

    api
      .delete(`/api/schedule/${id}/remove`, headers)
      .then(() => {
        context.dispatch('fetchSchedules');
        Notify.create({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'Horário removido com sucesso!',
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
