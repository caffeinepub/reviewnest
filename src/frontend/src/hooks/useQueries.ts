import { useQuery } from "@tanstack/react-query";
import type { Review } from "../backend.d";
import { useActor } from "./useActor";

export function useGetFeaturedReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["featured-reviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeaturedReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetReviewsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["reviews-by-category", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getReviewsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export type { Review };
