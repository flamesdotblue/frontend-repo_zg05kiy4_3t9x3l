import { ShoppingCart, User } from "lucide-react";

export default function Navbar({ onCartClick, onAuthClick }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-500" />
          <span className="font-semibold text-gray-900">VibeShop</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#new" className="hover:text-gray-900">New</a>
          <a href="#popular" className="hover:text-gray-900">Popular</a>
          <a href="#deals" className="hover:text-gray-900">Deals</a>
          <a href="/admin" className="hover:text-gray-900 font-medium">Admin</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onAuthClick}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
          <button
            onClick={onCartClick}
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
