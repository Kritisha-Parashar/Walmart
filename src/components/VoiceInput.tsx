import { useEffect, useRef, useState } from 'react';
import { Search, Mic, Square } from 'lucide-react';

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

function Header() {
  const [query, setQuery] = useState('');
  const [listening, setListening] = useState(false);   
  const recogRef = useRef<any>(null);

  useEffect(() => {
    if (!SpeechRecognition) return;
    const r = new SpeechRecognition();
    r.lang = 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 1;

    r.onresult = (e: any) => {
      const spoken = e.results[0][0].transcript.trim();
      setQuery(spoken);
    };
    r.onend = () => setListening(false);
    recogRef.current = r;
  }, []);

  const handleMic = () => {
    if (!recogRef.current) return;
    listening ? recogRef.current.stop() : recogRef.current.start();
    setListening(!listening);
  };

  return (
    <header className="bg-[#004f9a] py-3">
      <div className="flex items-center bg-white rounded-full w-full max-w-4xl mx-auto px-4 py-2">
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
          className="flex-grow px-4 py-2 rounded-full outline-none"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleMic} className="text-[#0071dc] px-2">
          {listening ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full p-2 ml-1">
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;     
