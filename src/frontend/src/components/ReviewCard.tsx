import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import type { Review } from "../hooks/useQueries";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

const categoryConfig: Record<
  string,
  { image: string; badgeClass: string; label: string }
> = {
  fashion: {
    image: "/assets/generated/placeholder-fashion.dim_400x300.jpg",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    label: "Fashion",
  },
  electronics: {
    image: "/assets/generated/placeholder-electronics.dim_400x300.jpg",
    badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
    label: "Electronics",
  },
  beauty: {
    image: "/assets/generated/placeholder-beauty.dim_400x300.jpg",
    badgeClass: "bg-rose-100 text-rose-700 border-rose-200",
    label: "Beauty",
  },
};

const STARS = [1, 2, 3, 4, 5];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {STARS.map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= full
                ? "text-star fill-current"
                : star === full + 1 && hasHalf
                  ? "text-star fill-current opacity-50"
                  : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-semibold text-muted-foreground">
        {rating.toFixed(1)}
        <span className="font-normal">/5</span>
      </span>
    </div>
  );
}

const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"];
export { SKELETON_KEYS };

export default function ReviewCard({ review, index = 1 }: ReviewCardProps) {
  const cat =
    categoryConfig[review.category.toLowerCase()] ?? categoryConfig.fashion;
  const ratingNum = Number(review.rating) / 10;
  const displayRating = ratingNum > 5 ? ratingNum / 10 : ratingNum;

  return (
    <Card
      data-ocid={`review.item.${index}`}
      className="group overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={cat.image}
          alt={review.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cat.badgeClass}`}
          >
            {cat.label}
          </span>
        </div>
        {review.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-primary-foreground text-xs">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="flex-1 p-5">
        {/* Rating */}
        <StarRating rating={displayRating} />

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-foreground mt-2 mb-2 leading-snug line-clamp-2">
          {review.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {review.description}
        </p>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        <a
          href={review.ctaUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          data-ocid="review.cta.button"
          className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 hover:bg-primary/90 transition-colors shadow-sm"
        >
          {review.ctaLabel || "Check Price"}
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  );
}
