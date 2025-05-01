
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pricelock-lightPurple via-white to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How PriceLock Works</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform connects savvy shoppers with sellers offering price guarantees on future purchases, 
              protecting you from inflation, tariffs, and unexpected price increases.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-pricelock-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pricelock-purple text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Listings</h3>
              <p className="text-gray-600">
                Search through price-lock offerings from retailers, distributors, and manufacturers who guarantee their prices for future purchases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pricelock-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pricelock-purple text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect With Sellers</h3>
              <p className="text-gray-600">
                Reach out to sellers directly through our secure messaging system to discuss details and finalize your agreement.
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
        </div>
      </section>
      
      {/* For Sellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Sellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're a retailer, distributor, or manufacturer, PriceLock helps you secure future sales and build customer loyalty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Who Can Sell on PriceLock?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Retailers</span> - Direct-to-consumer businesses looking to secure future sales</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Distributors</span> - Wholesale businesses with imported goods sensitive to tariff changes</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-pricelock-purple rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold">Manufacturers</span> - Production companies looking to hedge against raw material price volatility</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Benefits for Sellers</h3>
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
                  <p className="text-gray-600">Differentiate from competitors with unique offering</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button size="lg" className="bg-pricelock-purple hover:bg-pricelock-darkPurple">Become a Seller</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How do price guarantees work?</h3>
              <p className="text-gray-600">
                Sellers offer a locked-in price for a specific product that can be redeemed during a set future timeframe. 
                You pay now to secure that price, and redeem your purchase later according to the terms set by the seller.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is PriceLock a payment processor?</h3>
              <p className="text-gray-600">
                No, PriceLock simply connects buyers and sellers. We don't process payments or handle product deliveries. 
                Those arrangements are made directly between you and the seller after connecting through our platform.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How are sellers verified?</h3>
              <p className="text-gray-600">
                Sellers go through a basic verification process that checks their business credentials. 
                Verified sellers display a badge on their listings. We recommend buyers do additional 
                research before finalizing any transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pricelock-purple to-pricelock-darkPurple text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-xl mx-auto mb-8">
              Join thousands of savvy shoppers and sellers who are already benefiting from price guarantees on essential consumables.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/listings">
                <Button size="lg" variant="default" className="bg-white text-pricelock-purple hover:bg-gray-100">
                  Browse Listings
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
