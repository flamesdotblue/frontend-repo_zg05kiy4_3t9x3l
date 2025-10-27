export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-indigo-700 bg-indigo-100 rounded-full px-3 py-1">End of Season</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Discover products you'll love
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Curated collections, delightful design, and smooth checkout. Your modern shopping experience starts here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">Shop now</a>
              <a href="#deals" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">View deals</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white grid grid-cols-2 gap-1 p-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-gray-100" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl px-4 py-3">
              <p className="text-sm font-semibold">Free shipping over $50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
