type Schedule = {
  id: string;
  schedule: Date;
  psychologist_id: string;
  expired: boolean;
  available: boolean;
  created_at: Date;
  updated_at: Date;
};

export interface ScheduleStateInterface {
  createdID: string;
  schedules: Schedule[];
  openedSchedule: Schedule;
}

function state(): ScheduleStateInterface {
  return {
    createdID: '',
    schedules: [],
    openedSchedule: {} as Schedule,
  };
}

export default state;
