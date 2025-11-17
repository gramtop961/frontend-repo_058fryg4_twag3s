import { Brain, Mic, Zap, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Cognitive Understanding',
    desc: 'Foundation models that understand context, sentiment and intent in real time.',
  },
  {
    icon: Mic,
    title: 'Real-time Voice',
    desc: 'Low-latency speech-to-speech with natural prosody and emotions.',
  },
  {
    icon: Zap,
    title: 'Fast & Scalable',
    desc: 'Edge-optimized inference serving millions of conversations per day.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SOC2-ready controls, red-teaming and observability built-in.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/40 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">Built for voice-first AI</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Design, deploy and monitor multimodal agents across phone, web and on-device experiences.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-full grid place-items-center bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
