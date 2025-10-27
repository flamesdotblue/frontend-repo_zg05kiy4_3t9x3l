import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Hero({ show3D, onToggle3D }) {
  return (
    <section className="relative h-[360px] sm:h-[440px] w-full overflow-hidden rounded-b-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0">
        {show3D ? (
          <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-gray-500">Loading 3D…</div>}>
            <Spline
              scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_60%)]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">India’s All‑in‑One Store</h1>
          <p className="mt-3 text-gray-600">Shop electronics, fashion, home, kitchen and more — curated picks at great prices in INR.</p>
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={onToggle3D}
              className="rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700"
            >
              {show3D ? 'Disable 3D (faster)' : 'Enable 3D Hero'}
            </button>
            <span className="text-xs text-gray-500">Toggle 3D to improve performance on slower devices.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
