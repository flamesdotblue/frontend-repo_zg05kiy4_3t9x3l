import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">AutoMart</h4>
            <p className="text-sm text-gray-600">
              High-performance parts and accessories. Built for speed. Backed by
              service.
            </p>
          </div>
          <div>
            <h5 className="font-medium mb-2">Shop</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Wheels & tires</li>
              <li>Body & aero</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Support</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help center</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Warranty</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Company</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500">
          © {new Date().getFullYear()} AutoMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
