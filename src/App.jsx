import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Career from './pages/Career'
import Why from './pages/Why'
import Contact from './pages/Contact'

// SERVICE PAGES
import Seo from './pages/services/Seo'
import WebDevelopment from './pages/services/WebDevelopment'
import Branding from './pages/services/Branding'
import UiUx from './pages/services/UiUx'
import PerformanceMarketing from './pages/services/PerformanceMarketing'
import SocialMediaMarketing from './pages/services/SocialMediaMarketing'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [dark, setDark] = useState(false)

  const location = useLocation()

  const isHome = location.pathname === '/'

  // Theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)

    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Load Theme
  useEffect(() => {
    const saved = localStorage.getItem('theme')

    if (saved) {
      setDark(saved === 'dark')
    }
  }, [])

  // Page Animation
  useEffect(() => {
    window.scrollTo(0, 0)

    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    )
  }, [location.pathname])

  return (
    <div
      className={`${
        dark
          ? 'bg-[#050811] text-white'
          : 'bg-[#f8fafc] text-gray-900'
      } min-h-screen transition-colors duration-500`}
    >
      <Navbar
        dark={dark}
        setDark={setDark}
        isHome={isHome}
      />

      <div className={`page-content ${!isHome ? 'pt-[70px]' : ''}`}>
        <Routes>
          {/* MAIN */}
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/career" element={<Career dark={dark} />} />
          <Route path="/why" element={<Why dark={dark} />} />
          <Route path="/contact" element={<Contact dark={dark} />} />

          {/* SERVICES PAGE */}
          <Route path="/services" element={<Services dark={dark} />} />

          {/* SERVICE DETAIL PAGES */}
          <Route
            path="/services/seo"
            element={<Seo dark={dark} />}
          />

          <Route
            path="/services/web-development"
            element={<WebDevelopment dark={dark} />}
          />

          <Route
            path="/services/branding"
            element={<Branding dark={dark} />}
          />

          <Route
            path="/services/ui-ux"
            element={<UiUx dark={dark} />}
          />

          <Route
            path="/services/performance-marketing"
            element={<PerformanceMarketing dark={dark} />}
          />

          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketing dark={dark} />}
          />
        </Routes>
      </div>
    </div>
  )
}


// import { useEffect, useState } from 'react'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import Career from './pages/Career'
// import Why from './pages/Why'
// import Contact from './pages/Contact'
// import ServiceDetail from './pages/ServiceDetail'


// gsap.registerPlugin(ScrollTrigger)

// export default function App() {
//   const [dark, setDark] = useState(false)
//   const location = useLocation()
//   const isHome = location.pathname === '/' // ← add

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', dark)
//     localStorage.setItem('theme', dark ? 'dark' : 'light')
//   }, [dark])

//   useEffect(() => {
//     const saved = localStorage.getItem('theme')
//     if (saved) setDark(saved === 'dark')
//   }, [])

//   // Page transition animation
//   useEffect(() => {
//     window.scrollTo(0, 0)
//     gsap.fromTo('.page-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
//   }, [location.pathname])

//   // Global text split
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       document.querySelectorAll('.split').forEach(h => {
//         if (!h.dataset.split) {
//           h.dataset.split = '1'
//           h.innerHTML = [...h.textContent].map(c => `<span class="char inline-block">${c === ' ' ? '&nbsp;' : c}</span>`).join('')
//         }
//       })
//     })
//     return () => ctx.revert()
//   }, [location.pathname])

//   return (
//     <div className={`${dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-900'} antialiased transition-colors duration-500 min-h-screen`}>
//       <Navbar dark={dark} setDark={setDark} isHome={isHome} /> {/* ← isHome pass */}
//       <div className={`page-content ${!isHome? 'pt-[70px]' : ''}`}> {/* ← Home par NO padding */}
//         <Routes>
//           <Route path="/" element={<Home dark={dark} />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/:slug" element={<ServiceDetail dark={dark} />} />
//           <Route path="/about" element={<About dark={dark} />} />
//           <Route path="/career" element={<Career dark={dark} />} />
//           <Route path="/why" element={<Why dark={dark} />} />
//           <Route path="/contact" element={<Contact dark={dark} />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }
