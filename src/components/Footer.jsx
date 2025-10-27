export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-500" />
            <span className="font-semibold text-gray-900">VibeShop</span>
          </div>
          <p className="text-gray-600">Modern ecommerce built for speed and delightful shopping.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">New arrivals</a></li>
            <li><a href="#" className="hover:text-gray-900">Best sellers</a></li>
            <li><a href="#" className="hover:text-gray-900">Gift cards</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Help center</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} VibeShop. All rights reserved.</p>
          <p>Secure payments • Fast checkout</p>
        </div>
      </div>
    </footer>
  );
}
