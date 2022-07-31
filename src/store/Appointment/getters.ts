import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AppointmentStateInterface } from './state';

const getters: GetterTree<AppointmentStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
