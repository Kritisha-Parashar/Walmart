import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-walmart-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* All Departments */}
          <div>
            <h3 className="font-semibold mb-4">All Departments</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Auto & Tires</a></li>
              <li><a href="#" className="hover:underline">Baby</a></li>
              <li><a href="#" className="hover:underline">Beauty</a></li>
              <li><a href="#" className="hover:underline">Books, Movies & Music</a></li>
              <li><a href="#" className="hover:underline">Clothing, Shoes & Accessories</a></li>
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Food</a></li>
              <li><a href="#" className="hover:underline">Gifts & Registry</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Pharmacy</a></li>
              <li><a href="#" className="hover:underline">Walmart+</a></li>
              <li><a href="#" className="hover:underline">Auto Care Centers</a></li>
              <li><a href="#" className="hover:underline">Vision Centers</a></li>
              <li><a href="#" className="hover:underline">Money Services</a></li>
              <li><a href="#" className="hover:underline">Photo Services</a></li>
              <li><a href="#" className="hover:underline">Business Services</a></li>
              <li><a href="#" className="hover:underline">Product Care Plans</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Product Recalls</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Store Feedback</a></li>
            </ul>
          </div>

          {/* Get to Know Us */}
          <div>
            <h3 className="font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Our Company</a></li>
              <li><a href="#" className="hover:underline">Sell on Walmart.com</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Affiliates & Partners</a></li>
              <li><a href="#" className="hover:underline">Press Room</a></li>
              <li><a href="#" className="hover:underline">Walmart Foundation</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-walmart-blue/20" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <span>© 2024 Walmart. All Rights Reserved.</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">California Privacy Rights</a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow us:</span>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                📘
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                🐦
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                📷
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                ▶️
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;