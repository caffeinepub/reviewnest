import { Skeleton } from "@/components/ui/skeleton";
import { Cpu, Shirt, Sparkles } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import { useGetReviewsByCategory } from "../hooks/useQueries";
import type { Review } from "../hooks/useQueries";

interface CategoryPageProps {
  category: string;
}

const categoryMeta: Record<
  string,
  {
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    bannerClass: string;
    sampleReviews: Review[];
  }
> = {
  fashion: {
    label: "Fashion",
    description:
      "Elevate your wardrobe with our expert picks. From everyday essentials to statement pieces — reviewed for quality, value, and style.",
    icon: Shirt,
    bannerClass: "from-amber-50 to-background",
    sampleReviews: [
      {
        id: 1n,
        title: "The Everyday Leather Tote That Elevates Any Outfit",
        featured: true,
        description:
          "After testing 14 leather totes over three months, this one stood out for its buttery Italian leather, spacious interior, and understated brass hardware that ages beautifully.",
        ctaUrl: "#",
        category: "fashion",
        rating: 47n,
        ctaLabel: "Check Price",
      },
      {
        id: 2n,
        title: "Allbirds Tree Runner Review: Comfort Meets Sustainability",
        featured: false,
        description:
          "Made from eucalyptus fiber, these sneakers are featherlight, machine-washable, and breathable enough for all-day wear. A rare win for both foot and planet.",
        ctaUrl: "#",
        category: "fashion",
        rating: 45n,
        ctaLabel: "Buy Now",
      },
      {
        id: 3n,
        title: "Uniqlo Ultra Light Down Jacket: The 5-Year Investment",
        featured: false,
        description:
          "Packs into its own pocket, weighs under 300g, and still kept us warm down to 5°C. After five winters of testing, this is still our top budget layering pick.",
        ctaUrl: "#",
        category: "fashion",
        rating: 48n,
        ctaLabel: "Check Price",
      },
      {
        id: 4n,
        title: "Ray-Ban Wayfarer: An Enduring Classic Worth the Price",
        featured: false,
        description:
          "Yes, they cost more than fast-fashion alternatives. But after 2 years of daily use, the polarized lenses are scratch-free and the frame remains perfectly aligned.",
        ctaUrl: "#",
        category: "fashion",
        rating: 44n,
        ctaLabel: "Buy Now",
      },
      {
        id: 5n,
        title: "Lululemon Align Leggings: 18-Month Wear Test Results",
        featured: false,
        description:
          "The nulu fabric lives up to the hype — buttery, opaque even during deep stretches, and holds its shape wash after wash. The $98 price tag is justified by the longevity.",
        ctaUrl: "#",
        category: "fashion",
        rating: 46n,
        ctaLabel: "Check Price",
      },
      {
        id: 6n,
        title: "Cuyana Classic Structured Tote: Quiet Luxury Done Right",
        featured: false,
        description:
          "Full-grain leather, a genuinely helpful divider pocket, and hardware that doesn't scratch. Understated enough for the boardroom and spacious enough for a laptop.",
        ctaUrl: "#",
        category: "fashion",
        rating: 45n,
        ctaLabel: "Buy Now",
      },
    ],
  },
  electronics: {
    label: "Electronics",
    description:
      "In-depth reviews of the latest gadgets, headphones, cameras, and smart home devices. We test spec sheets against real-world performance.",
    icon: Cpu,
    bannerClass: "from-slate-100 to-background",
    sampleReviews: [
      {
        id: 1n,
        title: "Sony WH-1000XM5: The Noise-Cancelling Crown Stays Put",
        featured: true,
        description:
          "Industry-leading noise cancellation meets 30-hour battery life. The new foldable design and improved call quality make these the definitive work-from-anywhere companion.",
        ctaUrl: "#",
        category: "electronics",
        rating: 49n,
        ctaLabel: "Buy Now",
      },
      {
        id: 2n,
        title: "Apple AirPods Pro (2nd Gen): Worth the Upgrade?",
        featured: false,
        description:
          "The H2 chip's transparency mode is genuinely magical — it sounds like you're not wearing anything. ANC is class-leading among true wireless options.",
        ctaUrl: "#",
        category: "electronics",
        rating: 47n,
        ctaLabel: "Check Price",
      },
      {
        id: 3n,
        title: "Kindle Paperwhite (11th Gen): Still the E-Reader to Beat",
        featured: false,
        description:
          "Waterproof, 10-week battery, warm light adjustment, and weeks-long battery. After testing 8 e-readers, this remains our top pick for dedicated readers.",
        ctaUrl: "#",
        category: "electronics",
        rating: 48n,
        ctaLabel: "Buy Now",
      },
      {
        id: 4n,
        title: "Logitech MX Master 3S: The Productivity Mouse Perfected",
        featured: false,
        description:
          "The MagSpeed scroll wheel is still the best input we've used. Near-silent clicks and multi-device switching make this the ideal desk companion.",
        ctaUrl: "#",
        category: "electronics",
        rating: 47n,
        ctaLabel: "Check Price",
      },
      {
        id: 5n,
        title: "Anker 737 Power Bank: Fastest Charging On the Go",
        featured: false,
        description:
          "140W bidirectional charging means this charges your laptop AND recharges itself at speed. The OLED display and sturdy build justify the premium price.",
        ctaUrl: "#",
        category: "electronics",
        rating: 45n,
        ctaLabel: "Buy Now",
      },
      {
        id: 6n,
        title: "Govee Immersion TV Backlights: Ambiance Meets Accuracy",
        featured: false,
        description:
          "Camera-based color matching is a genuine step up from HDMI sync boxes. Setup took 20 minutes and the color accuracy in dark scenes is impressive.",
        ctaUrl: "#",
        category: "electronics",
        rating: 42n,
        ctaLabel: "Check Price",
      },
    ],
  },
  beauty: {
    label: "Beauty",
    description:
      "Science-backed skincare, expert makeup reviews, and fragrance deep-dives. We work with dermatologists to separate marketing claims from real results.",
    icon: Sparkles,
    bannerClass: "from-rose-50 to-background",
    sampleReviews: [
      {
        id: 1n,
        title: "La Mer Crème de la Mer: 60-Day Dermatologist Review",
        featured: true,
        description:
          "Our beauty editor tested this legendary moisturizer for 60 days alongside a dermatologist. The verdict: deeply hydrating, visibly firms skin, worth every penny for dry skin types.",
        ctaUrl: "#",
        category: "beauty",
        rating: 46n,
        ctaLabel: "Check Price",
      },
      {
        id: 2n,
        title: "Drunk Elephant C-Firma Fresh Day Serum",
        featured: false,
        description:
          "15% L-ascorbic acid with ferulic acid — the gold standard Vitamin C formula. We tested against 6 competitors and this delivered the most visible brightening in 4 weeks.",
        ctaUrl: "#",
        category: "beauty",
        rating: 47n,
        ctaLabel: "Buy Now",
      },
      {
        id: 3n,
        title: "Charlotte Tilbury Pillow Talk Lipstick: Cult Status Deserved",
        featured: false,
        description:
          "The rose-pink-nude shade is universally flattering — we tested it on 12 different skin tones. Creamy formula, 6-hour wear, and the packaging is genuinely luxurious.",
        ctaUrl: "#",
        category: "beauty",
        rating: 48n,
        ctaLabel: "Check Price",
      },
      {
        id: 4n,
        title: "Dyson Airwrap: Is the Hype Real After 2 Years?",
        featured: false,
        description:
          "After 2 years of daily testing, the answer is yes — if you have the right hair type. Fine-to-medium hair gets salon results in 20 minutes. Thick hair needs patience.",
        ctaUrl: "#",
        category: "beauty",
        rating: 44n,
        ctaLabel: "Buy Now",
      },
      {
        id: 5n,
        title: "NARS Radiant Creamy Concealer: The 10-Year Icon",
        featured: false,
        description:
          "Still the benchmark for creamy, buildable concealer with 24-hour wear. Available in 30 shades with genuine undertone variation. Nothing in this price range comes close.",
        ctaUrl: "#",
        category: "beauty",
        rating: 49n,
        ctaLabel: "Check Price",
      },
      {
        id: 6n,
        title: "Byredo Gypsy Water: A Fragrance That Tells a Story",
        featured: false,
        description:
          "Opening notes of bergamot and pepper give way to a sandalwood and vanilla drydown that lasts 8+ hours. Projection is assertive without being overpowering.",
        ctaUrl: "#",
        category: "beauty",
        rating: 45n,
        ctaLabel: "Buy Now",
      },
    ],
  },
};

