function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-sm transition-shadow">
      <div className="aspect-square bg-gray-100" />
      <div className="p-4">
        <h3 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-white text-sm font-medium hover:bg-gray-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAdd }) {
  const products = [
    { id: 1, name: "Minimal Chair", category: "Furniture", price: 129 },
    { id: 2, name: "Studio Headphones", category: "Audio", price: 199 },
    { id: 3, name: "Smart Lamp", category: "Lighting", price: 79 },
    { id: 4, name: "Ergo Keyboard", category: "Accessories", price: 149 },
    { id: 5, name: "Canvas Sneakers", category: "Footwear", price: 89 },
    { id: 6, name: "Travel Backpack", category: "Bags", price: 159 },
  ];

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Featured products</h2>
        <a href="#" className="text-sm text-indigo-700 hover:underline">View all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
