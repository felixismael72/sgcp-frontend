import { MutationTree } from 'vuex';
import { ScheduleStateInterface } from './state';

const mutation: MutationTree<ScheduleStateInterface> = {
  fillSchedules(state: ScheduleStateInterface, data) {
    state.schedules = [...data];
  },
  setScheduleID(state: ScheduleStateInterface, createdID) {
    state.createdID = createdID;
  },
  setSchedule(state: ScheduleStateInterface, schedule) {
    state.openedSchedule.schedule = schedule;
  },
  setAvailability(state: ScheduleStateInterface, available) {
    state.openedSchedule.available = available;
    state.openedSchedule.expired = !available;
  },
  fillOpenedSchedule(state: ScheduleStateInterface, data) {
    state.openedSchedule = data;
  },
};

export default mutation;
