import SchoolClosedMessage from './SchoolClosedMessage';
import SchoolOpenMessage from './SchoolOpenMessage';

const StatusTextGenerator = {
  generateText: (now, isSchoolOpen, currentSlot, minutesToNextClass, minutesToNextBreak) => {
    if (!isSchoolOpen) {
      return SchoolClosedMessage.getMessage(now);
    }
    
    return SchoolOpenMessage.getMessage(currentSlot, minutesToNextClass, minutesToNextBreak);
  }
};

export default StatusTextGenerator;