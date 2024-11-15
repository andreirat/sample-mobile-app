import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, RootStackScreens } from '../../types/navigation';
import { usePlace } from '../../hooks/usePlace';
import { Header, HeaderSlider, Icon, SectionList, Text } from '../../components';
import stylesheet from './styles';
import ReviewsSection from './components/ReviewsSection';

const tabs = ['Servicii', 'Specialiști', 'Recenzii', 'Produse', 'Contact'];

const Profile: React.FC<NativeStackScreenProps<RootStackParamList, RootStackScreens.Profile>> = ({
  route,
  navigation,
}) => {
  const { styles } = useStyles(stylesheet);
  const [selectedTab, setSelectedTab] = useState('Recenzii');

  const { profileData, fetchProfileData, loading, error } = usePlace();
  const slug = route.params.slug;

  const handleBackPress = useCallback(() => navigation.goBack(), []);

  const handleTabSelect = useCallback((tab: string) => {
    setSelectedTab(tab);
  }, []);

  useEffect(() => {
    if (slug) {
      fetchProfileData(slug);
    }
  }, [fetchProfileData, slug]);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderSlider images={profileData?.carouselImages} />
      <Header onBackPress={handleBackPress} onLikePress={() => {}} onSharePress={() => {}} />
      <View style={styles.profileInfo}>
        <View style={styles.info}>
          <Text variant="H3">{profileData.name}</Text>
          <View style={styles.ratingInfo}>
            <Icon name="Star" size={15} />
            <Text variant="Body" style={styles.totalRating}>
              {profileData.totalRating}
            </Text>
            <Text variant="Body" style={styles.reviewsNumber}>{`(${profileData.reviews.length} evaluari)`}</Text>
          </View>
          <Text style={styles.address} variant="Body">
            {profileData.location.address}
          </Text>
        </View>
        <View>
          <Image source={{ uri: profileData.profilePicture }} style={styles.profileImage} />
        </View>
      </View>
      <View>
        <SectionList tabs={tabs} selectedTab={selectedTab} onTabSelect={handleTabSelect} />
      </View>
      {selectedTab === 'Recenzii' && (
        <ReviewsSection
          totalRating={profileData.totalRating}
          reviewsCount={profileData.reviews.length}
          reviews={profileData.reviews}
        />
      )}
    </ScrollView>
  );
};

export default Profile;
