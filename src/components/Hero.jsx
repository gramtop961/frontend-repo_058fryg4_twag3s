import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth (they won't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white/90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700">
          AI voice agent platform
        </div>
        <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500">
          Conversational AI that sounds like your brand
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Build lifelike, real-time voice agents powered by cutting-edge models. Natural prosody, fast response and enterprise-grade controls.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="rounded-full bg-gray-900 text-white px-6 py-3 hover:bg-black transition">Start Free</a>
          <a href="#features" className="rounded-full border border-black/10 bg-white/70 backdrop-blur px-6 py-3 hover:border-black/30 transition">See Features</a>
        </div>
      </div>
    </section>
  )
}
