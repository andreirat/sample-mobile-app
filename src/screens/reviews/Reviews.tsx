import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, Pressable } from 'react-native';
import { useReviews } from '../../hooks/useReviews.ts';
import { Icon, ReviewCard, Text } from '../../components';
import { PublicFeedbackDetails } from '../../types/place.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackScreens } from '../../types/navigation.ts';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import { useAtom } from 'jotai/index';
import { profileDataAtom } from '../../stores/profileStore.ts';
import { reviewsAtom } from '../../stores/reviewsStore.ts';

const Reviews: React.FC<NativeStackScreenProps<RootStackParamList, RootStackScreens.Reviews>> = ({ navigation }) => {
  const [profileData] = useAtom(profileDataAtom);
  const { styles } = useStyles(stylesheet);
  const { isLoading, isRefetching, isLoadingMore, refetch, loadMore, hasMore } = useReviews(profileData?._id);
  const [reviews] = useAtom(reviewsAtom);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate(RootStackScreens.Profile)}>
          <Icon name="Close" size={32} />
        </Pressable>
      ),
      headerTitle: 'One Barber Shop',
      headerBackVisible: false,
    });
  }, [navigation]);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text variant="H2" style={styles.sectionTitle}>
        Recenzii și evaluări
      </Text>
      <View style={styles.ratingContainer}>
        <Text variant="H1" style={styles.ratingNumber}>
          {profileData?.feedback.score.toFixed(1)}
        </Text>
        <Text variant="Body5" style={styles.reviewCount}>
          {profileData?.feedback.total} evaluări
        </Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (!isLoadingMore) {
      return null;
    }
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const renderItem = ({ item }: { item: PublicFeedbackDetails }) => (
    <ReviewCard key={`${item._id}-${new Date().toISOString()}`} review={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={hasMore ? loadMore : null}
        onEndReachedThreshold={0.3}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} tintColor="#000" />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Reviews;
