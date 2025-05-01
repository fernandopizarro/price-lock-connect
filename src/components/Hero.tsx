
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-pricelock-lightPurple via-white to-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lock in Today's Prices, <span className="text-pricelock-purple">Secure Tomorrow's Value</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              PriceLock connects savvy shoppers with sellers offering price guarantees on future purchases. 
              Protect yourself from inflation, tariffs, and price increases while sellers gain predictable future sales.
            </p>
            <p className="text-md text-gray-600 mb-8">
              <span className="font-semibold">Avoid upcoming tariffs</span> on imported goods by securing current prices 
              for future delivery of eggs, meats, produce, and other essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/listings">
                <Button size="lg" className="px-8 py-6">Browse Listings</Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="px-8 py-6">Become a Seller</Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-pricelock-purple opacity-20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d" 
                alt="Fresh groceries and consumer goods" 
                className="w-full max-w-md rounded-xl shadow-lg relative z-10"
              />
              <div className="absolute bottom-12 -right-8 p-4 bg-white rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="text-gray-500 text-xs">Today's Price</div>
                    <div className="text-gray-900 text-lg font-bold line-through">$199.99</div>
                  </div>
                  <div>
                    <div className="text-pricelock-green text-xs">Locked Price</div>
                    <div className="text-pricelock-green text-xl font-bold">$149.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
