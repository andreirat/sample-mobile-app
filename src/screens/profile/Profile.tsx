import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, TouchableOpacity, ScrollView, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, RootStackScreens } from '../../types/navigation';
import { Header, HeaderSlider, Icon, SectionList, Text } from '../../components';
import ReviewsSection from './components/ReviewsSection';
import ProfileInfo from './components/ProfileInfo';
import AppointmentList from './components/AppointmentList';
import { APPOINTMENTS } from './mockedServices';
import { usePlace } from '../../hooks/usePlace';
import stylesheet from './styles';
import { useReviews } from '../../hooks/useReviews.ts';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import favoritesStore, { Business } from '../../hooks/useStore';
import { useAtom } from 'jotai';
import { profileDataAtom } from '../../stores/profileStore.ts';
import { reviewsAtom } from '../../stores/reviewsStore.ts';

const tabs = ['Servicii', 'Specialiști', 'Recenzii', 'Produse', 'Contact'];
const STAR_LABELS = ['Oribil', 'Slab', 'Bine', 'Foarte bine', 'Excelent'];

const Profile: React.FC<NativeStackScreenProps<RootStackParamList, RootStackScreens.Profile>> = ({ navigation }) => {
  const { styles, theme } = useStyles(stylesheet);
  const [selectedTab, setSelectedTab] = useState('Recenzii');
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { fetchProfileData, loading, error } = usePlace();
  const [profileData] = useAtom(profileDataAtom);
  const { refetch } = useReviews(profileData?._id);
  const [, addFavorite] = useAtom(favoritesStore.addFavoriteAtom);
  const [, removeFavorite] = useAtom(favoritesStore.removeFavoriteAtom);
  const [isFavorite] = useAtom(favoritesStore.isFavoriteAtom);
  const [reviews] = useAtom(reviewsAtom);

  const toggleFavorite = (business: Business) => {
    if (isFavorite(business.id)) {
      removeFavorite(business.id);
    } else {
      addFavorite(business);
    }
  };
  const handleBackPress = useCallback(() => navigation.goBack(), [navigation]);

  const handleSeeMoreReviewsPress = useCallback(() => navigation.navigate(RootStackScreens.Reviews), []);

  const handleTabSelect = useCallback((tab: string) => {
    setSelectedTab(tab);
  }, []);

  const handleAddReview = () => {
    bottomSheetRef.current?.expand();
  };

  const handleAddReviewClose = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  useEffect(() => {
    if (profileData?._id) {
      refetch();
    }
  }, [profileData?._id, refetch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text variant="Body">Loading profile...</Text>
      </View>
    );
  }

  if (!profileData) {
    return (
      <View style={styles.loadingContainer}>
        <Text variant="Body">Failed to load profile: {error}</Text>
      </View>
    );
  }

  const handleStarPress = (score: number) => {
    bottomSheetRef.current?.close();
    navigation.navigate(RootStackScreens.AddReview, { initialScore: score });
  };

  const renderStars = () => (
    <View style={styles.starsContainer}>
      {STAR_LABELS.map((label, index) => {
        const score = index + 1;

        return (
          <TouchableOpacity key={label} onPress={() => handleStarPress(score)} style={styles.starButton}>
            <Icon name="EmptyFeedbackStar" size={43} />
            <Text variant="Body4" style={styles.starLabel}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      bounces={false}
      contentContainerStyle={styles.container}
    >
      <HeaderSlider images={profileData?.images} />
      <Header
        isFavorite={isFavorite(profileData?._id)}
        onBackPress={handleBackPress}
        onLikePress={() => toggleFavorite({ id: profileData?._id })}
        onSharePress={() => {}}
      />
      <View style={styles.infoContainer}>
        <ProfileInfo
          name={profileData.name}
          feedbackScore={profileData.feedback.score.toFixed(2)}
          feedbackCount={profileData.feedback.total}
          address={profileData.location.address}
          profileImage={profileData.profilePhoto.thumbnail}
        />
        <AppointmentList appointments={APPOINTMENTS} />
        <SectionList tabs={tabs} selectedTab={selectedTab} onTabSelect={handleTabSelect} />
      </View>
      {selectedTab === 'Recenzii' && (
        <>
          <ReviewsSection
            reviews={reviews.length > 3 ? reviews.slice(0, 3) : reviews}
            totalRating={profileData.feedback.score.toFixed(1)}
            reviewsCount={profileData.feedback.total}
          />
          <View style={styles.footer}>
            {reviews.length > 3 && (
              <Pressable style={styles.seeMoreReviewsButton} onPress={handleSeeMoreReviewsPress}>
                <Text color={theme.colors.primary} style={styles.footerText} variant="Body3">
                  Vezi mai multe recenzii
                </Text>
              </Pressable>
            )}
            <Pressable onPress={handleAddReview}>
              <Text color={theme.colors.primary} style={styles.footerText} variant="Body3">
                Adaugă recenzie
              </Text>
            </Pressable>
          </View>
        </>
      )}
      <BottomSheet
        handleComponent={() => <></>}
        ref={bottomSheetRef}
        enablePanDownToClose
        index={-1}
        onClose={handleAddReviewClose}
        enableDynamicSizing
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.4} />
        )}
      >
        <BottomSheetView style={styles.sheetContainer}>
          <Text variant="Body6" style={styles.initialTitle}>
            Evaluează serviciile oferite de Robert de la {profileData.name}
          </Text>
          <Text variant="Body3" style={styles.initialSubtitle}>
            Click pe o stea pentru a evalua
          </Text>
          {renderStars()}
          <View style={styles.sheetFooter}>
            <Pressable onPress={handleAddReviewClose}>
              <Text color={theme.colors.secondary} variant="Body2" style={styles.sheetFooterText}>
                Mai târziu
              </Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </ScrollView>
  );
};

export default Profile;
