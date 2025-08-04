import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SharedTeacherModalStyle = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  content: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: width * 0.9,
    maxWidth: 380,
    maxHeight: '80%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    padding: 5,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#e9ecef',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 6,
  },

  branch: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },

  statusText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },

  detail: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 6,
    lineHeight: 22,
  },

  adminControls: {
    width: '100%',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

  statusButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
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
    fontSize: 12,
    fontWeight: '600',
  },

  floorButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
    justifyContent: 'center',
  },

  floorButton: {
    backgroundColor: '#f8f9fa',
    width: 45,
    height: 35,
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
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },

  activeFloorButtonText: {
    color: '#fff',
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 12,
    width: '100%',
  },

  callButton: {
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    elevation: 2,
    shadowColor: '#28a745',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  callButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: '#dc3545',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    elevation: 2,
    shadowColor: '#dc3545',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SharedTeacherModalStyle;