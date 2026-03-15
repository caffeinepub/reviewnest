import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "Fashion", to: "/fashion", ocid: "nav.fashion.link" },
  { label: "Electronics", to: "/electronics", ocid: "nav.electronics.link" },
  { label: "Beauty", to: "/beauty", ocid: "nav.beauty.link" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-xs">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.home.link"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            Review<span className="text-primary">Nest</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors hover:bg-muted"
              activeProps={{
                className:
                  "px-4 py-2 text-sm font-medium text-primary rounded-md bg-secondary",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu placeholder — simple inline links */}
        <nav className="flex md:hidden items-center gap-0">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
