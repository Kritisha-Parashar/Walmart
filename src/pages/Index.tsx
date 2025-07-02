import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedDeals from "@/components/FeaturedDeals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedDeals />
      <Footer />
    </div>
  );
};

export default Index;
