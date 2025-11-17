import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Particles from './components/Particles'
import Features from './components/Features'

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <section className="relative">
          {/* Particles background */}
          <div className="absolute inset-0"><Particles /></div>
          <Hero />
        </section>

        <Features />

        <section id="contact" className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to build your AI voice agent?</h2>
            <p className="mt-3 text-gray-600">Talk to our team to explore pilots, integrations and deployment timelines.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Full name" className="col-span-1 sm:col-span-1 rounded-full border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="email" placeholder="Work email" className="col-span-1 sm:col-span-1 rounded-full border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button className="col-span-1 sm:col-span-1 rounded-full bg-gray-900 text-white px-6 py-3 hover:bg-black transition">Request demo</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Aurora AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
