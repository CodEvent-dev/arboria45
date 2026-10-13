import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const values = [
  {
    title: 'Écoute',
    text: 'Un diagnostic sur site, à votre rythme, pour des préconisations qui collent à vos arbres et à votre jardin.',
  },
  {
    title: 'Honnêteté',
    text: 'Pas de travaux superflus. Amaury dit ce qui est nécessaire — et ce qui peut attendre.',
  },
  {
    title: 'Réactivité',
    text: 'Une entreprise locale, joignable, qui se déplace à Jargeau et dans un rayon de 25 km.',
  },
]

const reviews = [
  {
    name: 'Claire M.',
    place: 'Jargeau',
    text: 'Intervention soignée sur un grand chêne. Amaury a tout expliqué, le chantier était nickel et rapide.',
  },
  {
    name: 'Pierre L.',
    place: 'Sandillon',
    text: 'Taille de haies impeccable et conseils honnêtes. On sent le métier, de la cime à la racine.',
  },
  {
    name: 'Nathalie R.',
    place: 'Saint-Denis-en-Val',
    text: 'Abattage délicat près de la maison, tout a été sécurisé. Réponse rapide, devis clair.',
  },
]

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.2 2.8-2.5 3.7v3h4c2.4-2.2 3.5-5.4 3.5-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1 7.9-2.9l-4-3c-1.1.7-2.4 1.2-3.9 1.2-3 0-5.6-2-6.5-4.7H1.3v3.1C3.3 21.3 7.4 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.5 14.6c-.2-.7-.4-1.4-.4-2.6s.1-1.9.4-2.6V6.3H1.3C.5 8 .1 9.9.1 12s.4 4 1.2 5.7l4.2-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3.3.6 4.5 1.7l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.3 2.7 1.3 6.3l4.2 3.1C6.4 6.8 9 4.8 12 4.8z"
      />
    </svg>
  )
}

export default function Atmosphere() {
  const ring = useRef(null)
  const [progress, setProgress] = useState(0)
  const [veiled, setVeiled] = useState(true)

  useEffect(() => {
    const id = window.setTimeout(() => setVeiled(false), 60)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    const el = ring.current
    if (!el) return

    document.documentElement.classList.add('has-cursor-ring')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let frame

    const onMove = (event) => {
      tx = event.clientX
      ty = event.clientY
      el.classList.add('is-on')
    }

    const tick = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame = requestAnimationFrame(tick)
    return () => {
      document.documentElement.classList.remove('has-cursor-ring')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className={`intro-veil ${veiled ? '' : 'is-lifted'}`} aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div ref={ring} className="cursor-ring hidden lg:block" aria-hidden="true" />

      <section id="avis" className="bg-linen py-24 text-forest lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-normal leading-[1.08] sm:text-5xl">
              Valeurs & avis
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-forest/65 sm:text-base">
              Une SASU de proximité, notée par celles et ceux qui nous font confiance autour de
              Jargeau.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100} as="article">
                <div className="h-full bg-cream px-7 py-8">
                  <p className="font-serif text-xl text-blush-deep">{value.title}</p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-forest/65">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={120 + index * 100} as="article">
                <div className="h-full bg-cream px-7 py-8">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GoogleMark />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-forest/45">Google</span>
                    </div>
                    <p className="text-blush-deep" aria-label="5 étoiles">
                      ★★★★★
                    </p>
                  </div>
                  <p className="mt-5 text-sm font-light leading-relaxed text-forest/70">“{review.text}”</p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-forest/50">
                    {review.name} · {review.place}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
