import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/SchoolStatusTextStyle';
import StatusTextGenerator from './SchoolStatusTextComponents/StatusTextGenerator';

const SchoolStatusText = ({ 
  now, 
  isSchoolOpen, 
  currentSlot, 
  minutesToNextClass, 
  minutesToNextBreak 
}) => {
  const timerText = StatusTextGenerator.generateText(
    now, 
    isSchoolOpen, 
    currentSlot, 
    minutesToNextClass, 
    minutesToNextBreak
  );

  return <Text style={styles.text}>{timerText}</Text>;
};

export default SchoolStatusText;