import React from 'react';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';

const Navbar = ({ onNavigate, cartCount = 0 }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-md hover:bg-gray-100 text-black"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer select-none text-xl font-semibold tracking-tight"
          >
            AutoMart
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search performance parts, accessories, brands..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('admin')}
            className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-black"
          >
            Admin
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="relative p-2 rounded-md hover:bg-gray-100 text-black"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="relative p-2 rounded-md hover:bg-gray-100 text-black"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-black text-white text-xs grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
