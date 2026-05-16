import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  Palette,
  Code2,
  TrendingUp,
  Star,
  Radio,
  Search,
  Share2,
  MousePointerClick,
  BadgeCheck,
  MonitorCog,
  Globe2,
  Smartphone,
  PlugZap,
  Layers3,
  LifeBuoy,
  Film,
  Video,
  PenTool,
  MessageSquareQuote,
  BarChart3,
  ShieldAlert,
  Users,
  Newspaper,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Lead Generation & Performance Marketing",
    desc: "High-intent campaigns built to capture qualified leads and turn ad spend into measurable growth.",
    icon: TrendingUp,
    color: "from-violet-600 to-fuchsia-600",
    items: [
      { name: "Meta Ads", detail: "campaign setup, creative testing, retargeting", icon: Share2 },
      { name: "Targeted Advertising", detail: "audience segmentation and conversion focused campaigns", icon: Target },
      { name: "LinkedIn Lead Generation Ads", detail: "B2B targeting, forms, outreach funnels", icon: Users },
      { name: "PPC", detail: "pay-per-click campaigns optimized for ROI", icon: MousePointerClick },
    ],
  },
  {
    id: 2,
    title: "Social Media Marketing",
    desc: "Platform-specific social campaigns that build visibility, engagement, and community trust.",
    icon: Share2,
    color: "from-blue-600 to-cyan-500",
    items: [
      { name: "Facebook Ads", detail: "awareness, traffic, leads, and retargeting", icon: Share2 },
      { name: "Instagram Ads", detail: "reels, stories, feed ads, creator-led growth", icon: Video },
      { name: "LinkedIn Ads", detail: "B2B campaigns for decision makers", icon: Users },
      { name: "Twitter Ads", detail: "brand visibility and campaign amplification", icon: Share2 },
      { name: "YouTube SEO & Marketing", detail: "video optimization, ads, channel growth", icon: Video },
    ],
  },
  {
    id: 3,
    title: "Google Ads",
    desc: "Search, display, app, and lead generation campaigns tuned for high-quality conversions.",
    icon: Megaphone,
    color: "from-emerald-600 to-teal-500",
    items: [
      { name: "PPC", detail: "campaign structure, bidding, keyword strategy", icon: MousePointerClick },
      { name: "CPC", detail: "cost-per-click optimization and budget control", icon: BarChart3 },
      { name: "Lead Generation", detail: "forms, calls, landing pages, conversion tracking", icon: Users },
      { name: "Display Ads", detail: "visual remarketing and awareness campaigns", icon: MonitorCog },
      { name: "Search Ads", detail: "intent-based search campaign management", icon: Search },
      { name: "App Downloading Ads", detail: "install campaigns for Android and iOS apps", icon: Smartphone },
    ],
  },
  {
    id: 4,
    title: "Branding",
    desc: "Creative identity, visual communication, and content production that makes your brand memorable.",
    icon: Palette,
    color: "from-pink-600 to-orange-500",
    items: [
      { name: "Logo Design", detail: "brand mark, typography, and identity direction", icon: PenTool },
      { name: "Poster Design", detail: "campaign posters, event creatives, print-ready assets", icon: Palette },
      { name: "AI Video Design", detail: "AI-assisted video concepts and motion content", icon: Video },
      { name: "Film Shooting", detail: "brand films, product shoots, campaign videos", icon: Film },
      { name: "Documentary Shoot", detail: "story-led production and long-form content", icon: Video },
      { name: "Graphic Design", detail: "social creatives, ads, brochures, brand assets", icon: Layers3 },
    ],
  },
  {
    id: 5,
    title: "SEO",
    desc: "Search visibility systems covering technical health, content structure, local presence, and authority.",
    icon: Search,
    color: "from-lime-600 to-emerald-500",
    items: [
      { name: "On Page SEO", detail: "content optimization, meta tags, internal linking", icon: Search },
      { name: "Off Page SEO", detail: "authority building, backlinks, citations", icon: Globe2 },
      { name: "SEO Audit", detail: "technical, content, and ranking opportunity audit", icon: BadgeCheck },
      { name: "Local SEO", detail: "Google Business Profile, local keywords, maps visibility", icon: Target },
      { name: "Technical SEO", detail: "speed, indexing, schema, crawl fixes", icon: MonitorCog },
    ],
  },
  {
    id: 6,
    title: "Review and Services",
    desc: "Customer feedback systems that improve credibility, trust, product quality, and sales conversion.",
    icon: Star,
    color: "from-amber-500 to-orange-600",
    items: [
      { name: "Customer Feedback", detail: "gathering, managing, and publishing customer feedback", icon: MessageSquareQuote },
      { name: "Ratings & Testimonials", detail: "credibility assets that increase sales confidence", icon: Star },
      { name: "Verified Review Acquisition", detail: "collecting feedback from actual users for authenticity", icon: BadgeCheck },
      { name: "Monitoring and Reporting", detail: "analyzing feedback to identify issues and improve product quality", icon: BarChart3 },
    ],
  },
  {
    id: 7,
    title: "Public Relations",
    desc: "Strategic communication, media presence, and reputation management for long-term authority.",
    icon: Radio,
    color: "from-rose-600 to-pink-600",
    items: [
      { name: "Press Releases", detail: "launch announcements and news distribution", icon: Newspaper },
      { name: "Press Conference", detail: "event messaging, media coordination, public announcements", icon: Users },
      { name: "Media Outreach", detail: "publication pitching and journalist communication", icon: Megaphone },
      { name: "Reputation Building", detail: "trust, credibility, and authority management", icon: Star },
      { name: "Media Relations", detail: "ongoing relationships with media and publications", icon: Radio },
      { name: "Crisis Management", detail: "response strategy and brand protection", icon: ShieldAlert },
    ],
  },
  {
    id: 8,
    title: "Software Development & Management",
    desc: "Modern software systems, websites, apps, integrations, and long-term technical support.",
    icon: Code2,
    color: "from-indigo-600 to-sky-500",
    items: [
      { name: "CRM", detail: "customer management workflows and sales pipelines", icon: Users },
      { name: "ERP", detail: "business process and operations management systems", icon: MonitorCog },
      { name: "Website Development", detail: "responsive websites, landing pages, and web apps", icon: Globe2 },
      { name: "App Development", detail: "Android, iOS, and hybrid application development", icon: Smartphone },
      { name: "API Development and Integration", detail: "custom APIs, third-party tools, payment gateways", icon: PlugZap },
      { name: "Full Stack Development", detail: "frontend, backend, database, and deployment", icon: Code2 },
      { name: "UI/UX Design", detail: "wireframes, prototypes, design systems, product flows", icon: Layers3 },
      { name: "Support and Maintenance", detail: "bug fixes, updates, monitoring, and improvements", icon: LifeBuoy },
    ],
  },
];

