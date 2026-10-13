import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const projects = [
  {
    id: 'a',
    n: '01',
    before: '/realisations/a1-avant.png',
    after: '/realisations/a2-apres.png',
  },
  {
    id: 'b',
    n: '02',
    before: '/realisations/b1-avant.png',
    after: '/realisations/b2-apres.png',
  },
  {
    id: 'c',
    n: '03',
    before: '/realisations/c2-avant.png',
    after: '/realisations/c1-apres.png',
  },
  {
    id: 'd',
    n: '04',
    before: '/realisations/d1-avant.png',
    after: '/realisations/d2-apres.png',
  },
  {
    id: 'e',
    n: '05',
    before: '/realisations/e1-avant.png',
    after: '/realisations/e2-apres.png',
  },
  {
    id: 'f',
    n: '06',
    before: '/realisations/f1-avant.png',
    after: '/realisations/f2-apres.png',
  },
]

const DESKTOP_QUERY = '(min-width: 1024px)'
const TABLET_UP_QUERY = '(min-width: 640px)'
const HOVER_QUERY = '(hover: hover) and (pointer: fine)'
const AUTOPLAY_MS = 5600
const SWIPE_PAUSE_MS = 8000

function useMedia(query, initial) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return initial
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setMatches(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [query])

  return matches
}

function ThinArrow({ direction }) {
  const isPrev = direction === 'prev'
  return (
    <svg width="16" height="44" viewBox="0 0 16 44" fill="none" aria-hidden="true">
      <path
        d={isPrev ? 'M14.5 1.5 L1.5 22 L14.5 42.5' : 'M1.5 1.5 L14.5 22 L1.5 42.5'}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BeforeAfterCard({ project, index, canHover }) {
  const [showAfter, setShowAfter] = useState(false)
  const label = showAfter ? 'Après' : 'Avant'

  useEffect(() => {
    if (canHover) {
      setShowAfter(false)
      return
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let intervalId
    const startId = window.setTimeout(() => {
      setShowAfter(true)
      intervalId = window.setInterval(() => {
        setShowAfter((current) => !current)
      }, 3400)
    }, 700 + index * 650)

    return () => {
      window.clearTimeout(startId)
      window.clearInterval(intervalId)
    }
  }, [canHover, index, project.id])

  return (
    <figure
      className="group relative isolate overflow-hidden"
      onMouseEnter={() => {
        if (canHover) setShowAfter(true)
      }}
      onMouseLeave={() => {
        if (canHover) setShowAfter(false)
      }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={project.after}
          alt={`Réalisation ${project.n}, après`}
          draggable="false"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe ${
            showAfter ? 'scale-105' : 'scale-100'
          }`}
        />
        <img
          src={project.before}
          alt={`Réalisation ${project.n}, avant`}
          draggable="false"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-luxe ${
            showAfter ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <p className="font-serif text-2xl text-blush">{project.n}</p>
        <p className="mt-2 inline-flex rounded-sm bg-blush/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-forest">
          {label}
        </p>
        <div className="mt-5 h-px w-8 bg-mist transition-all duration-700 ease-luxe group-hover:w-16" />
      </div>
    </figure>
  )
}

export default function Gallery() {
  const isDesktop = useMedia(DESKTOP_QUERY, true)
  const isTabletUp = useMedia(TABLET_UP_QUERY, true)
  const canHover = useMedia(HOVER_QUERY, true)
  const perPage = isTabletUp ? 3 : 1
  const pageCount = Math.ceil(projects.length / perPage)
  const pageCountRef = useRef(pageCount)
  pageCountRef.current = pageCount

  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState('next')
  const touchStart = useRef(null)
  const pauseUntil = useRef(0)
  const inView = useRef(true)
  const scrollerRef = useRef(null)

  const visible = projects.slice(page * perPage, page * perPage + perPage)

  const go = useCallback((nextDirection) => {
    setDirection(nextDirection)
    setPage((current) => {
      const count = pageCountRef.current
      const step = nextDirection === 'next' ? 1 : -1
      return (current + step + count) % count
    })
  }, [])

  const pauseAutoplay = useCallback(() => {
    pauseUntil.current = Date.now() + SWIPE_PAUSE_MS
  }, [])

  useEffect(() => {
    setPage((current) => Math.min(current, Math.max(pageCount - 1, 0)))
  }, [pageCount])

  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isDesktop) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined

    const intervalId = window.setInterval(() => {
      if (!inView.current) return
      if (Date.now() < pauseUntil.current) return
      go('next')
    }, AUTOPLAY_MS)

    return () => window.clearInterval(intervalId)
  }, [isDesktop, go])

  const onTouchStart = (event) => {
    const touch = event.changedTouches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (event) => {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.15) return
    pauseAutoplay()
    go(dx < 0 ? 'next' : 'prev')
  }

  return (
    <section id="realisations" className="bg-forest-deep py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-normal leading-[1.08] sm:text-5xl">
              Avant / Après
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-cream/65 sm:text-base">
              {isDesktop
                ? 'Survolez une photo pour révéler l’après — élagage, taille et aménagements autour de Jargeau.'
                : 'Glissez pour parcourir. Les photos défilent aussi toutes seules — élagage, taille et aménagements autour de Jargeau.'}
            </p>
          </Reveal>
        </div>

        <div
          ref={scrollerRef}
          className="relative mt-16 touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {isDesktop ? (
            <>
              <button
                type="button"
                onClick={() => go('prev')}
                aria-label="Réalisations précédentes"
                className="absolute -left-1 top-1/2 z-10 flex h-24 w-10 -translate-y-1/2 items-center justify-center text-cream/55 transition duration-500 hover:text-blush lg:-left-3"
              >
                <ThinArrow direction="prev" />
              </button>
              <button
                type="button"
                onClick={() => go('next')}
                aria-label="Réalisations suivantes"
                className="absolute -right-1 top-1/2 z-10 flex h-24 w-10 -translate-y-1/2 items-center justify-center text-cream/55 transition duration-500 hover:text-blush lg:-right-3"
              >
                <ThinArrow direction="next" />
              </button>
            </>
          ) : null}

          <div
            key={`${page}-${direction}-${perPage}`}
            className={`grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 ${
              isDesktop ? 'px-10 lg:px-12' : 'px-0'
            } ${direction === 'next' ? 'gallery-enter-next' : 'gallery-enter-prev'}`}
          >
            {visible.map((project, index) => (
              <BeforeAfterCard
                key={project.id}
                project={project}
                index={index}
                canHover={canHover}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3" role="tablist" aria-label="Pages de la galerie">
          {Array.from({ length: pageCount }, (_, index) => {
            const active = index === page
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Page ${index + 1}`}
                onClick={() => {
                  pauseAutoplay()
                  setDirection(index >= page ? 'next' : 'prev')
                  setPage(index)
                }}
                className={`h-px transition-all duration-500 ${
                  active ? 'w-10 bg-blush' : 'w-4 bg-cream/25 hover:bg-cream/50'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
