import { Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src="/hero-albizia.jpg"
        alt="Albizia en fleur, feuillage soyeux et inflorescences roses"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-forest-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/35 to-forest-deep/20" />

      <div className="hero-copy relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 lg:px-8 lg:pb-28">
        <p className="section-kicker text-blush">
          Conception paysagiste · Élagage · Arboriste grimpeur
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-[3.2rem] font-normal leading-[1.02] text-cream sm:text-7xl lg:text-[5.2rem]">
          Arboria45
        </h1>
        <p className="mt-3 font-serif text-2xl italic text-blush sm:text-3xl">
          De la cime à la racine
        </p>
        <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-cream/90 sm:text-base">
          Élagueur-grimpeur passionné et aménagement paysager à Jargeau et dans un rayon de 25 km.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="tel:+33637234405" className="btn-gold">
            <Phone size={14} />
            06 37 23 44 05
          </a>
          <a href="#contact" className="btn-outline">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  )
}
