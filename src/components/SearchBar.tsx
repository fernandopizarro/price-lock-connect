
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  onSearch?: (query: string, category: string) => void;
  className?: string;
};

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery, category);
  };
  
  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for price-lock deals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pricelock-purple"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="home">Home & Garden</option>
          <option value="clothing">Clothing</option>
          <option value="travel">Travel</option>
          <option value="services">Services</option>
        </select>
        
        <Button type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
