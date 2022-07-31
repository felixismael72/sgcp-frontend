export type Schedule = {
  id: string;
  schedule: string;
  psychologist_id: string;
  expired: boolean;
  available: boolean;
  created_at: string;
  updated_at: string;
};

type SelectableSchedule = {
  value: string;
  label: Date;
};

export interface ScheduleStateInterface {
  createdID: string;
  schedules: Schedule[];
  selectable: SelectableSchedule[];
  openedSchedule: Schedule;
}

function state(): ScheduleStateInterface {
  return {
    createdID: '',
    schedules: [],
    selectable: [],
    openedSchedule: {} as Schedule,
  };
}

export default state;
