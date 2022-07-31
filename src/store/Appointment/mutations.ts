import { MutationTree } from 'vuex';
import { AppointmentStateInterface } from './state';

const mutation: MutationTree<AppointmentStateInterface> = {
  setCreatedID(state: AppointmentStateInterface, data) {
    state.createdID = data;
  },
};

export default mutation;
