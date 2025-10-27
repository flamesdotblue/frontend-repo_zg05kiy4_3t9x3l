import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';

const promos = [
  {
    id: 1,
    title: 'Track-Proven Performance',
    subtitle: 'Turbo kits, exhausts, aero and more — engineered to win.',
    image:
      'https://images.unsplash.com/photo-1558980664-10e7170b5c76?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Detailing Essentials',
    subtitle: 'Shine, protect and restore with pro-grade care.',
    image:
      'https://images.unsplash.com/photo-1519659528534-6f2823a3a8f3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Wheels & Tires',
    subtitle: 'Grip and style for street and circuit.',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % promos.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const trackStyle = useMemo(
    () => ({
      transform: `translateX(-${index * 100}%)`,
    }),
    [index]
  );

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-6">
        <div className="w-full">
          <div className="overflow-hidden rounded-xl shadow-lg border border-white/10 bg-white/70 backdrop-blur">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={trackStyle}
            >
              {promos.map((p) => (
                <div key={p.id} className="min-w-full grid md:grid-cols-2">
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{p.subtitle}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button className="px-5 py-2.5 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900">
                        Shop now
                      </button>
                      <button className="px-5 py-2.5 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50">
                        Learn more
                      </button>
                    </div>
                  </div>
                  <div className="relative h-56 md:h-full">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 p-3 justify-center bg-white/60">
              {promos.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? 'bg-black w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
