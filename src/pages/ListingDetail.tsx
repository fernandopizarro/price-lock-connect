
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

// Mock data for a single listing
const mockListing = {
  id: "1",
  title: "Annual Gym Membership",
  description: "Lock in this year's membership rate for next year. Beat the January price increase! Includes access to all gym facilities, classes, and personal training sessions. Valid at all our locations nationwide.",
  currentPrice: 599.99,
  guaranteedPrice: 499.99,
  expiryDate: "2025-12-31",
  category: "Services",
  sellerName: "FitLife Gym",
  sellerRating: 4.8,
  sellerVerified: true,
  sellerJoined: "March 2023",
  sellerTransactions: 142,
  terms: "This price lock guarantees the annual membership rate of $499.99 instead of our standard $599.99 rate. To redeem, contact any FitLife Gym location before the expiry date and mention your PriceLock agreement. Payment will be processed at time of redemption. Non-transferable and valid for new annual memberships only.",
  redemptionDetails: "Visit any FitLife Gym location with your PriceLock confirmation. Valid ID required. Payment methods accepted: credit card, debit card, or bank transfer.",
  images: [
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  ],
  reviews: [
    { id: 1, user: "Alex T.", rating: 5, date: "2024-03-15", content: "Great deal! Used a similar price lock from this seller last year and had no issues redeeming." },
    { id: 2, user: "Jamie W.", rating: 4, date: "2024-02-22", content: "The process was smooth. Communication was good and redemption was easy." },
    { id: 3, user: "Morgan P.", rating: 5, date: "2024-01-05", content: "Saved me over $100 compared to regular price. Will definitely use again!" }
  ]
};

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  
  // Calculate savings
  const savings = mockListing.currentPrice - mockListing.guaranteedPrice;
  const savingsPercentage = ((savings / mockListing.currentPrice) * 100).toFixed(0);
  
  // Format dates
  const expiryDate = new Date(mockListing.expiryDate);
  const formattedExpiryDate = expiryDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  // Calculate days until expiry
  const today = new Date();
  const daysUntilExpiry = Math.ceil(
    (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  const handleContactSubmit = () => {
    console.log("Contact form submitted:", { userEmail, contactMessage });
    setIsContactDialogOpen(false);
    // In a real app, would send the message to the seller
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8 flex-grow">
        <div className="mb-6">
          <Link 
            to="/listings" 
            className="text-pricelock-purple hover:underline flex items-center mb-4"
          >
            ← Back to listings
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">{mockListing.title}</h1>
          
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-4">
            <Badge variant="outline">{mockListing.category}</Badge>
            <span>Listed by {mockListing.sellerName}</span>
            {mockListing.sellerVerified && (
              <span className="flex items-center">
                <div className="w-4 h-4 bg-pricelock-blue rounded-full flex items-center justify-center mr-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                Verified Seller
              </span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={mockListing.images[selectedImage]}
                  alt={mockListing.title}
                  className="rounded-lg object-cover w-full h-[400px]"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {mockListing.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer rounded-md overflow-hidden w-20 h-20 flex-shrink-0 transition ${
                      selectedImage === index
                        ? "ring-2 ring-pricelock-purple"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${mockListing.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tabs for Description, Terms, Reviews */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="terms">Terms & Redemption</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-4">
                <Card className="p-6">
                  <p className="text-gray-700 whitespace-pre-line">
                    {mockListing.description}
                  </p>
                </Card>
              </TabsContent>
              
              <TabsContent value="terms" className="mt-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Terms of Agreement</h3>
                  <p className="text-gray-700 mb-4">{mockListing.terms}</p>
                  
                  <h3 className="font-semibold mb-2">How to Redeem</h3>
                  <p className="text-gray-700">{mockListing.redemptionDetails}</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-4">
                <Card className="p-6">
                  <div className="mb-6 pb-6 border-b">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold mr-2">{mockListing.sellerRating}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(mockListing.sellerRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        based on {mockListing.reviews.length} reviews
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {mockListing.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-0">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">{review.user}</span>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            {/* Price and Details Card */}
            <Card className="p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Current market price:</p>
                  <p className="text-xl font-medium line-through">${mockListing.currentPrice.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-pricelock-green text-sm font-medium">PriceLock price:</p>
                  <p className="text-2xl font-bold text-pricelock-green">
                    ${mockListing.guaranteedPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 rounded-md p-3 mb-4">
                <p className="text-pricelock-green font-medium">
                  You save ${savings.toFixed(2)} ({savingsPercentage}%)
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Offer valid until:</span>
                  <span className="font-medium">{formattedExpiryDate}</span>
                </div>
                <p className="text-sm text-orange-600">
                  {daysUntilExpiry <= 30 
                    ? `Only ${daysUntilExpiry} ${daysUntilExpiry === 1 ? 'day' : 'days'} left!` 
                    : `${daysUntilExpiry} days remaining`}
                </p>
              </div>
              
              <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full mb-4">Contact Seller</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contact {mockListing.sellerName}</DialogTitle>
                    <DialogDescription>
                      Send a message to inquire about this listing. The seller will respond to your email.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm interested in this price lock offer. Could you provide more details about the redemption process?"
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsContactDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleContactSubmit} disabled={!userEmail || !contactMessage}>Send Message</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" className="w-full">
                Share Listing
              </Button>
            </Card>
            
            {/* Seller Info Card */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">About the Seller</h3>
              
              <div className="flex items-center mb-4">
                <div className="bg-pricelock-lightPurple w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  <span className="text-pricelock-darkPurple text-lg font-bold">
                    {mockListing.sellerName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{mockListing.sellerName}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{mockListing.sellerRating}</span>
                  </div>
                </div>
                {mockListing.sellerVerified && (
                  <div className="ml-auto w-5 h-5 bg-pricelock-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>Member since: {mockListing.sellerJoined}</p>
                <p>{mockListing.sellerTransactions} completed transactions</p>
                <p>Typically responds within 24 hours</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ListingDetail;
