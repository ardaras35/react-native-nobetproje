export const scheduleConfig = {
  startTime: "09:00",     
  classDuration: 40,      
  breakDuration: 10,       
  lunchStart: "12:20",     
  lunchEnd: "13:20",       
  endTime: "16:30",        
  timezone: "Europe/Istanbul"
};


export function utcToIstanbul(utcDate) {

  return new Date(utcDate.toLocaleString("en-US", {timeZone: "Europe/Istanbul"}));
}

export function createIstanbulDateTime(dateString, timeString) {
  const [year, month, day] = dateString.split('-').map(Number);
  const [hour, minute] = timeString.split(':').map(Number);
  
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

export function generateDailySlots(dateString) {
  const slots = [];
  
  let current = createIstanbulDateTime(dateString, scheduleConfig.startTime);
  const lunchStart = createIstanbulDateTime(dateString, scheduleConfig.lunchStart);
  const lunchEnd = createIstanbulDateTime(dateString, scheduleConfig.lunchEnd);
  const schoolEnd = createIstanbulDateTime(dateString, scheduleConfig.endTime);

  while (current < lunchStart) {
    
    const classEnd = new Date(current.getTime() + scheduleConfig.classDuration * 60000);
    if (classEnd <= lunchStart) {
      slots.push({
        type: "class",
        start: new Date(current),
        end: classEnd
      });
      current = classEnd;

      if (current < lunchStart) {
        const breakEnd = new Date(current.getTime() + scheduleConfig.breakDuration * 60000);
        if (breakEnd <= lunchStart) {
          slots.push({
            type: "break",
            start: new Date(current),
            end: breakEnd
          });
          current = breakEnd;
        } else {
          break; 
        }
      }
    } else {
      break;
    }
  }

  slots.push({
    type: "lunch",
    start: lunchStart,
    end: lunchEnd
  });

  current = lunchEnd;
  while (current < schoolEnd) {

    const classEnd = new Date(current.getTime() + scheduleConfig.classDuration * 60000);
    if (classEnd <= schoolEnd) {
      slots.push({
        type: "class",
        start: new Date(current),
        end: classEnd
      });
      current = classEnd;

      if (current < schoolEnd) {
        const breakEnd = new Date(current.getTime() + scheduleConfig.breakDuration * 60000);
        if (breakEnd <= schoolEnd) {
          slots.push({
            type: "break",
            start: new Date(current),
            end: breakEnd
          });
          current = breakEnd;
        } else {
          break; 
        }
      }
    } else {
      break;
    }
  }

  return slots;
}

export function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function isSchoolOpen(currentTime, dateString) {

  if (isWeekend(currentTime)) {
    return false;
  }

  const schoolStart = createIstanbulDateTime(dateString, scheduleConfig.startTime);
  const schoolEnd = createIstanbulDateTime(dateString, scheduleConfig.endTime);
  
  return currentTime >= schoolStart && currentTime < schoolEnd;
}

export function getCurrentDateString() {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}