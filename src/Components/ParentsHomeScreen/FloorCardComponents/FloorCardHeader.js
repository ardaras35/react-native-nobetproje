import { Text } from 'react-native';

const FloorCardHeader = ({ floorNumber, styles }) => {
  return (
    <Text style={styles.floorTitle}>{floorNumber}. Kat</Text>
  );
};

export default FloorCardHeader;