export type Appointment = {
  id: string;
  patient_id: string;
  patient_name: string;
  schedule_id: string;
  schedule: string;
  is_canceled: boolean;
};

export interface AppointmentStateInterface {
  appointments: Appointment[];
  canceledAppointments: Appointment[];
  finishedAppointments: Appointment[];
  createdID: string;
}

function state(): AppointmentStateInterface {
  return {
    appointments: [],
    canceledAppointments: [],
    finishedAppointments: [],
    createdID: '',
  };
}

export default state;
