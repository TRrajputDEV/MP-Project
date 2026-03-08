import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800' ,
    alt: 'Food distribution drive',
    span: 'md:col-span-2 md:row-span-2', // Large square
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    alt: 'Youth education program',
    span: 'md:col-span-2 md:row-span-1', // Wide rectangle
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600',
    alt: 'Community cleanup',
    span: 'md:col-span-1 md:row-span-1', // Small square
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=600',
    alt: 'Elderly care initiative',
    span: 'md:col-span-1 md:row-span-1', // Small square
  },
];

export default function HomeGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ── Compact Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="w-12 h-1 rounded-full bg-crimson mb-3" />
            <h2 className="font-display text-3xl md:text-4xl text-charcoal font-bold">
              Our Gallery
            </h2>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center gap-1 text-crimson font-display font-bold text-sm hover:text-crimson-dark transition-colors self-start md:self-auto"
          >
            View Full Gallery 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* ── Tightened Bento Box Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className={`relative rounded-2xl overflow-hidden bg-gray-200 group shadow-sm ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Interactive overlay with text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                <p className="text-white font-display font-bold text-base md:text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}