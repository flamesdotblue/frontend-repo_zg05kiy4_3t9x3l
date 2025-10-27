import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('home'); // home | cart | profile | item | admin | checkout
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const subtotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const renderHome = () => (
    <>
      <Hero />
      <ProductGrid
        onAddToCart={(p) => addToCart(p)}
        onOpenItem={(p) => {
          setSelectedItem(p);
          setView('item');
        }}
      />
    </>
  );

  const renderCart = () => (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded-xl bg-white">
                <img src={item.image} alt={item.name} className="h-24 w-24 rounded object-cover" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => updateQty(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => updateQty(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="lg:col-span-1 p-6 border rounded-xl bg-white h-fit">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setView('checkout')}
              className="mt-4 w-full py-3 rounded-md bg-black text-white font-medium hover:bg-gray-900"
            >
              Proceed to checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );

  const renderProfile = () => (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Your Profile</h1>
      <div className="space-y-6">
        <section className="p-6 border rounded-xl bg-white">
          <h2 className="font-medium mb-2">Account</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="border rounded-md px-3 py-2" placeholder="Full name" />
            <input className="border rounded-md px-3 py-2" placeholder="Email" />
          </div>
          <button className="mt-4 px-4 py-2 rounded-md bg-black text-white text-sm">Save</button>
        </section>
        <section className="p-6 border rounded-xl bg-white">
          <h2 className="font-medium mb-2">Addresses</h2>
          <div className="text-sm text-gray-600">Add your shipping and billing addresses.</div>
        </section>
      </div>
    </main>
  );

  const renderItem = () => (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {!selectedItem ? (
        <div className="text-gray-600">No item selected.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border">
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{selectedItem.name}</h1>
            <div className="mt-2 text-xl font-semibold">${selectedItem.price.toFixed(2)}</div>
            <p className="mt-4 text-gray-600">
              Built for enthusiasts who demand more grip, more downforce, and more thrill. Premium
              materials, tested on track.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => addToCart(selectedItem)}
                className="px-5 py-2.5 rounded-md bg-black text-white hover:bg-gray-900"
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  addToCart(selectedItem);
                  setView('checkout');
                }}
                className="px-5 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );

  const renderAdmin = () => (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Admin Panel</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <section className="p-6 border rounded-xl bg-white">
          <h2 className="font-medium mb-2">Login</h2>
          <input className="border rounded-md px-3 py-2 w-full mb-2" placeholder="Email" />
          <input className="border rounded-md px-3 py-2 w-full mb-3" placeholder="Password" type="password" />
          <button className="px-4 py-2 rounded-md bg-black text-white text-sm w-full">Sign in</button>
        </section>
        <section className="p-6 border rounded-xl bg-white md:col-span-2">
          <h2 className="font-medium mb-2">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <button className="px-4 py-3 rounded-md border hover:bg-gray-50 text-left">Add product</button>
            <button className="px-4 py-3 rounded-md border hover:bg-gray-50 text-left">Manage inventory</button>
            <button className="px-4 py-3 rounded-md border hover:bg-gray-50 text-left">Orders</button>
            <button className="px-4 py-3 rounded-md border hover:bg-gray-50 text-left">Customers</button>
          </div>
        </section>
      </div>
    </main>
  );

  const renderCheckout = () => (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <section className="md:col-span-2 space-y-6">
          <div className="p-6 border rounded-xl bg-white">
            <h2 className="font-medium mb-3">Shipping address</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="border rounded-md px-3 py-2" placeholder="Full name" />
              <input className="border rounded-md px-3 py-2" placeholder="Phone" />
              <input className="border rounded-md px-3 py-2 sm:col-span-2" placeholder="Street address" />
              <input className="border rounded-md px-3 py-2" placeholder="City" />
              <input className="border rounded-md px-3 py-2" placeholder="Postal code" />
            </div>
          </div>
          <div className="p-6 border rounded-xl bg-white">
            <h2 className="font-medium mb-3">Payment</h2>
            <p className="text-sm text-gray-600">Razorpay integration will appear here.</p>
            <button className="mt-4 px-5 py-2.5 rounded-md bg-black text-white">Pay securely</button>
          </div>
        </section>
        <aside className="p-6 border rounded-xl bg-white h-fit">
          <h3 className="font-medium mb-3">Order summary</h3>
          <div className="space-y-2 text-sm">
            {cart.map((i) => (
              <div key={i.id} className="flex items-center justify-between">
                <span>
                  {i.name} × {i.qty}
                </span>
                <span>${(i.price * i.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </main>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar onNavigate={setView} cartCount={cart.reduce((a, c) => a + c.qty, 0)} />

      {view === 'home' && renderHome()}
      {view === 'cart' && renderCart()}
      {view === 'profile' && renderProfile()}
      {view === 'item' && renderItem()}
      {view === 'admin' && renderAdmin()}
      {view === 'checkout' && renderCheckout()}

      <Footer />
    </div>
  );
}

export default App;