const LOADING_KEYS = ["ld-a", "ld-b", "ld-c", "ld-d", "ld-e", "ld-f"];

export default function CategoryPage({ category }: CategoryPageProps) {
  const meta = categoryMeta[category] ?? categoryMeta.fashion;
  const Icon = meta.icon;
  const { data: reviews, isLoading } = useGetReviewsByCategory(category);
  const displayReviews =
    reviews && reviews.length > 0 ? reviews : meta.sampleReviews;

  return (
    <div>
      {/* Category Banner */}
      <section
        className={`bg-gradient-to-b ${meta.bannerClass} border-b border-border`}
      >
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {meta.label}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm max-w-lg leading-relaxed">
                {meta.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        {isLoading ? (
          <div
            data-ocid="reviews.loading_state"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {LOADING_KEYS.map((key) => (
              <div
                key={key}
                className="bg-card rounded-xl overflow-hidden border border-border"
              >
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-10 w-full mt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : displayReviews.length === 0 ? (
          <div data-ocid="reviews.empty_state" className="text-center py-20">
            <Icon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No reviews yet
            </h3>
            <p className="text-muted-foreground text-sm">
              We're working on adding reviews for this category. Check back
              soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.map((review, i) => (
              <ReviewCard
                key={Number(review.id)}
                review={review}
                index={i + 1}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
