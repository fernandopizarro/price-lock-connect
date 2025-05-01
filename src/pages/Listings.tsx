
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ListingCard, { Listing } from "@/components/ListingCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock data for listings
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
  {
    id: "7",
    title: "Annual Cloud Storage Subscription",
    description: "1TB cloud storage annual plan. Lock in before our scheduled price increase next quarter.",
    currentPrice: 99.99,
    guaranteedPrice: 79.99,
    expiryDate: "2025-06-30",
    category: "Electronics",
    sellerName: "CloudSpace",
    sellerRating: 4.3,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: "8",
    title: "Furniture Set Pre-Order",
    description: "Secure current prices on this upcoming furniture collection, expected to retail for much more at launch.",
    currentPrice: 2999.99,
    guaranteedPrice: 2499.99,
    expiryDate: "2025-03-15",
    category: "Home & Garden",
    sellerName: "Modern Living",
    sellerRating: 4.5,
    sellerVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
];

const categories = ["All", "Electronics", "Home & Garden", "Services", "Travel", "Food & Drink"];
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "expiring", label: "Expiring Soon" },
  { value: "savings", label: "Highest Savings" },
  { value: "priceAsc", label: "Price (Low to High)" },
  { value: "priceDesc", label: "Price (High to Low)" },
];

const Listings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter listings based on category and search query
  const filteredListings = mockListings.filter((listing) => {
    const matchesCategory = selectedCategory === "All" || listing.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Sort listings based on selection
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === "newest") {
      return 0; // Mock data doesn't have creation dates, so maintain order
    } else if (sortBy === "expiring") {
      return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
    } else if (sortBy === "savings") {
      const savingsA = a.currentPrice - a.guaranteedPrice;
      const savingsB = b.currentPrice - b.guaranteedPrice;
      return savingsB - savingsA;
    } else if (sortBy === "priceAsc") {
      return a.guaranteedPrice - b.guaranteedPrice;
    } else if (sortBy === "priceDesc") {
      return b.guaranteedPrice - a.guaranteedPrice;
    }
    return 0;
  });
  
  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    if (category !== "all") {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      setSelectedCategory(formattedCategory);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-pricelock-lightPurple py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6">Browse Price Lock Opportunities</h1>
          <SearchBar onSearch={handleSearch} />
          
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer text-sm px-3 py-1 ${
                  selectedCategory === category ? "bg-pricelock-purple" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <p className="text-gray-600 mb-4 md:mb-0">
              {sortedListings.length} {sortedListings.length === 1 ? "listing" : "listings"} found
            </p>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">Sort by:</span>
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
          
          {sortedListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No listings found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or category filters to find more listings.
              </p>
              <Button onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Listings;
