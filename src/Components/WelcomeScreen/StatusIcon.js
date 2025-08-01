// Okulun açık veya kapalı olduğunu temsil eden simgeyi gösterir.  Welcome Screen için.

import { Image } from 'react-native';
import styles from './Styles/StatusIcon';

const StatusIcon = ({ isSchoolOpen }) => {
  const iconSource = isSchoolOpen
    ? require('../../../assets/okulon.png')
    : require('../../../assets/okuloff.png');

  return <Image source={iconSource} style={styles.icon} />;
};

export default StatusIcon;
