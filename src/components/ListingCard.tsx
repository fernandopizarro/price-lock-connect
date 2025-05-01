
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export type Listing = {
  id: string;
  title: string;
  description: string;
  currentPrice: number;
  guaranteedPrice: number;
  expiryDate: string;
  category: string;
  sellerName: string;
  sellerRating: number;
  sellerVerified: boolean;
  imageUrl: string;
};

type ListingCardProps = {
  listing: Listing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  const savings = ((listing.currentPrice - listing.guaranteedPrice) / listing.currentPrice * 100).toFixed(0);
  const expiryDate = new Date(listing.expiryDate);
  const today = new Date();
  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <Link to={`/listing/${listing.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={listing.imageUrl} 
            alt={listing.title} 
            className="w-full h-full object-cover"
          />
          <Badge 
            className="absolute top-2 right-2 bg-pricelock-green text-white"
          >
            Save {savings}%
          </Badge>
        </div>
        <CardContent className="pt-4 flex-grow">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {listing.category}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold line-clamp-1">{listing.title}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{listing.description}</p>
          
          <div className="mt-4 space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Current price:</span>
              <span className="font-medium line-through">${listing.currentPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-pricelock-purple text-sm font-medium">Locked price:</span>
              <span className="text-pricelock-purple font-bold">${listing.guaranteedPrice.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm mr-1">{listing.sellerName}</span>
            {listing.sellerVerified && (
              <div className="w-4 h-4 bg-pricelock-blue rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm">{listing.sellerRating}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ListingCard;
