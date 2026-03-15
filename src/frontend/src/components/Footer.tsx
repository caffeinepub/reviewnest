import { Link } from "@tanstack/react-router";
import { Heart, Leaf } from "lucide-react";

const categoryLinks = [
  { label: "Fashion", to: "/fashion" },
  { label: "Electronics", to: "/electronics" },
  { label: "Beauty", to: "/beauty" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-primary-foreground mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Review<span className="text-accent">Nest</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Curated reviews you can trust. Smart choices for every lifestyle.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-primary-foreground/90 tracking-wide uppercase text-xs">
              Categories
            </h4>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-primary-foreground/90 tracking-wide uppercase text-xs">
              About ReviewNest
            </h4>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              We test, review, and recommend products across Fashion,
              Electronics, and Beauty so you can shop with confidence.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50">
            © {year} ReviewNest. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-accent fill-current" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
