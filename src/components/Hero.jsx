import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 's1',
    title: 'India’s All‑in‑One Store',
    subtitle: 'Everything you love — electronics, fashion, home & more',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 's2',
    title: 'Festive Deals in INR',
    subtitle: 'Big savings with Indian pricing and fast delivery',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 's3',
    title: 'Fresh Picks Daily',
    subtitle: 'Curated products across categories you care about',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=2000&q=80',
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const last = slides.length - 1;

  const next = () => setIndex((i) => (i === last ? 0 : i + 1));
  const prev = () => setIndex((i) => (i === 0 ? last : i - 1));

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const current = useMemo(() => slides[index], [index]);

  return (
    <section className="relative h-[360px] sm:h-[440px] w-full overflow-hidden rounded-b-2xl">
      <div className="absolute inset-0">
        {/* Slides */}
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading={i === index ? 'eager' : 'lazy'}
          />
        ))}
        {/* Soft gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow">{current.title}</h1>
          <p className="mt-3 text-white/90 drop-shadow">{current.subtitle}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#featured"
              className="rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700"
            >
              Shop now
            </a>
            <span className="text-xs text-white/80">Fast delivery across India</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
