import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Megaphone,
  MousePointerClick,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const campaignCards = [
  {
    title: 'Ecommerce Conversions',
    desc: 'Personalized campaigns that boost sales with stronger targeting and optimized creatives.',
    icon: MousePointerClick,
  },
  {
    title: 'Lead Generation Campaigns',
    desc: 'Contextual targeting for quality leads, better connections, and higher conversions.',
    icon: Users,
  },
  {
    title: 'Brand Awareness Campaigns',
    desc: 'Build genuine connections with targeted marketing and memorable audience touchpoints.',
    icon: Megaphone,
  },
]

const leadServices = [
  'Paid Advertising Campaigns',
  'Landing Page Optimization',
  'Funnel Design & Strategy',
  'Email Marketing & Automation',
  'CRM Integration & Lead Management',
  'Audience Research & Targeting',
]

const brandLogos = ['Apple', 'TVS', 'Britannia', 'VI', 'OPPO', 'ITC']

export default function PerformanceMarketing({ dark }) {
  const root = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pm-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.pm-hero-art', {
        x: 60,
        opacity: 0,
        scale: 0.94,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.to('.pm-person', {
        y: -12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.pm-spark', {
        scale: 1.35,
        rotate: 12,
        opacity: 0.45,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'sine.inOut',
      })

      gsap.to('.pm-orbit', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 16,
        repeat: -1,
        ease: 'none',
      })

      gsap.from('.brand-logo', {
        scrollTrigger: {
          trigger: '.brand-section',
          start: 'top 80%',
        },
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out',
      })

      gsap.from('.pm-card', {
        scrollTrigger: {
          trigger: '.pm-cards',
          start: 'top 82%',
        },
        y: 44,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
      })

      gsap.from('.pm-section-block', {
        scrollTrigger: {
          trigger: '.pm-section-block',
          start: 'top 82%',
        },
        y: 42,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={root}
      className={`min-h-screen overflow-hidden ${
        dark ? 'bg-[#050811] text-white' : 'bg-white text-gray-950'
      }`}
    >
      <section
        className={`relative overflow-hidden ${
          dark
            ? 'bg-gradient-to-br from-[#050811] via-[#10172a] to-[#071b16]'
            : 'bg-gradient-to-br from-[#eaf1ff] via-[#e8f8f2] to-[#fff9ea]'
        }`}
      >
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div className="pm-copy">
            <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-teal-500">
              <Sparkles className="h-4 w-4" />
              Grow With Us
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Performance Marketing That Scales Real Business Growth
            </h1>

            <p className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Open Lens creates result-oriented, data-backed marketing campaigns
              that increase visibility, drive conversions, and maximize return on
              investment with measurable clarity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e81c7e] px-6 py-3 font-bold text-white transition hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/25"
              >
                Scale Your Results
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => document.getElementById('lead-generation')?.scrollIntoView({ behavior: 'smooth' })}
                className={`rounded-xl border px-6 py-3 font-bold transition ${
                  dark ? 'border-white/15 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                }`}
              >
                Explore Campaigns
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xl font-black">
                <Star className="h-7 w-7 fill-teal-400 text-teal-400" />
                Trustpilot
              </div>
              <div className={`h-9 w-px ${dark ? 'bg-white/20' : 'bg-black/20'}`} />
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">4.7/5</span>
                <span className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="pm-hero-art relative mx-auto w-full max-w-[560px]">
            <svg className="pm-orbit absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 text-[#e81c7e]/30" viewBox="0 0 420 420" fill="none">
              <circle cx="210" cy="210" r="160" stroke="currentColor" strokeWidth="2" strokeDasharray="10 16" />
              <circle cx="210" cy="50" r="8" fill="currentColor" />
              <circle cx="360" cy="235" r="6" fill="currentColor" />
            </svg>

            <div className="pm-person relative mx-auto overflow-hidden rounded-[48%_52%_46%_54%/52%_44%_56%_48%] bg-white/60 p-4 shadow-2xl shadow-pink-500/10 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
                alt="Performance marketing campaign specialist"
                className="h-[420px] w-full rounded-[42%_58%_46%_54%/52%_44%_56%_48%] object-cover object-center"
                loading="eager"
              />
            </div>

            <div className="absolute right-2 top-16 rounded-full border-2 border-black/70 bg-white px-5 py-2 text-sm font-black text-black shadow-lg">
              Join Us Today!
            </div>

            <Sparkles className="pm-spark absolute bottom-16 left-12 h-9 w-9 fill-yellow-400 text-yellow-400" />
            <Sparkles className="pm-spark absolute bottom-8 right-20 h-8 w-8 fill-yellow-400 text-yellow-400" />

            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <BarChart3 className="h-6 w-6 text-[#e81c7e]" />
              <div>
                <p className="text-xs font-bold text-gray-500">Ad Spend Optimized</p>
                <p className="text-lg font-black text-gray-950">Up to 76%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-black sm:text-4xl">
          Trusted by leading brands to influence what matters
        </h2>
        <p className={`mt-4 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          Strategic campaigns. Authentic reach. Real audience impact.
        </p>

        <div className="mt-14 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {brandLogos.map((brand) => (
            <div
              key={brand}
              className={`brand-logo rounded-2xl border px-4 py-6 text-2xl font-black transition hover:-translate-y-1 ${
                dark
                  ? 'border-white/10 bg-white/5 text-white'
                  : 'border-black/10 bg-white text-gray-950 shadow-sm'
              }`}
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="pm-cards mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Types of campaigns we run to achieve results
          </h2>
          <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our campaigns are powered by audience insights, creative testing,
            tracking, and continuous optimization.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {campaignCards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.title}
                className={`pm-card rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:border-pink-500/40'
                    : 'border-black/10 bg-white shadow-lg hover:border-pink-300'
                }`}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {card.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="lead-generation" className="pm-section-block mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className={`rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-[#f8fafc]'}`}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black sm:text-4xl">Lead Generation</h2>
              <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                Turn prospects into paying customers with data-driven lead
                generation strategies designed to deliver measurable results.
                We identify, attract, and convert high-quality leads aligned with
                your business goals.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {leadServices.map((service) => (
                <div
                  key={service}
                  className={`flex items-center gap-3 rounded-2xl p-4 ${
                    dark ? 'bg-[#050811]' : 'bg-white'
                  }`}
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-[#e81c7e]" />
                  <span className="text-sm font-bold">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pm-section-block mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Research & Strategy', 'We understand your market, audience, and competitors.', Search],
            ['Campaign Execution', 'High-performing ads and funnels are launched to capture quality leads.', Rocket],
            ['Optimization & Scaling', 'We analyse data to refine campaigns and maximize ROI.', Zap],
          ].map(([title, desc, Icon]) => (
            <article
              key={title}
              className={`rounded-3xl border p-6 ${
                dark ? 'border-white/10 bg-[#0b1020]' : 'border-black/10 bg-white shadow-lg'
              }`}
            >
              <Icon className="h-8 w-8 text-[#e81c7e]" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {desc}
              </p>
            </article>
          ))}
        </div>

        <div className={`mt-8 rounded-3xl border p-6 text-center sm:p-8 ${dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-[#f8fafc]'}`}>
          <ShieldCheck className="mx-auto h-9 w-9 text-[#e81c7e]" />
          <h3 className="mt-4 text-2xl font-black">Smart Scaling, Bigger Profits</h3>
          <p className={`mx-auto mt-3 max-w-3xl leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            We optimize campaigns, discover your best and worst performing
            audiences, reduce wasted spend, and help you scale without
            overburdening your resources.
          </p>
        </div>
      </section>
    </main>
  )
}
