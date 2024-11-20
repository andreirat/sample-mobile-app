export interface Appointment {
  status: AppointmentStatus;
  service: string;
  date: string;
  time: string;
}

export enum AppointmentStatus {
  CONFIRMED = 'CONFIRMAT',
  FINALIZED = 'FINALIZAT',
}

export interface AppointmentListProps {
  appointments: Appointment[];
}
