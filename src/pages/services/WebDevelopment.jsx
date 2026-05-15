import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export default function WebDevelopment({ dark }) {
  const navigate = useNavigate()
  const heroRef = useRef(null)
  const cardsRef = useRef(null)

  const features = [
    { t: "React & Next.js", d: "SSR, ISR, App Router — 90+ Lighthouse score", i: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { t: "MERN Stack", d: "MongoDB, Express, React, Node — scalable APIs", i: "M5 12h14M12 5l7 7-7 7" },
    { t: "Headless CMS", d: "Sanity / Strapi / Contentful integration", i: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" },
    { t: "Core Web Vitals 90+", d: "LCP <2.5s, CLS <0.1, INP optimized", i: "M13 10V3L4 14h7v7l9-11h-7z" },
    { t: "E-commerce", d: "Shopify Headless, Stripe, Razorpay", i: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { t: "PWA & Mobile", d: "Installable, offline-first, iOS & Android builds", i: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  ]

  const process = [
    { n: "01", t: "Discover", d: "Goals, users, sitemap in 3 days" },
    { n: "02", t: "Design System", d: "Figma UI kit + prototypes" },
    { n: "03", t: "Build", d: "Sprints, CI/CD, staging previews" },
    { n: "04", t: "Launch & Grow", d: "Analytics, A/B, performance tuning" },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.children, { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
      gsap.from('.wd-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${dark ? 'border-gray-800 bg-white/5' : 'border-gray-200 bg-black/5'}`}>

      <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        
        {/* Hero */}
        <section ref={heroRef} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${dark? 'border-gray-800 bg-white/5' : 'border-gray-200 bg-black/5'}">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide">WEBSITE & APP DEVELOPMENT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
            Build fast.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Ship faster.</span>
          </h1>
          <p className={`mt-6 text-lg md:text-xl leading-relaxed max-w-2xl ${dark? 'text-gray-400' : 'text-gray-600'}`}>
            React, Next.js aur MERN se hum production-ready websites aur apps banate hain jo Core Web Vitals 90+ hit karte hain.
          </p>
          <div className="flex gap-3 mt-8">
            <button onClick={() => navigate('/contact')} className="px-6 py-3 rounded-xl bg-[#e81c7e] text-white font-semibold hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20 transition-all">Start Project</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})} className={`px-6 py-3 rounded-xl border font-medium transition ${dark? 'border-gray-700 hover:bg-white/5' : 'border-gray-300 hover:bg-black/5'}`}>See Stack</button>
          </div>
        </section>

        {/* Tech Cards */}
        <section id="features" ref={cardsRef} className="mt-24">
          <h2 className="text-2xl font-bold mb-8">What you get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.t} className={`wd-card group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${dark? 'bg-[#0b1020]/70 border-gray-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10' : 'bg-white border-gray-200 hover:shadow-xl hover:border-indigo-300'}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={f.i}/></svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{f.t}</h3>
                <p className={`text-sm ${dark? 'text-gray-400' : 'text-gray-600'}`}>{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8">Our 4-step process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {process.map(p => (
              <div key={p.n} className={`p-6 rounded-2xl ${dark? 'bg-white/5' : 'bg-gray-900/5'}`}>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-2">{p.n}</div>
                <div className="font-semibold mb-1">{p.t}</div>
                <div className={`text-sm ${dark? 'text-gray-400' : 'text-gray-600'}`}>{p.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={`mt-24 p-10 rounded-3xl text-center border ${dark? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-gray-800' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100'}`}>
          <h3 className="text-3xl font-black mb-3">Ready to launch in 4 weeks?</h3>
          <p className={`${dark? 'text-gray-300' : 'text-gray-600'} mb-6`}>MVP to scale — hum design, dev aur growth ek team me dete hain.</p>
          <button onClick={() => navigate('/contact')} className="px-8 py-3 rounded-xl bg-[#e81c7e] text-white font-semibold hover:scale-105 transition-transform">Get Free Audit</button>
        </section>

      </div>
    </div>
  )
}