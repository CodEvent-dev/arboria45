import Reveal from './Reveal'

const domains = [
  {
    n: '01',
    title: 'Élagage & Arboriculture',
    text: 'Taille sanitaire, taille raisonnée, abattage, démontage et rognage de souche. Un travail soigné, en hauteur, pour la santé et la sécurité de vos arbres.',
    image:
      'https://images.unsplash.com/photo-1765064519883-651c506ec70d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    n: '02',
    title: 'Entretien & Taille Végétale',
    text: 'Taille de haies, arbustes et entretien régulier d’espaces verts. Un suivi précis pour conserver la structure, la densité et l’élégance de vos massifs.',
    image:
      'https://images.unsplash.com/photo-1754321871548-61bdbc6f1506?auto=format&fit=crop&w=1400&q=80',
  },
  {
    n: '03',
    title: 'Conception Paysagère',
    text: 'Création de jardins et aménagement sur-mesure. De l’esquisse à la plantation, un extérieur pensé pour votre terrain, vos usages et le climat du Loiret.',
    image: '/conception.jpg',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-linen py-24 text-forest lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-normal leading-[1.08] sm:text-5xl">Savoir-faire</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-forest/65 sm:text-base">
            Une approche d&apos;architecte paysagiste, de l&apos;esquisse à la livraison, pour des
            extérieurs durables, justes et profondément habités.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {domains.map(({ n, title, text, image }, index) => (
            <Reveal key={title} delay={index * 80} as="article">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-luxe hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 font-serif text-lg text-blush-deep">{n}</p>
              <h3 className="mt-1 font-serif text-2xl leading-tight">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-forest/65">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
