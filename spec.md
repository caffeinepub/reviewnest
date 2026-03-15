# ReviewNest

## Current State
New project, no existing code.

## Requested Changes (Diff)

### Add
- Homepage with hero section and featured review cards
- Navigation bar with ReviewNest brand and links to Fashion, Electronics, Beauty categories
- Category pages: Fashion, Electronics, Beauty — each with a grid of product review cards
- ReviewCard component: product image placeholder, title, star rating (1–5), short description, affiliate CTA button ("Buy Now" or "Check Price")
- Footer with category links and branding
- Sample product review data for all three categories (5–6 products each)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Store review data (id, category, title, rating, description, ctaLabel, ctaUrl) with query methods to fetch by category and get featured reviews
2. Frontend routes: `/` (homepage), `/fashion`, `/electronics`, `/beauty`
3. Navbar component with brand logo text and category nav links
4. Hero section on homepage with tagline and CTA
5. ReviewCard component with image placeholder, star rating display, description, and affiliate CTA button
6. Featured reviews section on homepage (top-rated across categories)
7. Category page layout reusing ReviewCard grid
8. Footer with category links and copyright
