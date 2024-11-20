import { AppointmentStatus } from './components/AppointmentList/types.ts';

export const APPOINTMENTS = [
  {
    status: AppointmentStatus.CONFIRMED,
    service: 'Tuns + spălat',
    date: 'Du. 8 dec.',
    time: '13:30',
  },
  {
    status: AppointmentStatus.FINALIZED,
    service: 'Tuns VIP',
    date: 'Sâ. 7 iun.',
    time: '09:30',
  },
  {
    status: AppointmentStatus.FINALIZED,
    service: 'Tuns simplu',
    date: 'Lu. 7 Mai.',
    time: '12:30',
  },
];
