import type { ScheduleBlock } from '@/types'

export const scheduleBlocks: ScheduleBlock[] = [
  {
    id: 1,
    name: 'MAÑANA',
    time: '08:00 – 12:00',
    days: 'LUN – VIE',
    barWidth: '45%',
    icon: 'sun',
  },
  {
    id: 2,
    name: 'TARDE',
    time: '12:00 – 18:00',
    days: 'LUN – VIE',
    barWidth: '70%',
    icon: 'sunset',
  },
  {
    id: 3,
    name: 'NOCHE',
    time: '18:00 – 21:30',
    days: 'LUN – VIE',
    barWidth: '85%',
    icon: 'moon',
  },
  {
    id: 4,
    name: 'SÁBADOS',
    time: '10:00 – 17:00',
    days: 'SÁB',
    barWidth: '55%',
    icon: 'star',
  },
]
