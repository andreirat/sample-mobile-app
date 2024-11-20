import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, StatusBar, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackScreens } from '../../types/navigation.ts';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import { Avatar, Icon, Text } from '../../components';
import { PublicFeedbackDetails } from '../../types/place.ts';
import { useReviews } from '../../hooks/useReviews.ts';

const AddReview: React.FC<NativeStackScreenProps<RootStackParamList, RootStackScreens.AddReview>> = ({
  navigation,
  route,
}) => {
  const { styles } = useStyles(stylesheet);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState<number>(route.params.initialScore);
  const { addNewReview } = useReviews();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="Close" size={32} />
        </Pressable>
      ),
      headerTitle: 'Descrie experiența ta',
      headerBackVisible: false,
    });
  }, [navigation]);

  const renderStars = () => {
    return (
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <Pressable key={index} onPress={() => setRating(index + 1)}>
            <Icon size={28} name={index < rating ? 'Star' : 'EmptyFeedbackStar'} />
          </Pressable>
        ))}
      </View>
    );
  };

  const handleSubmitReview = useCallback(() => {
    const reviewData: PublicFeedbackDetails = {
      _id: 'randomId' + new Date().toTimeString(),
      feedback: {
        score: rating,
        review: reviewText,
      },
      user: {
        firstname: 'Andrei',
        lastname: 'Rat',
      },
      isAnonymous: false,
      isOwner: true,
    };
    addNewReview(reviewData).then(() => {
      navigation.navigate(RootStackScreens.Reviews);
    });
  }, [addNewReview, navigation, rating, reviewText]);

  return (
    <ScrollView style={styles.list} contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text variant="Body5" style={styles.date}>
          24 nov. 2024{' '}
          <Text variant="Body5" style={styles.businessName}>
            (Robert - One Barbershop)
          </Text>
        </Text>

        {renderStars()}
        <View style={styles.line} />

        <View style={styles.userInfo}>
          <Avatar size={24} name={'Andrei Rat'} profilePictureUrl={'https://randomuser.me/api/portraits/men/1.jpg'} />
          <Text variant="Body2" style={styles.userName}>
            George D.
          </Text>
        </View>

        <Text variant="H2" style={styles.sectionTitle}>
          Descrie experiența ta
        </Text>
        <Text variant="Body2" style={styles.description}>
          Opinia ta îi ajută la îmbunătățirea calității serviciilor, iar viitorii clienți primesc așteptările corecte.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ajută-i pe alții oferind detalii despre experiența ta..."
          placeholderTextColor="#52577F"
          multiline
          value={reviewText}
          onChangeText={setReviewText}
        />
      </View>

      <Pressable style={styles.submitButton} onPress={handleSubmitReview}>
        <Text variant="Body5" style={styles.submitButtonText}>
          Trimite
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default AddReview;
