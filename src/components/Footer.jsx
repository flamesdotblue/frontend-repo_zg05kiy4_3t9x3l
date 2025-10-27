import React from 'react';

function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-gray-900">Shop</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Kitchen</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Help</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Customer Service</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} All‑in‑One Store • Built for India</div>
    </footer>
  );
}

export default Footer;
