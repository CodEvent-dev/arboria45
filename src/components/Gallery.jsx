import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

const projects = [
  {
    id: 'a',
    n: '01',
    before: '/realisations/a2-avant.png',
    after: '/realisations/a1-apres.png',
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

const PER_PAGE = 3
const PAGE_COUNT = Math.ceil(projects.length / PER_PAGE)

function useCanHover() {
  const [canHover, setCanHover] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const onChange = () => setCanHover(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return canHover
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
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.32em] text-cream">{label}</p>
        <div className="mt-5 h-px w-8 bg-mist transition-all duration-700 ease-luxe group-hover:w-16" />
      </div>
    </figure>
  )
}

export default function Gallery() {
  const canHover = useCanHover()
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState('next')
  const touchX = useRef(null)

  const visible = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  const go = (nextDirection) => {
    setDirection(nextDirection)
    setPage((current) => {
      const step = nextDirection === 'next' ? 1 : -1
      return (current + step + PAGE_COUNT) % PAGE_COUNT
    })
  }

  return (
    <section id="realisations" className="bg-ink py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="section-kicker">Chantiers</p>
            <div className="gold-rule mt-6" />
            <h2 className="mt-8 font-serif text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
              Galerie de réalisations
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-cream/65 sm:text-base">
              Chaque chantier se lit en deux temps : l&apos;état des lieux, puis le jardin après
              intervention.
            </p>
          </Reveal>
        </div>

        <div
          className="relative mt-16"
          onTouchStart={(event) => {
            touchX.current = event.changedTouches[0].clientX
          }}
          onTouchEnd={(event) => {
            if (touchX.current == null) return
            const delta = event.changedTouches[0].clientX - touchX.current
            if (delta > 48) go('prev')
            if (delta < -48) go('next')
            touchX.current = null
          }}
        >
          <button
            type="button"
            onClick={() => go('prev')}
            aria-label="Réalisations précédentes"
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-cream/20 text-cream transition duration-500 hover:border-blush hover:text-blush"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => go('next')}
            aria-label="Réalisations suivantes"
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-cream/20 text-cream transition duration-500 hover:border-blush hover:text-blush"
          >
            <ChevronRight size={20} />
          </button>

          <div
            key={`${page}-${direction}`}
            className={`grid grid-cols-1 gap-4 px-14 sm:grid-cols-3 sm:gap-5 sm:px-16 ${
              direction === 'next' ? 'gallery-enter-next' : 'gallery-enter-prev'
            }`}
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
          {Array.from({ length: PAGE_COUNT }, (_, index) => {
            const active = index === page
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Page ${index + 1}`}
                onClick={() => {
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
