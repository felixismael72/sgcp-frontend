import { MutationTree } from 'vuex';
import { AppointmentStateInterface } from './state';

const mutation: MutationTree<AppointmentStateInterface> = {
  fillAppointments(state: AppointmentStateInterface, data) {
    state.appointments = [...data];
  },
  fillCanceledOnes(state: AppointmentStateInterface, data) {
    state.canceledAppointments = [...data];
  },
  fillFinishedOnes(state: AppointmentStateInterface, data) {
    state.finishedAppointments = [...data];
  },
  clearAppointments(state: AppointmentStateInterface) {
    state.appointments = [];
  },
  clearCanceledOnes(state: AppointmentStateInterface) {
    state.canceledAppointments = [];
  },
  clearFinishedOnes(state: AppointmentStateInterface) {
    state.finishedAppointments = [];
  },
  setCreatedID(state: AppointmentStateInterface, data) {
    state.createdID = data;
  },
};

export default mutation;
