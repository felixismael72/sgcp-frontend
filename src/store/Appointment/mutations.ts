import { MutationTree } from 'vuex';
import { AppointmentStateInterface } from './state';

const mutation: MutationTree<AppointmentStateInterface> = {
  fillAppointments(state: AppointmentStateInterface, data) {
    state.appointments = [...data];
  },
  setCreatedID(state: AppointmentStateInterface, data) {
    state.createdID = data;
  },
};

export default mutation;
