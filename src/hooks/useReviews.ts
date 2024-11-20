import { useState, useCallback } from 'react';
import { PageReviews, PublicFeedbackDetails } from '../types/place.ts';
import { useAtom } from 'jotai/index';
import { addReviewAtom, reviewsAtom } from '../stores/reviewsStore.ts';

export const useReviews = (pageId?: string, initialLimit: number = 5) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string>();
  const [, setReviews] = useAtom(reviewsAtom);
  const [, addReview] = useAtom(addReviewAtom);

  const fetchReviews = useCallback(
    async (cursor: string | null = null, isLoadMore: boolean = false) => {
      setError(null);
      if (isLoadMore) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(!cursor);
        setIsRefetching(!!cursor);
      }

      try {
        // Build URL with query parameters
        const url = new URL(`https://mero.ro/api/v2.0/mp/pages/${pageId}/reviews`);
        url.searchParams.append('limit', initialLimit.toString());
        if (cursor) {
          url.searchParams.append('page', cursor);
        }

        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data, next }: PageReviews = await response.json();

        if (isLoadMore) {
          setReviews(prev => [...prev, ...data]);
        } else {
          setReviews(data);
        }
        setNextPage(next);
      } catch (err: unknown) {
        setError((err as Error).message || 'An error occurred');
      } finally {
        setIsLoading(false);
        setIsRefetching(false);
        setIsLoadingMore(false);
      }
    },
    [initialLimit, pageId, setReviews],
  );

  const refetch = useCallback(() => {
    fetchReviews(null);
  }, [fetchReviews]);

  const loadMore = useCallback(() => {
    if (nextPage) {
      fetchReviews(nextPage, true);
    }
  }, [fetchReviews, nextPage]);

  const addNewReview = useCallback(
    async (review: PublicFeedbackDetails) => {
      addReview(review);
    },
    [addReview],
  );

  return {
    isLoading,
    isRefetching,
    isLoadingMore,
    error,
    refetch,
    loadMore,
    addNewReview,
    hasMore: !!nextPage,
  };
};
