import { useEffect, useRef } from 'react'

// Lightweight particles background (no external deps)
export default function Particles({ className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const dprRef = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const resize = () => {
      dprRef.current = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.offsetWidth * dprRef.current
      canvas.height = canvas.offsetHeight * dprRef.current
      ctx.scale(dprRef.current, dprRef.current)
      init()
    }

    const init = () => {
      const count = Math.min(Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 16000), 120)
      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: 1 + Math.random() * 2,
      }))
    }

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      ctx.clearRect(0, 0, width, height)

      // Gradient aura tint
      const grad = ctx.createRadialGradient(width/2, height/2, 50, width/2, height/2, Math.max(width, height)/1.2)
      grad.addColorStop(0, 'rgba(124, 58, 237, 0.08)') // purple-600
      grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.06)') // blue-500
      grad.addColorStop(1, 'rgba(251, 146, 60, 0.04)') // orange-400
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      const ps = particlesRef.current
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)'
        ctx.fill()

        // connect
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 120})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />
}
