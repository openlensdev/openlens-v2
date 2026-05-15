import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export default function UnderConstruction({ dark, title = 'This Page Is Under Construction' }) {
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.uc-content > *', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.to('.gear-one', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 7,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.gear-two', {
        rotate: -360,
        transformOrigin: '50% 50%',
        duration: 5,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.hook', {
        y: 14,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.spark', {
        scale: 1.35,
        opacity: 0.25,
        transformOrigin: '50% 50%',
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: 'power1.inOut',
      })

      gsap.to('.bar-fill', {
        width: '78%',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })

      gsap.to(svgRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={pageRef}
      className={`min-h-screen flex items-center ${
        dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-900'
      }`}
    >
      <section className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="uc-content">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${
              dark
                ? 'border-gray-800 bg-white/5 text-gray-300'
                : 'border-gray-200 bg-white text-gray-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#e81c7e] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Work in progress
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            {title}
          </h1>

          <p
            className={`mt-5 text-lg leading-relaxed max-w-xl ${
              dark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Hum is page par kaam kar rahe hain. Jaldi hi yahan full design,
            content aur service details live ho jayengi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 rounded-xl bg-[#e81c7e] text-white font-semibold hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              Back Home
            </button>

            <button
              onClick={() => navigate('/contact')}
              className={`px-6 py-3 rounded-xl border font-semibold transition ${
                dark
                  ? 'border-gray-700 hover:bg-white/5'
                  : 'border-gray-300 hover:bg-black/5'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 520 420"
            className="w-full max-w-[520px]"
            role="img"
            aria-label="Under construction animation"
          >
            <defs>
              <linearGradient id="ucPink" x1="0" x2="1">
                <stop offset="0%" stopColor="#e81c7e" />
                <stop offset="100%" stopColor="#6b21a8" />
              </linearGradient>

              <linearGradient id="ucBlue" x1="0" x2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>

              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="18" stdDeviation="16" floodOpacity="0.22" />
              </filter>
            </defs>

            <rect
              x="58"
              y="64"
              width="404"
              height="270"
              rx="28"
              fill={dark ? '#0b1020' : '#ffffff'}
              stroke={dark ? '#1f2937' : '#e5e7eb'}
              filter="url(#shadow)"
            />

            <rect x="88" y="96" width="344" height="42" rx="14" fill={dark ? '#111827' : '#f1f5f9'} />
            <circle cx="112" cy="117" r="6" fill="#ef4444" />
            <circle cx="134" cy="117" r="6" fill="#f59e0b" />
            <circle cx="156" cy="117" r="6" fill="#22c55e" />

            <rect x="100" y="170" width="230" height="16" rx="8" fill={dark ? '#1f2937' : '#e2e8f0'} />
            <rect x="100" y="204" width="310" height="16" rx="8" fill={dark ? '#1f2937' : '#e2e8f0'} />
            <rect x="100" y="238" width="180" height="16" rx="8" fill={dark ? '#1f2937' : '#e2e8f0'} />

            <rect x="100" y="286" width="250" height="14" rx="7" fill={dark ? '#111827' : '#e5e7eb'} />
            <rect className="bar-fill" x="100" y="286" width="120" height="14" rx="7" fill="url(#ucPink)" />

            <g className="hook">
              <path d="M372 28v82" stroke="url(#ucBlue)" strokeWidth="10" strokeLinecap="round" />
              <path d="M338 110h68l-13 58h-42z" fill="url(#ucBlue)" />
              <path d="M352 168c0 28 40 28 40 0" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
            </g>

            <g className="gear-one" transform="translate(354 230)">
              <circle r="44" fill="url(#ucPink)" />
              <circle r="18" fill={dark ? '#0b1020' : '#ffffff'} />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
                <rect
                  key={r}
                  x="-7"
                  y="-62"
                  width="14"
                  height="24"
                  rx="5"
                  fill="url(#ucPink)"
                  transform={`rotate(${r})`}
                />
              ))}
            </g>

            <g className="gear-two" transform="translate(250 316)">
              <circle r="34" fill="url(#ucBlue)" />
              <circle r="13" fill={dark ? '#0b1020' : '#ffffff'} />
              {[0, 60, 120, 180, 240, 300].map((r) => (
                <rect
                  key={r}
                  x="-6"
                  y="-49"
                  width="12"
                  height="20"
                  rx="5"
                  fill="url(#ucBlue)"
                  transform={`rotate(${r})`}
                />
              ))}
            </g>

            <g className="spark">
              <path d="M82 54l8 18 18 8-18 8-8 18-8-18-18-8 18-8z" fill="#f59e0b" />
            </g>

            <g className="spark">
              <path d="M438 262l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#22c55e" />
            </g>

            <g className="spark">
              <path d="M434 52l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#e81c7e" />
            </g>
          </svg>
        </div>
      </section>
    </main>
  )
}
