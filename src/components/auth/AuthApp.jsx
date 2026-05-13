import { useState, useEffect, useMemo } from 'react'
import MarqueeBar from '../MarqueeBar'
import TopChrome from './TopChrome'
import SidePanel from './SidePanel'
import SignInScreen from './SignInScreen'
import SignUpAccount from './SignUpAccount'
import SignUpProfile from './SignUpProfile'
import SignUpGoals from './SignUpGoals'
import ForgotScreen from './ForgotScreen'
import ForgotSent from './ForgotSent'
import ResetScreen from './ResetScreen'
import DoneScreen from './DoneScreen'

const FLOWS = {
  signin:           { side: 'signin',  back: null },
  signup:           { side: 'signup',  back: 'signin' },
  'signup-profile': { side: 'signup',  back: 'signup' },
  'signup-goals':   { side: 'signup',  back: 'signup-profile' },
  forgot:           { side: 'forgot',  back: 'signin' },
  'forgot-sent':    { side: 'sent',    back: 'forgot' },
  reset:            { side: 'reset',   back: null },
  'reset-done':     { side: 'done',    back: null },
  done:             { side: 'done',    back: null },
}

export default function AuthApp() {
  const initial = (window.location.hash || '').replace('#', '') || 'signin'
  const [screen, setScreen] = useState(FLOWS[initial] ? initial : 'signin')

  const [email, setEmail] = useState('')
  const [signupState, setSignupState] = useState({ email: '', password: '', name: '', handle: '', goals: [] })
  const updateSignup = (patch) => setSignupState((s) => ({ ...s, ...patch }))

  useEffect(() => { window.location.hash = screen }, [screen])
  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || '').replace('#', '')
      if (FLOWS[h] && h !== screen) setScreen(h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [screen])

  const go = (s) => {
    if (s === 'signup' && !signupState.email && email) updateSignup({ email })
    if (s === 'signin' && signupState.email && !email) setEmail(signupState.email)
    setScreen(s)
  }

  const flow = FLOWS[screen]
  const onBack = flow.back ? () => go(flow.back) : null

  const quickSwitch = useMemo(() => {
    if (screen === 'signin') return { label: 'Sign up', to: 'signup' }
    if (screen.startsWith('signup')) return { label: 'Sign in', to: 'signin' }
    if (screen === 'forgot' || screen === 'forgot-sent') return { label: 'Sign in', to: 'signin' }
    return null
  }, [screen])

  const renderScreen = () => {
    switch (screen) {
      case 'signin':         return <SignInScreen key="signin" go={go} email={email} setEmail={setEmail} />
      case 'signup':         return <SignUpAccount key="su1" go={go} state={signupState} set={updateSignup} />
      case 'signup-profile': return <SignUpProfile key="su2" go={go} state={signupState} set={updateSignup} />
      case 'signup-goals':   return <SignUpGoals key="su3" go={go} state={signupState} set={updateSignup} />
      case 'forgot':         return <ForgotScreen key="fp" go={go} email={email} setEmail={setEmail} />
      case 'forgot-sent':    return <ForgotSent key="fs" go={go} email={email} />
      case 'reset':          return <ResetScreen key="rs" go={go} />
      case 'reset-done':     return <DoneScreen key="rd" go={go} message="Password set." />
      case 'done':           return <DoneScreen key="dn" go={go} message={signupState.name ? `Welcome, ${signupState.name}.` : "You're in."} />
      default:               return <SignInScreen key="signin-d" go={go} email={email} setEmail={setEmail} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MarqueeBar />
      <TopChrome onBack={onBack} />

      <div className="flex-1 px-4 md:px-10 pb-10 flex items-center justify-center">
        <div className="max-w-[1280px] w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-stretch">

          <div className="bg-paper border-2 border-ink rounded-[28px] auth-card p-7 md:p-10 relative flex flex-col min-h-[720px]">
            {quickSwitch && (
              <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2">
                <span className="font-mono text-[11px] tracking-wider uppercase text-ink/50">{
                  screen === 'signin' ? "Don't have one?" :
                  screen.startsWith('signup') ? 'Already striding?' :
                  'Know your password?'
                }</span>
                <button
                  onClick={() => go(quickSwitch.to)}
                  className="font-bold text-[13px] underline decoration-2 underline-offset-4 decoration-orange hover:text-orange transition-colors"
                >
                  {quickSwitch.label} →
                </button>
              </div>
            )}

            <div className="max-w-[460px] mx-auto pt-8 md:pt-2">
              {renderScreen()}
            </div>

            <div className="mt-auto pt-5 border-t border-ink/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 justify-center">
              <span className="font-mono text-[10px] tracking-widest uppercase text-ink/40">JUMP TO</span>
              {[
                ['signin', 'Sign in'],
                ['signup', 'Sign up'],
                ['forgot', 'Forgot'],
                ['forgot-sent', 'Sent'],
                ['reset', 'Reset'],
              ].map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => go(k)}
                  className={`font-mono text-[11px] tracking-wider uppercase ${screen === k || screen.startsWith(k) ? 'text-orange font-bold' : 'text-ink/50 hover:text-ink'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <SidePanel mode={FLOWS[screen].side} />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="tag inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-lime"></span>
            END-TO-END ENCRYPTED
          </span>
          <span className="tag inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange"></span>
            NO TRACKING. NO ADS.
          </span>
          <span className="tag inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-ink"></span>
            STUDENTS: 100% FREE
          </span>
        </div>
      </div>
    </div>
  )
}
