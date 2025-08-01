import { StyleSheet } from 'react-native';

const TeacherCardStyle = StyleSheet.create({
  // Ana kart container
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 20,
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
  },

  // Kart üst bölümü (header)
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  // Öğretmen bilgileri container
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  // Avatar resmi
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#e9ecef',
  },

  // Öğretmen detayları container
  teacherDetails: {
    flex: 1,
  },

  // Öğretmen adı
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },

  // Öğretmen branşı
  teacherBranch: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  // Status badge container
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Status dot
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  // Status text
  statusText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  // Kat badge
  floorBadge: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

  // Kat text
  floorText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },

  // Action section container
  actionSection: {
    gap: 15,
  },

  // Section başlıkları
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  // Status butonları container
  statusButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },

  // Status button
  statusButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    opacity: 0.8,
  },

  // Active status button
  activeStatusButton: {
    opacity: 1,
    borderWidth: 2,
    borderColor: '#333',
  },

  // Status button text
  statusButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  // Floor butonları container
  floorButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  // Floor button
  floorButton: {
    backgroundColor: '#f8f9fa',
    width: 50,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

  // Active floor button
  activeFloorButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },

  // Disabled floor button
  disabledButton: {
    backgroundColor: '#f0f0f0',
    borderColor: '#d6d6d6',
    opacity: 0.5,
  },

  // Floor button text
  floorButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },

  // Active floor button text
  activeFloorButtonText: {
    color: '#fff',
  },

  // Delete button
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    marginTop: 5,
  },

  // Delete button text
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TeacherCardStyle;