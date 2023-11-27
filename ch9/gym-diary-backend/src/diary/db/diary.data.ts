import { Diaries } from '../interface/diary.interface';

export const diaries: Diaries = [
  {
    id: '1',
    date: new Date().toISOString().split('T')[0],
    exercise: 'Deadlift',
    reps: 15,
    sets: 4,
  },
  {
    id: '2',
    date: new Date().toISOString().split('T')[0],
    exercise: 'Squat',
    reps: 15,
    sets: 6,
  },
  {
    id: '3',
    date: new Date().toISOString().split('T')[0],
    exercise: 'Barbell row',
    reps: 15,
    sets: 6,
  },
  {
    id: '4',
    date: new Date().toISOString().split('T')[0],
    exercise: 'Leg Press',
    reps: 15,
    sets: 2,
  },
];
