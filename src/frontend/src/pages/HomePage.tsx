import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Cpu, Shirt, Sparkles } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import { useGetFeaturedReviews } from "../hooks/useQueries";

const SAMPLE_FEATURED = [
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
    title: "Sony WH-1000XM5 Noise-Cancelling Headphones",
    featured: true,
    description:
      "Industry-leading noise cancellation meets 30-hour battery life. The new foldable design and improved call quality make these the definitive work-from-anywhere companion.",
    ctaUrl: "#",
    category: "electronics",
    rating: 49n,
    ctaLabel: "Buy Now",
  },
  {
    id: 3n,
    title: "La Mer Crème de la Mer Moisturizer",
    featured: true,
    description:
      "Our beauty editor tested this legendary moisturizer for 60 days. The verdict: deeply hydrating, visibly firms skin, and the signature Miracle Broth formula genuinely delivers.",
    ctaUrl: "#",
    category: "beauty",
    rating: 46n,
    ctaLabel: "Check Price",
  },
];

const categories = [
  {
    label: "Fashion",
    to: "/fashion",
    icon: Shirt,
    description: "Clothes, shoes, accessories & style essentials",
    ocid: "category.fashion.link",
    accent: "bg-amber-50 border-amber-200 hover:border-amber-400",
    iconClass: "text-amber-600 bg-amber-100",
  },
  {
    label: "Electronics",
    to: "/electronics",
    icon: Cpu,
    description: "Gadgets, headphones, cameras & smart home",
    ocid: "category.electronics.link",
    accent: "bg-slate-50 border-slate-200 hover:border-slate-400",
    iconClass: "text-slate-600 bg-slate-100",
  },
  {
    label: "Beauty",
    to: "/beauty",
    icon: Sparkles,
    description: "Skincare, makeup, fragrance & wellness",
    ocid: "category.beauty.link",
    accent: "bg-rose-50 border-rose-200 hover:border-rose-400",
    iconClass: "text-rose-500 bg-rose-100",
  },
];

const LOADING_KEYS = ["ld-a", "ld-b", "ld-c"];

export default function HomePage() {
  const { data: featured, isLoading } = useGetFeaturedReviews();

  const displayReviews = (
    featured && featured.length > 0 ? featured : SAMPLE_FEATURED
  ).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.01 80) 0%, oklch(0.93 0.03 155) 50%, oklch(0.92 0.02 75) 100%)",
        }}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-reviewnest.dim_1600x600.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 border border-primary/30 rounded-full px-3 py-1 bg-primary/5">
              Independent Reviews
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-5">
              Trusted Reviews.
              <br />
              <span className="text-primary">Smart Choices.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              We test hundreds of products so you don't have to. Honest,
              in-depth reviews across Fashion, Electronics, and Beauty — with no
              brand bias.
            </p>
            <Link
              to="/fashion"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md text-base"
            >
              Browse Reviews
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Shortcuts */}
      <section className="container mx-auto px-4 md:px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Browse by Category
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Find reviews for what matters to you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.to}
              to={cat.to}
              data-ocid={cat.ocid}
              className={`group flex items-start gap-4 p-6 rounded-xl border-2 transition-all duration-200 ${cat.accent} hover:-translate-y-0.5 hover:shadow-card`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${cat.iconClass}`}
              >
                <cat.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                  {cat.label}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                  {cat.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50 ml-auto mt-1 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="bg-muted/40 py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Editor's Choice
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
                Featured Reviews
              </h2>
            </div>
            <Link
              to="/fashion"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              See all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

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
        </div>
      </section>

      {/* Trust Banner */}
      <section className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Why Trust ReviewNest?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm leading-relaxed">
          Every product is tested by our editorial team. We never accept payment
          for positive coverage — our affiliate links help support independent
          journalism.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Products Tested", value: "1,200+" },
            { label: "Expert Reviewers", value: "24" },
            { label: "Monthly Readers", value: "500K" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="font-display text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
