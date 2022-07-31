import { date } from 'quasar';
import { MutationTree } from 'vuex';
import { Schedule, ScheduleStateInterface } from './state';

const mutation: MutationTree<ScheduleStateInterface> = {
  fillSchedules(state: ScheduleStateInterface, data) {
    state.schedules = [
      ...data.map((schedule: Schedule) => {
        return {
          id: schedule.id,
          schedule: schedule.schedule,
          psychologist_id: schedule.psychologist_id,
          expired: schedule.expired,
          available: schedule.available,
          created_at: date.formatDate(schedule.created_at, 'DD/MM/YYYY HH:mm'),
          updated_at: date.formatDate(schedule.updated_at, 'DD/MM/YYYY HH:mm'),
        };
      }),
    ];
  },
  fillSelectable(state: ScheduleStateInterface, data) {
    state.selectable = [
      ...data.map((schedule: Schedule) => {
        return {
          value: schedule.id,
          label: schedule.schedule,
        };
      }),
    ];
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
    state.openedSchedule.id = data.id;
    state.openedSchedule.schedule = data.schedule;
    state.openedSchedule.psychologist_id = data.psychologist_id;
    state.openedSchedule.expired = data.expired;
    state.openedSchedule.available = data.available;
    state.openedSchedule.created_at = data.created_at;
    state.openedSchedule.updated_at = data.updated_at;
  },
};

export default mutation;
