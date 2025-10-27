import React from 'react';

function ProductGrid({ products, onAddToCart, onOpenItem, formatINR }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Featured picks</h2>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p) => (
          <div key={p.id} className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button onClick={() => onOpenItem(p)} className="block w-full text-left">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="px-3 pt-3 pb-1">
                <h3 className="line-clamp-1 text-sm font-medium text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-600">{formatINR(p.price)}</p>
              </div>
            </button>
            <div className="px-3 pb-3">
              <button
                onClick={() => onAddToCart(p)}
                className="w-full rounded-md bg-gray-900 text-white text-sm py-2 hover:bg-black"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
