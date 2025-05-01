
import { useState } from "react";
import ListingCard, { Listing } from "./ListingCard";
import { Button } from "@/components/ui/button";

// Mock data for featured listings
const mockListings: Listing[] = [
  {
    id: "1",
    title: "Annual Gym Membership",
    description: "Lock in this year's membership rate for next year. Beat the January price increase!",
    currentPrice: 599.99,
    guaranteedPrice: 499.99,
    expiryDate: "2025-12-31",
    category: "Services",
    sellerName: "FitLife Gym",
    sellerRating: 4.8,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
  },
  {
    id: "2",
    title: "iPhone Pro 15 - Next Model Reservation",
    description: "Reserve the next iPhone at current prices. Redemption available during launch week.",
    currentPrice: 1199.99,
    guaranteedPrice: 999.99,
    expiryDate: "2025-09-30",
    category: "Electronics",
    sellerName: "TechDirect",
    sellerRating: 4.6,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48"
  },
  {
    id: "3",
    title: "Home Cleaning Service - 6 Months",
    description: "Lock in current rates for bi-weekly cleaning for the next 6 months.",
    currentPrice: 149.99,
    guaranteedPrice: 119.99,
    expiryDate: "2025-08-15",
    category: "Services",
    sellerName: "CleanCo",
    sellerRating: 4.7,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    id: "4",
    title: "Winter Ski Resort Package",
    description: "Book next winter's ski vacation at this season's prices. Full package includes lodging and lift tickets.",
    currentPrice: 2499.99,
    guaranteedPrice: 1799.99,
    expiryDate: "2025-10-31",
    category: "Travel",
    sellerName: "Alpine Escapes",
    sellerRating: 4.9,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1551524559-8af4e6624178"
  },
  {
    id: "5",
    title: "Premium Coffee Subscription",
    description: "6-month subscription of premium beans delivered monthly. Lock in before coffee prices increase.",
    currentPrice: 169.99,
    guaranteedPrice: 139.99,
    expiryDate: "2025-07-01",
    category: "Food & Drink",
    sellerName: "Bean Masters",
    sellerRating: 4.5,
    sellerVerified: false,
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    id: "6",
    title: "Landscaping Service Package",
    description: "Spring lawn care package at winter prices. Includes 3 visits for mowing, trimming, and fertilizing.",
    currentPrice: 349.99,
    guaranteedPrice: 279.99,
    expiryDate: "2025-02-28",
    category: "Home & Garden",
    sellerName: "GreenThumb Landscapes",
    sellerRating: 4.4,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1558904541-efa843a96f01"
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
          <Button variant="outline" size="lg">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
