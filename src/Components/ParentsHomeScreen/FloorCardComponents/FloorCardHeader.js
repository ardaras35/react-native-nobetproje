import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const FloorCardHeader = ({ floorNumber, styles }) => {
  const { t } = useTranslation();

  return (
    <Text style={styles.floorTitle}>{floorNumber}. {t('kat')}</Text>
  );
};

export default FloorCardHeader;