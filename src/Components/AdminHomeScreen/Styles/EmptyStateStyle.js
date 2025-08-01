import { StyleSheet } from 'react-native';

const EmptyStateStyle = StyleSheet.create({
  // Ana empty state container
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 60,
    backgroundColor: '#fafafa',
  },

  // Ana mesaj texti
  emptyStateText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },

  // Alt açıklama texti
  emptyStateSubtext: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
});

export default EmptyStateStyle;