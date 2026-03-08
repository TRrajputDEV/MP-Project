import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const randomImages = [
  'https://picsum.photos/seed/ngo1/1920/1080',
  'https://picsum.photos/seed/ngo2/1920/1080',
  'https://picsum.photos/seed/ngo3/1920/1080',
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === randomImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Swaps every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] min-h-[500px] bg-charcoal overflow-hidden">
      
      {/* Background Images */}
      {randomImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Static Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight max-w-4xl">
          Maharana Pratap Seva Samiti
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
          Dedicated to social service, cultural preservation, and empowering our community through collective action.
        </p>
        
        <div className="flex gap-4">
          <Link 
            to="/donate" 
            className="text-white px-8 py-3.5 rounded-md font-display font-semibold transition-all hover:scale-[1.02] shadow-md"
            style={{ background: 'linear-gradient(135deg, #FF6600, #8B0000)' }}
          >
            Donate Now
          </Link>
          <Link 
            to="/about" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-md font-display font-semibold transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Simple Dot Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {randomImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-saffron' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}