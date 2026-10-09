export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-cream/55">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-5">
          <img src="/logo_arboria45.png" alt="" className="h-16 w-auto sm:h-20" />
          <div>
            <p className="font-serif text-xl text-cream">Arboria 45</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em]">Architecte Paysagiste · Jargeau</p>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em]">
          © {new Date().getFullYear()} Arboria 45. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
