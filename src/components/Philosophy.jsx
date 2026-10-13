import Reveal from './Reveal'

const traits = [
  {
    n: '01',
    title: 'À l’écoute',
    text: 'Chaque chantier commence par un échange sur site. Amaury prend le temps de comprendre vos arbres, votre jardin et ce que vous en attendez vraiment.',
  },
  {
    n: '02',
    title: 'Écologique',
    text: 'Taille raisonnée, respect du cycle de l’arbre, du sol et de la biodiversité. On n’intervient que le nécessaire, pour que le vivant dure.',
  },
  {
    n: '03',
    title: 'Réactif & honnête',
    text: 'Une SASU de proximité, joignable, à Jargeau et dans un rayon de 25 km. Un diagnostic clair, sans travaux inutiles.',
  },
]

export default function Philosophy() {
  return (
    <section id="histoire" className="bg-cream py-24 text-forest lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="section-kicker section-kicker-light">Notre histoire</p>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.08] sm:text-5xl">
              L&apos;histoire d&apos;Amaury Vidal
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-forest/65 sm:text-base">
              Amaury Vidal a fondé la SASU Arboria45 à Jargeau. Élagueur-grimpeur passionné, il
              allie le travail en hauteur à la conception paysagère — un métier de terrain, de
              patience et de respect du végétal.
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-forest/65 sm:text-base">
              L&apos;écologie guide chaque geste : préserver l&apos;arbre plutôt que le mutiler,
              travailler avec le sol et les saisons, limiter les coupes au juste besoin. De la
              cime à la racine, une approche simple, à l&apos;écoute, honnête et rapide.
            </p>
            <a href="#contact" className="btn-gold mt-10">
              Échanger avec Amaury
            </a>
          </Reveal>

          <div className="grid gap-0 divide-y divide-forest/10 lg:col-span-7">
            {traits.map(({ n, title, text }, index) => (
              <Reveal key={title} delay={index * 80} as="article">
                <div className="flex gap-6 py-7 first:pt-0">
                  <span className="font-serif text-xl text-blush-deep">{n}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{title}</h3>
                    <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-forest/65">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
