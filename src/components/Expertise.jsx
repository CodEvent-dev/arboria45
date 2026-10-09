import Reveal from './Reveal'

const domains = [
  {
    n: '01',
    title: 'Conception & Plans 3D',
    text: 'Création de jardins sur-mesure. Nous traduisons votre terrain, vos usages et vos envies en un plan lisible, élégant et prêt à réaliser.',
    image:
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    n: '02',
    title: 'Aménagements paysagers',
    text: 'Plantations, terrasses, bassins, clôtures. Une mise en œuvre soignée, des matériaux nobles et une palette végétale pensée pour le Loiret.',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
  },
  {
    n: '03',
    title: 'Entretien & Suivi',
    text: 'Prestations haut de gamme pour préserver la structure, la santé du végétal et l’équilibre de votre jardin au fil des saisons.',
    image:
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-ink py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Savoir-faire</p>
          <div className="gold-rule mt-6" />
          <h2 className="mt-8 font-serif text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Nos domaines d&apos;expertise
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-cream/65 sm:text-base">
            Une approche d&apos;architecte paysagiste, de l&apos;esquisse à la livraison, pour des
            extérieurs durables, raffinés et profondément habités.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-5">
          {domains.map(({ n, title, text, image }, index) => (
            <Reveal key={title} delay={index * 140} as="article">
              <div className="group relative isolate overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-serif text-2xl text-blush">{n}</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight lg:text-[1.7rem]">{title}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-cream/70 max-md:line-clamp-3 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-700 md:ease-luxe md:group-hover:max-h-40 md:group-hover:opacity-100">
                    {text}
                  </p>
                  <div className="mt-6 h-px w-8 bg-mist transition-all duration-700 ease-luxe group-hover:w-16" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
