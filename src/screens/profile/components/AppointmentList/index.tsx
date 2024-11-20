import React, { useCallback } from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Appointment, AppointmentListProps, AppointmentStatus } from './types.ts';
import stylesheet from './styles.ts';
import { Text } from '../../../../components';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.65;
const CARD_MARGIN = 8;

export const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => {
  const { styles } = useStyles(stylesheet);
  const StatusBadge = useCallback(
    ({ status }: { status: Appointment['status'] }) => (
      <View
        style={[styles.badge, status === AppointmentStatus.CONFIRMED ? styles.confirmedBadge : styles.completedBadge]}
      >
        <Text
          variant="Body4"
          style={status === AppointmentStatus.CONFIRMED ? styles.confirmedText : styles.completedText}
        >
          {status}
        </Text>
      </View>
    ),
    [styles.badge, styles.completedBadge, styles.completedText, styles.confirmedBadge, styles.confirmedText],
  );

  const AppointmentCard = useCallback(
    ({ appointment }: { appointment: Appointment }) => (
      <View style={styles.appointmentCard}>
        <StatusBadge status={appointment.status} />
        <Text variant="Body3" style={styles.serviceName}>
          {appointment.service}
        </Text>
        <Text variant="Body5">
          {appointment.date} - {appointment.time}
        </Text>
      </View>
    ),
    [StatusBadge, styles.appointmentCard, styles.serviceName],
  );

  const renderItem = ({ item }: { item: Appointment }) => <AppointmentCard appointment={item} />;

  return (
    <View>
      <Text variant="H3" style={styles.title}>
        Ultimele programări
      </Text>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
        decelerationRate="fast"
        snapToAlignment="center"
      />
    </View>
  );
};

export default AppointmentList;
