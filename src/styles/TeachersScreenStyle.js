// TeachersScreen Style bölümü.

import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    zIndex: 99,
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#333333',
  },

  list: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    width: screenWidth * 0.44,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 16,
    marginBottom: 12,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginTop: 8,
  },
  cardBranch: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
  },
  modalImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  modalName: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
  },
  modalBranch: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  modalDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  callButton: {
    width: 100,
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  callButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
  closeButton: {
    width: 100,
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
