import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedDeals = () => {
  const deals = [
    {
      title: "Walmart+ Members: Free shipping with no order minimum",
      price: "$12.95/month",
      originalPrice: "$49",
      image: "📦",
      category: "Walmart+",
      savings: "Try free for 30 days"
    },
    {
      title: "Apple AirPods (3rd Generation)",
      price: "$139.00",
      originalPrice: "$179.00",
      image: "🎧",
      category: "Electronics",
      savings: "Save $40"
    },
    {
      title: "Nintendo Switch OLED Model",
      price: "$314.00",
      originalPrice: "$349.99",
      image: "🎮",
      category: "Gaming",
      savings: "Save $35.99"
    },
    {
      title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      price: "$49.95",
      originalPrice: "$99.95",
      image: "🍲",
      category: "Kitchen",
      savings: "Save 50%"
    },
    {
      title: "Samsung 65\" Class 4K UHD Smart TV",
      price: "$448.00",
      originalPrice: "$649.99",
      image: "📺",
      category: "Electronics",
      savings: "Save $201.99"
    },
    {
      title: "Dyson V12 Detect Slim Cordless Vacuum",
      price: "$399.99",
      originalPrice: "$649.99",
      image: "🧹",
      category: "Home",
      savings: "Save $250"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-walmart-blue mb-2">Featured deals</h2>
          <p className="text-walmart-gray">Shop our best deals and save big</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-walmart-yellow text-walmart-blue">
                    {deal.category}
                  </Badge>
                  <div className="text-4xl">{deal.image}</div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-walmart-blue transition-colors">
                  {deal.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-walmart-blue">{deal.price}</span>
                  {deal.originalPrice && (
                    <span className="text-walmart-gray line-through text-sm">{deal.originalPrice}</span>
                  )}
                </div>
                
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 mb-4">
                  {deal.savings}
                </Badge>
                
                <Button className="w-full bg-walmart-blue hover:bg-walmart-blue/90 text-white">
                  Add to cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-walmart-blue text-walmart-blue hover:bg-walmart-blue hover:text-white">
            View all deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;