import { X } from "lucide-react";

export default function CartDrawer({ open, items, onClose }) {
  return (
    <div className={`fixed inset-0 z-30 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your cart</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-4 h-[calc(100%-160px)] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={`${it.id}-${idx}`} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{it.name}</p>
                  <p className="text-sm text-gray-500">${it.price}</p>
                </div>
                <span className="text-sm text-gray-600">x{it.qty}</span>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="font-semibold">${items.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2)}</span>
          </div>
          <button className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-white text-sm font-medium hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
