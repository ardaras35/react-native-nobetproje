import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  statsModal: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: height * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  summaryCard: {
    backgroundColor: '#f8f9ff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },

  totalCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },

  statsCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },

  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },

  statLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  statNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },

  statPercent: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },

  floorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  floorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  floorLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginLeft: 8,
  },

  floorCount: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  floorNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  floorMax: {
    fontSize: 14,
    color: '#666',
    marginLeft: 2,
  },

  quickInfo: {
    backgroundColor: '#f8f9fa',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#28a745',
  },

  quickInfoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  quickInfoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
});