import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="bg-walmart-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main hero card */}
          <Card className="lg:col-span-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 rounded-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Get it in as fast as 1 hour*</h2>
              <h3 className="text-4xl font-black mb-4">July 4th faves from $1.98</h3>
              <Button className="bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90 font-semibold">
                Shop now
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 opacity-20">
              <div className="w-32 h-32 bg-white rounded-full -mr-16 -mb-16"></div>
            </div>
          </Card>

          {/* Side cards */}
          <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-2xl">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Hot new arrivals</h3>
                <p className="text-green-100 mb-4">StockX</p>
              </div>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Shop now
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-6 rounded-2xl">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Premium beauty.</h3>
                <p className="text-pink-100 mb-4">Victoria's Secret.</p>
              </div>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Shop now
              </Button>
            </div>
          </Card>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Card className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-center">
              <div className="bg-walmart-light-blue p-4 rounded-xl mb-4 mx-auto w-fit">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold mb-2">Save on La Roche-Posay</h3>
              <p className="text-walmart-gray text-sm mb-4">Up to 40% off appliances</p>
              <Button variant="outline" className="border-walmart-blue text-walmart-blue hover:bg-walmart-blue hover:text-white">
                Shop now
              </Button>
            </div>
          </Card>

          <Card className="bg-walmart-yellow p-6 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-walmart-blue mb-2">Flash Deals</h3>
              <p className="text-walmart-blue/70 text-sm mb-4">Limited time offers</p>
              <Button className="bg-walmart-blue text-white hover:bg-walmart-blue/90">
                Shop deals
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 rounded-2xl">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">Florida Panthers NHL champs gear</h3>
              </div>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Shop now
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 rounded-2xl">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-walmart-blue mb-2">Hot, new beauty from $10</h3>
              </div>
              <Button className="bg-walmart-blue text-white hover:bg-walmart-blue/90">
                Shop now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;