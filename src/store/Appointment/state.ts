export type Appointment = {
  schedule_id: string;
};

export interface AppointmentStateInterface {
  createdID: string;
}

function state(): AppointmentStateInterface {
  return {
    createdID: '',
  };
}

export default state;
