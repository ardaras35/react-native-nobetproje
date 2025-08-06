import { StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const AddTeacherModalStyle = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  addModal: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: height * 0.8,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },

  inputGroup: {
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },

  branchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  branchButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: 80,
    alignItems: 'center',
  },

  selectedBranchButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },

  branchButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  selectedBranchButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  statusGrid: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },

  modalStatusButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
    opacity: 0.8,
  },

  selectedModalStatusButton: {
    opacity: 1,
    borderWidth: 2,
    borderColor: '#333',
  },

  modalStatusButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  addButton: {
    backgroundColor: '#28a745',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
    gap: 8,
  },

  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.5,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  noBranchesText: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
  },
});

export default AddTeacherModalStyle;