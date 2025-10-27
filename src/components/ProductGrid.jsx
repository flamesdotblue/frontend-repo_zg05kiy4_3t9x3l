import React from 'react';

const sampleProducts = [
  {
    id: 'p1',
    name: 'Carbon Fiber Rear Wing',
    price: 499.0,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Performance Coilovers',
    price: 899.99,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Forged Alloy Wheels (Set of 4)',
    price: 1499.0,
    image:
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p4',
    name: 'High-Flow Intake Kit',
    price: 299.0,
    image:
      'https://images.unsplash.com/photo-1539593191111-4384ffab174d?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductGrid = ({ onAddToCart, onOpenItem }) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Featured Products</h3>
            <p className="text-gray-500 text-sm">Curated picks for speed and style</p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sampleProducts.map((p) => (
            <div
              key={p.id}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => onOpenItem(p)}
                className="block relative aspect-[4/3] w-full overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </button>
              <div className="p-4">
                <h4 className="text-sm font-medium line-clamp-2">{p.name}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-semibold">${p.price.toFixed(2)}</span>
                  <button
                    onClick={() => onAddToCart(p)}
                    className="px-3 py-1.5 text-sm rounded-md bg-black text-white hover:bg-gray-900"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
