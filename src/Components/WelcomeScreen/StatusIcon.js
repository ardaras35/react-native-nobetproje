// Okulun açık veya kapalı olduğunu temsil eden simgeyi gösterir.  Welcome Screen için.

import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 140,
    height: 140,
    marginBottom: 140,
  },
});

const StatusIcon = ({ isSchoolOpen }) => {
  const iconSource = isSchoolOpen
    ? require('../../assets/okulon.png')
    : require('../../assets/okuloff.png');

  return <Image source={iconSource} style={styles.icon} />;
};

export default StatusIcon;
