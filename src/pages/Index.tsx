
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedListings from "@/components/FeaturedListings";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How PriceLock Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our platform connects buyers who want to secure future purchases at today's prices with sellers offering price guarantees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-pricelock-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pricelock-purple text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Listings</h3>
              <p className="text-gray-600">
                Search through offerings from verified sellers who guarantee their prices for future purchases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pricelock-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pricelock-purple text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect With Sellers</h3>
              <p className="text-gray-600">
                Reach out to sellers directly through our secure messaging system to discuss details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pricelock-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pricelock-purple text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Your Transaction</h3>
              <p className="text-gray-600">
                Finalize your price-lock agreement and redeem your purchase during the valid redemption period.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </section>
      
      {/* Featured Listings Section */}
      <FeaturedListings />
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Use PriceLock?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our platform offers unique advantages for both buyers and sellers looking to navigate uncertain markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-pricelock-purple hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Protect against future price increases and inflation</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Secure deals on products and services you know you'll need</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Spread out large purchases by securing prices in advance</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Find exclusive deals not available elsewhere</p>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-pricelock-purple hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">For Sellers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Secure future sales and stabilize revenue forecasts</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Build customer loyalty through price protection guarantees</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Attract new customers seeking price certainty</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Differentiate from competitors with unique offering</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pricelock-purple to-pricelock-darkPurple text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="max-w-xl mx-auto mb-8">
              Join thousands of savvy shoppers and sellers who are already benefiting from price guarantees.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" variant="default" className="bg-white text-pricelock-purple hover:bg-gray-100">
                Browse Listings
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Create an Account
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
