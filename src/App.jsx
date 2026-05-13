import { useState, useEffect } from 'react'
import MarqueeBar from './components/MarqueeBar'
import Nav from './components/Nav'
import ProgressHero from './components/ProgressHero'
import StatStrip from './components/StatStrip'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import AuthApp from './components/auth/AuthApp'

const AUTH_SCREENS = ['signin', 'signup', 'signup-profile', 'signup-goals', 'forgot', 'forgot-sent', 'reset', 'reset-done', 'done']

function useHashRoute() {
  const [hash, setHash] = useState(() => (window.location.hash || '').replace('#', ''))
  useEffect(() => {
    const update = () => setHash((window.location.hash || '').replace('#', ''))
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const isAuth = AUTH_SCREENS.includes(hash)

  if (isAuth) return <AuthApp />

  return (
    <main>
      <MarqueeBar />
      <Nav />
      <ProgressHero />
      <StatStrip />
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  )
}
