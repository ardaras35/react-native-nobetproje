import { StyleSheet } from 'react-native';

const TeacherCardMiniStyle = StyleSheet.create({
  // Mini kart container
  card: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#e9ecef',
    minWidth: 120,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  // Mini avatar
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#dee2e6',
  },

  // Öğretmen adı
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    numberOfLines: 2,
    maxWidth: 90,
  },
});

export default TeacherCardMiniStyle;