import Reveal from './Reveal'

const reasons = [
  {
    n: '01',
    title: 'Proximité locale',
    text: 'Basés à Jargeau, nous connaissons les sols, le climat et les usages du Loiret. Un interlocuteur unique, disponible, qui se déplace sur votre terrain.',
  },
  {
    n: '02',
    title: 'Regard d’architecte',
    text: 'Composition, proportions, lumière et végétal : chaque projet est dessiné comme un espace de vie, pas comme un simple décor.',
  },
  {
    n: '03',
    title: 'Sur-mesure, de bout en bout',
    text: 'Étude, plan, suivi de chantier et entretien. Une méthode claire, un calendrier maîtrisé, un jardin qui vous ressemble vraiment.',
  },
]

const CHAPTER_IMAGE =
  'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2400&q=80'

export default function Philosophy() {
  return (
    <section id="philosophie" className="relative text-cream">
      <div className="relative isolate min-h-[70vh] overflow-hidden lg:min-h-[80vh]">
        <img src={CHAPTER_IMAGE} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/50 to-ink/85" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center lg:min-h-[80vh] lg:px-8">
          <Reveal>
            <p className="section-kicker">Philosophie</p>
            <div className="gold-rule mt-6" />
            <blockquote className="mt-10 font-serif text-3xl font-normal italic leading-[1.2] sm:text-5xl lg:text-[3.6rem]">
              Des jardins durables, raffinés, et pensés pour être vécus — pas seulement photographiés.
            </blockquote>
          </Reveal>
        </div>
      </div>

      <div className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="section-kicker">Pourquoi nous</p>
              <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.08] sm:text-5xl">
                Une exigence locale.
              </h2>
              <p className="mt-6 text-sm font-light leading-relaxed text-cream/65 sm:text-base">
                Arboria 45 allie la rigueur d&apos;un architecte paysagiste à la chaleur d&apos;une
                entreprise locale. Chaque projet est composé comme un espace de vie.
              </p>
              <a href="#contact" className="btn-gold mt-10">
                Parler de votre projet
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>

            <div className="grid gap-0 divide-y divide-white/10 lg:col-span-7">
              {reasons.map(({ n, title, text }, index) => (
                <Reveal key={title} delay={index * 120} as="article">
                  <div className="group flex gap-6 py-8 first:pt-0">
                    <span className="font-serif text-xl text-blush">{n}</span>
                    <div>
                      <h3 className="font-serif text-2xl">{title}</h3>
                      <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-cream/65">{text}</p>
                      <div className="mt-5 h-px w-0 bg-mist transition-all duration-700 ease-luxe group-hover:w-16" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
