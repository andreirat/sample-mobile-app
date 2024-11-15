import { useState, useCallback } from 'react';
import { PlaceProfile } from '../types/place';

// const PLACE_PROFILE_URL = (slug: string) => `https://simple-app-acim.onrender.com/place/${slug}`;
const PLACE_PROFILE_URL = (slug: string) => `http://localhost:3000/place/${slug}`;
const PLACES_LIST_URL = `http://localhost:3000/place/places`;
export const usePlace = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingPlaces, setLoadingPlaces] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<PlaceProfile>();
  const [placesList, setPlacesList] = useState<PlaceProfile[]>();

  const fetchProfileData = useCallback(async (slug: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(PLACE_PROFILE_URL(slug));
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setProfileData(data);
      setLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPlaces = useCallback(async () => {
    try {
      setLoadingPlaces(true);
      const response = await fetch(PLACES_LIST_URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setPlacesList(data);
      setLoadingPlaces(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoadingPlaces(false);
    }
  }, []);

  return { loading, error, profileData, fetchProfileData, fetchPlaces, loadingPlaces, placesList };
};
