import { StyleSheet } from 'react-native';

const SchoolStatusTextStyle = StyleSheet.create({
  // Ana status text
  text: {
    fontSize: 16,
    color: '#495057',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default SchoolStatusTextStyle;