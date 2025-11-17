import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold tracking-tight">Aurora AI</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#solutions" className="hover:text-gray-900 transition">Solutions</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a
            href="#get-started"
            className="ml-4 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-black transition"
          >
            Get Started
          </a>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2 text-sm">
            <a href="#features" className="block">Features</a>
            <a href="#solutions" className="block">Solutions</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#contact" className="block">Contact</a>
            <a href="#get-started" className="block font-medium">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
