export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest-deep text-cream/55">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-5">
          <img src="/logo_arboria45.png" alt="" className="h-16 w-auto sm:h-20" />
          <div>
            <p className="font-serif text-xl text-cream">Arboria45</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em]">De la cime à la racine · Jargeau</p>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em]">
          <p>
            <a href="tel:+33637234405" className="transition hover:text-blush">
              06 37 23 44 05
            </a>
            {' · '}
            <a href="mailto:arboria45@hotmail.com" className="transition hover:text-blush">
              arboria45@hotmail.com
            </a>
          </p>
          <p className="mt-3">Jargeau &amp; 25 km aux alentours</p>
          <p className="mt-3">© {new Date().getFullYear()} SASU Arboria45. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
