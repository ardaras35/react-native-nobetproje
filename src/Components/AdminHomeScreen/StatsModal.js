import { View, Modal, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './Styles/StatsModalStyle';

import ModalHeader from './StatsModalComponents/ModalHeader';
import SummaryCard from './StatsModalComponents/SummaryCard';
import StatusDistribution from './StatsModalComponents/StatusDistribution';
import FloorDistribution from './StatsModalComponents/FloorDistribution';
import QuickInfo from './StatsModalComponents/QuickInfo';

const StatsModal = ({ visible, onClose, statistics }) => {
  const { t } = useTranslation();
  
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.statsModal}>
          
          <ModalHeader 
            title={t('istatistikler')}
            onClose={onClose}
            styles={styles}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            
            <SummaryCard 
              total={statistics?.total}
              styles={styles}
            />

            <StatusDistribution 
              statistics={statistics}
              styles={styles}
            />

            <FloorDistribution 
              statistics={statistics}
              styles={styles}
            />

            <QuickInfo styles={styles} />

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default StatsModal;