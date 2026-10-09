const HERO_IMAGE =
  'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  return (
    <section id="accueil" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Jardin contemporain soigneusement dessiné, allées de buis et pelouse sculptée"
        className="kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/35 to-ink/[0.92]" />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-ink via-ink/80 to-transparent" />

      <div className="hero-copy relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 lg:px-8 lg:pb-28">
        <p className="section-kicker drop-shadow-[0_2px_12px_rgba(11,18,14,0.85)]">Jargeau · Loiret</p>
        <h1 className="mt-7 max-w-4xl font-serif text-[2.6rem] font-normal leading-[1.08] text-cream drop-shadow-[0_4px_28px_rgba(11,18,14,0.75)] sm:text-6xl lg:text-[5.1rem]">
          L&apos;art de sublimer vos espaces extérieurs.
        </h1>
        <p className="mt-8 max-w-lg text-sm font-light leading-relaxed tracking-wide text-cream drop-shadow-[0_2px_16px_rgba(11,18,14,0.9)] sm:text-base">
          Conception, création et aménagement de paysages sur-mesure pour particuliers et
          professionnels exigeants.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-gold">
            Demander une étude
          </a>
          <a href="#realisations" className="btn-outline">
            Découvrir
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <a
        href="#expertise"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-cream/70 transition-colors hover:text-blush md:flex"
      >
        Explorer
        <span className="relative h-12 w-px overflow-hidden bg-cream/20">
          <span className="scroll-line absolute inset-x-0 top-0 h-full origin-top bg-blush" />
        </span>
      </a>
    </section>
  )
}
