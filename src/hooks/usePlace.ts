import { useAtom } from 'jotai';
import { useState, useCallback } from 'react';
import { BUSINESS_PROFILE_URL } from '../constants/api';
import { PageProfile } from '../types/place';
import { profileDataAtom } from '../stores/profileStore';

export const usePlace = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [, setProfileData] = useAtom(profileDataAtom);

  const fetchProfileData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(BUSINESS_PROFILE_URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data: PageProfile = await response.json();
      setProfileData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  }, [setProfileData]);

  return { loading, error, fetchProfileData };
};
