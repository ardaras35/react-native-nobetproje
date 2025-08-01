import { StyleSheet } from 'react-native';

const TeacherCardSimpleStyle = StyleSheet.create({
  // Ana kart container
  card: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    minWidth: 160,
  },

  // Öğretmen fotoğrafı
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#e9ecef',
  },

  // Öğretmen adı
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 6,
    numberOfLines: 2,
  },

  // Branş ve diğer bilgiler
  branch: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 3,
    numberOfLines: 1,
  },
});

export default TeacherCardSimpleStyle;