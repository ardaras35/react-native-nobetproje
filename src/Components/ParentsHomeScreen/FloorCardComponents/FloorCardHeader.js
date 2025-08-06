import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const FloorCardHeader = ({ floorNumber, styles }) => {
  return (
    <Text style={styles.floorTitle}>{floorNumber}. Kat</Text>
  );
};

export default FloorCardHeader;