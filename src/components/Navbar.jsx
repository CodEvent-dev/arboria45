import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#expertise', label: 'Savoir-faire' },
  { href: '#histoire', label: 'Histoire' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#avis', label: 'Avis' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`nav-glass fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500 ${
        open ? 'is-open' : scrolled ? 'is-scrolled' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8 lg:py-4">
        <a
          href="#accueil"
          className="group flex items-center drop-shadow-[0_2px_12px_rgba(18,38,28,0.55)]"
          aria-label="Arboria45, retour à l'accueil"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo_arboria45.png"
            alt=""
            className="h-14 w-auto transition-transform duration-700 ease-luxe group-hover:scale-105 sm:h-[4.5rem]"
          />
        </a>

        <ul className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-outline hidden px-6 py-2.5 sm:inline-flex">
            Prendre RDV
          </a>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 border border-cream/40 px-3 text-[10px] uppercase tracking-[0.28em] text-cream drop-shadow lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-forest-deep/90 px-6 py-8 backdrop-blur-2xl lg:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-serif text-3xl text-cream"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a href="#contact" className="btn-gold w-full" onClick={() => setOpen(false)}>
                Prendre RDV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
