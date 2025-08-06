import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const TeacherCardStyle = StyleSheet.create({
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

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#e9ecef',
  },

  teacherDetails: {
    flex: 1,
  },

  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },

  teacherBranch: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  statusText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  floorBadge: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },

  floorText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },

  actionSection: {
    gap: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  statusButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },

  statusButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    opacity: 0.8,
  },

  activeStatusButton: {
    opacity: 1,
    borderWidth: 2,
    borderColor: '#333',
  },

  statusButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  floorButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

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

  activeFloorButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },

  disabledButton: {
    backgroundColor: '#f0f0f0',
    borderColor: '#d6d6d6',
    opacity: 0.5,
  },

  floorButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },

  activeFloorButtonText: {
    color: '#fff',
  },

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

  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TeacherCardStyle;