import { useState, useEffect, useMemo } from 'react';
import { 
  generateDailySlots, 
  scheduleConfig, 
  isSchoolOpen, 
  createIstanbulDateTime 
} from '../utils/schedule';

export default function useSchedule(dateString) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date()); 
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const slots = useMemo(() => generateDailySlots(dateString), [dateString]);

  const currentSlot = slots.find(slot => {
    return now >= slot.start && now < slot.end;
  });

  const nextClass = slots.find(slot => {
    return slot.type === 'class' && slot.start > now;
  });

  const nextBreak = slots.find(slot => {
    return slot.type === 'break' && slot.start > now;
  });


  const minutesToNextClass = nextClass ? 
    Math.floor((nextClass.start.getTime() - now.getTime()) / (1000 * 60)) : null;
  
  const minutesToNextBreak = nextBreak ? 
    Math.floor((nextBreak.start.getTime() - now.getTime()) / (1000 * 60)) : null;

  const schoolOpen = isSchoolOpen(now, dateString);

  return {
    now,
    currentSlot,
    minutesToNextClass,
    minutesToNextBreak,
    isSchoolOpen: schoolOpen,
    slots
  };
}