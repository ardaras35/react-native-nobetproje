import { StyleSheet } from 'react-native';

const StatusIconStyle = StyleSheet.create({
  // Status ikonu
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e9ecef',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default StatusIconStyle;