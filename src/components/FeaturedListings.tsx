
import { useState } from "react";
import ListingCard, { Listing } from "./ListingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for featured listings - focused on consumer consumables
const mockListings: Listing[] = [
  {
    id: "1",
    title: "Premium Organic Beef - 6 Month Supply",
    description: "Lock in current beef prices before expected tariff increases. Grass-fed, hormone-free beef delivered quarterly.",
    currentPrice: 599.99,
    guaranteedPrice: 479.99,
    expiryDate: "2025-12-31",
    category: "Meat & Poultry",
    sellerName: "Greenfield Farms",
    sellerRating: 4.8,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f"
  },
  {
    id: "2",
    title: "Farm-Fresh Egg Subscription",
    description: "Secure 12 months of egg deliveries at today's prices. Protection against ongoing avian flu price impacts.",
    currentPrice: 199.99,
    guaranteedPrice: 149.99,
    expiryDate: "2025-10-31",
    category: "Dairy & Eggs",
    sellerName: "Happy Hen Farms",
    sellerRating: 4.7,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1598965402089-897ce52e8355"
  },
  {
    id: "3",
    title: "Premium Atlantic Salmon - Quarterly Delivery",
    description: "Lock in salmon prices before new fishing quotas and import tariffs take effect. Wild-caught premium cuts.",
    currentPrice: 329.99,
    guaranteedPrice: 269.99,
    expiryDate: "2025-08-15",
    category: "Seafood",
    sellerName: "OceanFresh",
    sellerRating: 4.9,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
  },
  {
    id: "4",
    title: "Organic Winter Vegetable Bundle",
    description: "Pre-purchase next winter's local vegetable supply at current rates. Beat seasonal price fluctuations.",
    currentPrice: 249.99,
    guaranteedPrice: 199.99,
    expiryDate: "2025-11-30",
    category: "Produce",
    sellerName: "Valley Organics",
    sellerRating: 4.6,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1610348725531-843dff563e2c"
  },
  {
    id: "5",
    title: "Imported Cheese Collection",
    description: "Reserve European cheese selections before new dairy tariffs. Includes aged varieties from France, Italy, and Spain.",
    currentPrice: 189.99,
    guaranteedPrice: 149.99,
    expiryDate: "2025-07-01",
    category: "Dairy & Eggs",
    sellerName: "World Cheese Emporium",
    sellerRating: 4.5,
    sellerVerified: false,
    imageUrl: "https://images.unsplash.com/photo-1452195100486-9cc805987862"
  },
  {
    id: "6",
    title: "Premium Ham & Cured Meat Package",
    description: "Lock in specialty cured meats before pork tariff increases. Includes imported prosciutto and specialty hams.",
    currentPrice: 299.99,
    guaranteedPrice: 239.99,
    expiryDate: "2025-09-15",
    category: "Meat & Poultry",
    sellerName: "Artisan Meats Co.",
    sellerRating: 4.7,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1599921841143-819065a55cc6"
  },
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "expiring", label: "Expiring Soon" },
  { value: "savings", label: "Highest Savings" },
];

const FeaturedListings = () => {
  const [sortBy, setSortBy] = useState("newest");
  
  // Sort listings based on selection
  const sortedListings = [...mockListings].sort((a, b) => {
    if (sortBy === "newest") {
      return 0; // Mock data doesn't have creation dates, so maintain order
    } else if (sortBy === "expiring") {
      return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
    } else if (sortBy === "savings") {
      const savingsA = a.currentPrice - a.guaranteedPrice;
      const savingsB = b.currentPrice - b.guaranteedPrice;
      return savingsB - savingsA;
    }
    return 0;
  });
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Featured Listings</h2>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pricelock-purple"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/listings">
            <Button variant="outline" size="lg">
              View All Listings
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