export default function Services() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero h1", {
        y: 55,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero p", {
        y: 25,
        opacity: 0,
        duration: 0.75,
        delay: 0.25,
        ease: "power2.out",
      });

      gsap.utils.toArray(".service-card").forEach((card, i) => {
        const glow = card.querySelector(".card-glow");
        const icon = card.querySelector(".main-icon");
        const ring = card.querySelector(".svg-ring");
        const line = card.querySelector(".svg-line");
        const dots = card.querySelectorAll(".svg-dot");

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
          },
          y: 56,
          opacity: 0,
          scale: 0.96,
          duration: 0.75,
          delay: i * 0.035,
          ease: "power2.out",
        });

        gsap.to(ring, {
          rotate: 360,
          transformOrigin: "50% 50%",
          duration: 18 + i,
          repeat: -1,
          ease: "none",
        });

        gsap.fromTo(
          line,
          { strokeDashoffset: 260 },
          {
            strokeDashoffset: 0,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );

        gsap.to(dots, {
          scale: 1.35,
          opacity: 0.3,
          transformOrigin: "50% 50%",
          duration: 1.1,
          repeat: -1,
          yoyo: true,
          stagger: 0.18,
          ease: "sine.inOut",
        });

        const enter = () => {
          gsap.to(glow, { opacity: 0.32, duration: 0.25 });
          gsap.to(icon, { scale: 1.08, rotate: 4, duration: 0.25, ease: "power2.out" });
        };

        const leave = () => {
          gsap.to(glow, { opacity: 0, duration: 0.25 });
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.25, ease: "power2.out" });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });

      gsap.utils.toArray(".service-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 94%",
          },
          x: -14,
          opacity: 0,
          duration: 0.42,
          ease: "power2.out",
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="min-h-screen overflow-hidden bg-[#fafafa] text-zinc-900 dark:bg-[#0a0a0f] dark:text-white"
    >
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(124,58,237,0.16),transparent_60%)]" />
      </div>

      <section className="hero mx-auto max-w-7xl px-4 pb-10 pt-24 text-center sm:px-6 md:pb-14 md:pt-28">
        <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
          <span className="h-2 w-2 rounded-full bg-[#e81c7e]" />
          PREMIUM SERVICES
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-7xl">
          Our{" "}
          <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          A professional agency engineered for scale. We combine performance
          marketing, brand craft, public relations, and software development.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-24">
        <div className="columns-1 gap-5 space-y-5 md:columns-2 lg:gap-6 lg:space-y-6 xl:columns-3">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <article key={s.id} className="service-card group relative mb-5 break-inside-avoid lg:mb-6">
                <div className={`card-glow absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r ${s.color} opacity-0 blur-2xl transition-opacity`} />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/85 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-900/75 sm:p-6 lg:p-7">
                  <svg className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-20" viewBox="0 0 180 180" fill="none" aria-hidden="true">
                    <circle className="svg-ring" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 12" />
                    <path className="svg-line" d="M24 112C48 56 92 148 156 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="260" />
                    <circle className="svg-dot" cx="40" cy="46" r="5" fill="currentColor" />
                    <circle className="svg-dot" cx="136" cy="132" r="6" fill="currentColor" />
                    <circle className="svg-dot" cx="148" cy="44" r="4" fill="currentColor" />
                  </svg>

                  <div className={`main-icon relative mb-5 h-11 w-11 rounded-2xl bg-gradient-to-br ${s.color} p-[1.5px] sm:h-12 sm:w-12`}>
                    <div className="grid h-full w-full place-items-center rounded-[0.9rem] bg-white dark:bg-zinc-900">
                      <Icon className="h-5 w-5 text-zinc-900 dark:text-white sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <h3 className="relative text-xl font-bold leading-tight sm:text-2xl">{s.title}</h3>

                  <p className="relative mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.desc}</p>

                  <div className="relative mt-5 space-y-2.5">
                    {s.items.map((it) => {
                      const Ico = it.icon;

                      return (
                        <div key={it.name} className="service-item group/item -mx-2 flex items-start gap-3 rounded-xl p-2 transition hover:bg-black/5 dark:hover:bg-white/5">
                          <div className="mt-0.5 shrink-0 rounded-lg bg-black/5 p-1.5 transition group-hover/item:bg-violet-500/15 dark:bg-white/5">
                            <Ico className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                          </div>

                          <div className="min-w-0">
                            <p className="break-words text-sm font-semibold leading-snug">{it.name}</p>

                            {it.detail && (
                              <p className="mt-0.5 break-words text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                                {it.detail}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center md:mt-20">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 p-[1px]">
            <div className="rounded-2xl bg-[#fafafa] px-5 py-6 dark:bg-[#0a0a0f] sm:px-8">
              <h4 className="text-lg font-bold sm:text-xl">
                Need a custom growth system?
              </h4>

              <p className="mt-1 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
                We architect integrated playbooks across marketing, branding,
                PR, and software development.
              </p>

              <button className="mt-4 h-11 rounded-xl bg-zinc-900 px-6 font-semibold text-white transition hover:scale-105 dark:bg-white dark:text-black">
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
