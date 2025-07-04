import { useState, useRef, useEffect } from "react";
import {
  Search,
  Mic,
  Square,
  MapPin,
  Heart,
  User,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import walmartLogo from "@/assets/walmart-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const recogRef = useRef<any>(null);

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  useEffect(() => {
    if (!SpeechRecognition) return; 
    const r = new SpeechRecognition();
    r.lang = "en-US";
    r.interimResults = false;
    r.maxAlternatives = 1;

    r.onresult = (e: any) => {
      const spoken = e.results[0][0].transcript.trim();
      setQuery(spoken); 
    };
    r.onend = () => setListening(false);
    recogRef.current = r;
  }, [SpeechRecognition]);

  const toggleMic = () => {
    if (!recogRef.current) return;
    listening ? recogRef.current.stop() : recogRef.current.start();
    setListening(!listening);
  };


  return (
    <header className="bg-walmart-blue text-white">
      {/* ─── Top header with location + account links ─── */}
      <div className="border-b border-walmart-blue/20">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Sacramento, 95829 Sacramento Supercenter</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:underline">Reorder</button>
            <button className="hover:underline">My Items</button>
            <button className="hover:underline">Account</button>
            <button className="hover:underline">Sign In</button>
          </div>
        </div>
      </div>

      {/* ─── Main header row ─── */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={walmartLogo} alt="Walmart" className="h-8 w-8" />
            <span className="text-xl font-bold">Walmart</span>
          </div>

          {/* Departments button */}
          <Button
            variant="outline"
            className="bg-white text-walmart-blue border-white hover:bg-gray-50"
          >
            <span className="mr-2">☰</span>
            Departments
          </Button>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl relative">
            <Input
              placeholder="Search everything at Walmart online and in store"
              className="pr-24 h-12 bg-white text-gray-900 border-white rounded-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* Mic / Stop button */}
            {SpeechRecognition && (
              <Button
                size="sm"
                onClick={toggleMic}
                className="absolute right-12 top-1 h-10 w-10 rounded-full bg-walmart-blue text-white hover:bg-walmart-blue/90"
              >
                {listening ? (
                  <Square className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </Button>
            )}

            {/* Yellow search button */}
            <Button
              size="sm"
              className="absolute right-1 top-1 h-10 w-10 rounded-full bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Right‑side icons */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-walmart-blue/80 flex flex-col gap-1 h-auto p-2"
            >
              <Heart className="h-5 w-5" />
              <span className="text-xs">Reorder</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-walmart-blue/80 flex flex-col gap-1 h-auto p-2"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Account</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-walmart-blue/80 flex flex-col gap-1 h-auto p-2 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs">$0.00</span>
              <span className="absolute -top-1 -right-1 bg-walmart-yellow text-walmart-blue text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* ─── Navigation bar ─── */}
      <div className="max-w-screen-xl mx-auto p-4 overflow-x-hidden">
        {/* All your content */}
          <div className="bg-white text-gray-700 border-t">
          <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto">
            <nav className="flex items-center gap-6 py-3 text-sm w-max px-4">
              <Link to="/shopping-list">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                📝 Shop with Shopping List
              </button>
              </Link>
              <button className="hover:text-walmart-blue font-medium">
                Grocery & essentials
              </button>
              <button className="hover:text-walmart-blue">Valentine's Day</button>
              <button className="hover:text-walmart-blue">New Arrivals</button>
              <button className="hover:text-walmart-blue">4th of July</button>
              <button className="hover:text-walmart-blue">Dinner Made Easy</button>
              <button className="hover:text-walmart-blue">Pharmacy</button>
              <button className="hover:text-walmart-blue">Delivery</button>
              <button className="hover:text-walmart-blue">Trending</button>
              <button className="hover:text-walmart-blue">Swim Shop</button>
              <button className="hover:text-walmart-blue">My Items</button>
              <button className="hover:text-walmart-blue">Auto Service</button>
              <button className="hover:text-walmart-blue">Only at Walmart</button>
              <button className="hover:text-walmart-blue">Registry</button>
              <button className="hover:text-walmart-blue">Walmart+</button>
            </nav>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
