
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-pricelock-purple flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="text-xl font-bold text-pricelock-darkPurple">
            PriceLock
          </span>
        </Link>
        
        {/* Navigation Menu - Center */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-pricelock-purple transition">
            Home
          </Link>
          <Link to="/listings" className="font-medium text-gray-600 hover:text-pricelock-purple transition">
            Browse Listings
          </Link>
          <Link to="/how-it-works" className="font-medium text-gray-600 hover:text-pricelock-purple transition">
            How It Works
          </Link>
        </div>
        
        {/* Auth Buttons - Right */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
