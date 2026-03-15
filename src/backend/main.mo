import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  type Review = {
    id : Nat;
    category : Text;
    title : Text;
    rating : Nat;
    description : Text;
    ctaLabel : Text;
    ctaUrl : Text;
    featured : Bool;
  };

  module Review {
    public func compare(r1 : Review, r2 : Review) : Order.Order {
      Nat.compare(r1.id, r2.id);
    };
  };

  let reviews : [Review] = [
    // Fashion
    {
      id = 1;
      category = "Fashion";
      title = "Stylish Sneakers";
      rating = 5;
      description = "Comfortable and trendy sneakers for everyday wear.";
      ctaLabel = "Shop Now";
      ctaUrl = "https://fashion.com/sneakers";
      featured = true;
    },
    {
      id = 2;
      category = "Fashion";
      title = "Denim Jacket";
      rating = 4;
      description = "Classic denim jacket with a modern fit.";
      ctaLabel = "Buy Now";
      ctaUrl = "https://fashion.com/denim-jacket";
      featured = false;
    },
    {
      id = 3;
      category = "Fashion";
      title = "Summer Dress";
      rating = 5;
      description = "Lightweight and beautiful summer dress.";
      ctaLabel = "See Details";
      ctaUrl = "https://fashion.com/summer-dress";
      featured = true;
    },
    {
      id = 4;
      category = "Fashion";
      title = "Leather Belt";
      rating = 4;
      description = "Premium leather belt for all occasions.";
      ctaLabel = "Buy Belt";
      ctaUrl = "https://fashion.com/leather-belt";
      featured = false;
    },
    {
      id = 5;
      category = "Fashion";
      title = "Cotton T-Shirts";
      rating = 5;
      description = "Soft and comfortable cotton t-shirts available in various colors.";
      ctaLabel = "Shop T-Shirts";
      ctaUrl = "https://fashion.com/cotton-tshirts";
      featured = true;
    },
    // Electronics
    {
      id = 6;
      category = "Electronics";
      title = "Wireless Earbuds";
      rating = 5;
      description = "High-quality sound and long battery life.";
      ctaLabel = "Buy Earbuds";
      ctaUrl = "https://electronics.com/earbuds";
      featured = true;
    },
    {
      id = 7;
      category = "Electronics";
      title = "Smartwatch";
      rating = 4;
      description = "Track your fitness and stay connected on the go.";
      ctaLabel = "Get Smartwatch";
      ctaUrl = "https://electronics.com/smartwatch";
      featured = false;
    },
    {
      id = 8;
      category = "Electronics";
      title = "Bluetooth Speaker";
      rating = 5;
      description = "Portable speaker with excellent sound quality.";
      ctaLabel = "Shop Speaker";
      ctaUrl = "https://electronics.com/speaker";
      featured = true;
    },
    {
      id = 9;
      category = "Electronics";
      title = "Gaming Mouse";
      rating = 4;
      description = "Ergonomic design with customizable buttons.";
      ctaLabel = "Buy Mouse";
      ctaUrl = "https://electronics.com/gaming-mouse";
      featured = false;
    },
    {
      id = 10;
      category = "Electronics";
      title = "Power Bank";
      rating = 5;
      description = "Compact and powerful portable charger.";
      ctaLabel = "Get Power Bank";
      ctaUrl = "https://electronics.com/power-bank";
      featured = true;
    },
    // Beauty
    {
      id = 11;
      category = "Beauty";
      title = "Organic Face Cream";
      rating = 5;
      description = "Natural ingredients for healthy skin.";
      ctaLabel = "Buy Face Cream";
      ctaUrl = "https://beauty.com/face-cream";
      featured = true;
    },
    {
      id = 12;
      category = "Beauty";
      title = "Lipstick Set";
      rating = 4;
      description = "Long-lasting and vibrant colors.";
      ctaLabel = "Shop Lipsticks";
      ctaUrl = "https://beauty.com/lipsticks";
      featured = false;
    },
    {
      id = 13;
      category = "Beauty";
      title = "Hair Serum";
      rating = 5;
      description = "Smooth and shiny hair with minimal effort.";
      ctaLabel = "Buy Hair Serum";
      ctaUrl = "https://beauty.com/hair-serum";
      featured = true;
    },
    {
      id = 14;
      category = "Beauty";
      title = "Face Masks";
      rating = 4;
      description = "Variety pack for different skin needs.";
      ctaLabel = "Get Face Masks";
      ctaUrl = "https://beauty.com/face-masks";
      featured = false;
    },
    {
      id = 15;
      category = "Beauty";
      title = "Moisturizing Lotion";
      rating = 5;
      description = "Hydrating lotion for all skin types.";
      ctaLabel = "Shop Lotion";
      ctaUrl = "https://beauty.com/lotion";
      featured = true;
    },
  ];

  public query ({ caller }) func getReviewsByCategory(category : Text) : async [Review] {
    reviews.filter(func(r) { r.category == category });
  };

  public query ({ caller }) func getFeaturedReviews() : async [Review] {
    reviews.filter(func(r) { r.featured });
  };

  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews;
  };
};
