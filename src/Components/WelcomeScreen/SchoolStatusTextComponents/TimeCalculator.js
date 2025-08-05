const TimeCalculator = {
  getTimeUntilSchoolOpens: (now) => {
    const today9AM = new Date(now);
    today9AM.setHours(9, 0, 0, 0);
    
    const diffMs = today9AM.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return { hours: diffHours, minutes: diffMinutes };
  }
};

export default TimeCalculator;