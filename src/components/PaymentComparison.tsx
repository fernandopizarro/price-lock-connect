
import { ArrowRight } from "lucide-react";

const PaymentComparison = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">A Smarter Way to Shop</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the difference between traditional financing and PriceLock's unique approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-gray-200 rounded-xl p-8 hover:border-red-300 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Buy Now, Pay Later</h3>
              <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-50 rounded-full">Traditional Financing</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">Take possession of goods today, but pay the <span className="font-semibold">future (potentially higher) price</span> over time</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">Often includes interest charges, late fees, and impacts credit score</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">No protection against price increases, tariffs or inflation</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">Encourages impulse purchases and debt accumulation</p>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-8 hover:border-pricelock-purple hover:shadow-md transition">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Pay Now, Buy Later</h3>
              <span className="text-pricelock-purple text-sm font-medium px-3 py-1 bg-pricelock-lightPurple rounded-full">PriceLock Approach</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-pricelock-lightPurple text-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">Lock in <span className="font-semibold">today's lower price</span> for future delivery of goods like eggs, meat, and other consumables</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-pricelock-lightPurple text-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">Protection against price increases due to inflation, supply chain issues, and upcoming tariffs</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-pricelock-lightPurple text-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">No debt, interest, or credit impact — just smart financial planning</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-pricelock-lightPurple text-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <p className="text-gray-600">Especially valuable for imported goods likely to face tariff increases in the coming months</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Why Food Prices Are Likely to Rise</h4>
          <p className="text-gray-600 mb-4">
            Recent global trade tensions are expected to result in new tariffs on imported foods, particularly affecting:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pricelock-purple rounded-full"></span>
              <span>Meat & Poultry (15-20% increase)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pricelock-purple rounded-full"></span>
              <span>Dairy & Eggs (10-15% increase)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pricelock-purple rounded-full"></span>
              <span>Seafood (20-25% increase)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pricelock-purple rounded-full"></span>
              <span>Specialty Cheese (up to 30% increase)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pricelock-purple rounded-full"></span>
              <span>Imported Produce (15-20% increase)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pricelock-purple rounded-full"></span>
              <span>Coffee & Tea (10-20% increase)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentComparison;
