import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const formatINR = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const SAMPLE_PRODUCTS = [
  {
    id: 'p1',
    name: 'Wireless Earbuds Pro',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1574920164507-e651b363da83?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMEVhcmJ1ZHMlMjBQcm98ZW58MHwwfHx8MTc2MTUzOTk5Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    name: 'Insulated Water Bottle 1L',
    price: 899,
    image: 'https://images.unsplash.com/photo-1722532254518-89016ba75a15?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnN1bGF0ZWQlMjBXYXRlciUyMEJvdHRsZSUyMDFMfGVufDB8MHx8fDE3NjE1Mzk5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    name: 'Cotton T‑Shirt (Pack of 2)',
    price: 699,
    image: 'https://images.unsplash.com/photo-1651761179569-4ba2aa054997?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3R0b24lMjBUJUUyJTgwJTkxU2hpcnQlMjAlMjhQYWNrJTIwb2YlMjAyJTI5fGVufDB8MHx8fDE3NjE1Mzk5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    name: 'Stainless Steel Kadhai',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1731539387024-4fff482fe68c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFpbmxlc3MlMjBTdGVlbCUyMEthZGhhaXxlbnwwfDB8fHwxNzYxNTM5OTk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p5',
    name: 'Smart LED Bulb (9W)',
    price: 399,
    image: 'https://images.unsplash.com/photo-1622574372197-b8e9fe9f522c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbWFydCUyMExFRCUyMEJ1bGIlMjAlMjg5VyUyOXxlbnwwfDB8fHwxNzYxNTM5OTk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p6',
    name: 'Backpack 28L Everyday',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1671764673184-740ebf2cd637?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWNrcGFjayUyMDI4TCUyMEV2ZXJ5ZGF5fGVufDB8MHx8fDE3NjE1Mzk5OTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]); // {id, name, price, qty, image}
  const [activeItem, setActiveItem] = useState(null);

  const subtotal = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)));
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const openItem = (product) => {
    setActiveItem(product);
    setView('item');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onNavigate={setView} cartCount={cart.reduce((s, i) => s + i.qty, 0)} />

      <main>
        {view === 'home' && (
          <>
            <Hero />
            <section id="featured">
              <ProductGrid
                products={SAMPLE_PRODUCTS}
                onAddToCart={addToCart}
                onOpenItem={openItem}
                formatINR={formatINR}
              />
            </section>
          </>
        )}

        {view === 'cart' && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl font-semibold">Your cart</h2>
            {cart.length === 0 ? (
              <p className="mt-4 text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-xl border p-4">
                      <img src={item.image} alt={item.name} className="h-20 w-20 rounded object-cover" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{formatINR(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="h-8 w-8 rounded border text-lg leading-none"
                        >
                          −
                        </button>
                        <input
                          value={item.qty}
                          onChange={(e) => updateQty(item.id, parseInt(e.target.value || '1', 10))}
                          className="w-12 rounded border py-1 text-center"
                        />
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="h-8 w-8 rounded border text-lg leading-none"
                        >
                          +
                        </button>
                      </div>
                      <div className="w-24 text-right font-semibold">{formatINR(item.price * item.qty)}</div>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-600 hover:underline">Remove</button>
                    </div>
                  ))}
                </div>
                <aside className="rounded-xl border p-5 h-fit">
                  <div className="flex items-center justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-semibold">{formatINR(subtotal)}</span>
                  </div>
                  <button
                    onClick={() => setView('checkout')}
                    className="mt-4 w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700"
                  >
                    Checkout
                  </button>
                </aside>
              </div>
            )}
          </section>
        )}

        {view === 'item' && activeItem && (
          <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
              <img src={activeItem.image} alt={activeItem.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{activeItem.name}</h1>
              <p className="mt-2 text-xl text-blue-600 font-bold">{formatINR(activeItem.price)}</p>
              <p className="mt-4 text-sm text-gray-600">Quality products delivered across India. Easy returns and secure checkout.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => addToCart(activeItem)} className="rounded-md bg-gray-900 px-4 py-2 text-white">Add to cart</button>
                <button onClick={() => { addToCart(activeItem); setView('checkout'); }} className="rounded-md bg-blue-600 px-4 py-2 text-white">Buy now</button>
              </div>
            </div>
          </section>
        )}

        {view === 'profile' && (
          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl font-semibold">Your account</h2>
            <p className="mt-2 text-gray-600 text-sm">Sign in to view orders, addresses and payment options.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border p-5">
                <h3 className="font-medium">Login</h3>
                <div className="mt-3 space-y-3">
                  <input placeholder="Email" className="w-full rounded border px-3 py-2" />
                  <input placeholder="Password" type="password" className="w-full rounded border px-3 py-2" />
                  <button className="w-full rounded-md bg-gray-900 py-2 text-white">Sign in</button>
                </div>
              </div>
              <div className="rounded-xl border p-5">
                <h3 className="font-medium">Create account</h3>
                <div className="mt-3 space-y-3">
                  <input placeholder="Name" className="w-full rounded border px-3 py-2" />
                  <input placeholder="Email" className="w-full rounded border px-3 py-2" />
                  <input placeholder="Password" type="password" className="w-full rounded border px-3 py-2" />
                  <button className="w-full rounded-md bg-blue-600 py-2 text-white">Sign up</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {view === 'checkout' && (
          <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-2xl font-semibold">Checkout</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="rounded-xl border p-5">
                  <h3 className="font-medium">Shipping address (India)</h3>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input placeholder="Full name" className="rounded border px-3 py-2" />
                    <input placeholder="Phone" className="rounded border px-3 py-2" />
                    <input placeholder="Address line 1" className="sm:col-span-2 rounded border px-3 py-2" />
                    <input placeholder="Address line 2" className="sm:col-span-2 rounded border px-3 py-2" />
                    <input placeholder="City" className="rounded border px-3 py-2" />
                    <input placeholder="State" className="rounded border px-3 py-2" />
                    <input placeholder="Pincode" className="rounded border px-3 py-2" />
                  </div>
                </div>
              </div>
              <aside className="rounded-xl border p-5 h-fit">
                <h3 className="font-medium">Order summary</h3>
                <div className="mt-3 space-y-2 text-sm">
                  {cart.map((it) => (
                    <div key={it.id} className="flex items-center justify-between">
                      <span className="line-clamp-1">{it.name} × {it.qty}</span>
                      <span className="font-semibold">{formatINR(it.price * it.qty)}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span>Total</span>
                    <span className="font-semibold">{formatINR(subtotal)}</span>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-md bg-green-600 py-2 text-white font-medium hover:bg-green-700">
                  Pay securely (Razorpay soon)
                </button>
              </aside>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
