import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import Reveal from './Reveal'

const initial = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  project: 'Taille',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.lastName.trim()) next.lastName = 'Indiquez votre nom.'
    if (!form.firstName.trim()) next.firstName = 'Indiquez votre prénom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Email invalide.'
    if (!form.phone.trim()) next.phone = 'Un numéro facilite le rappel.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSent(true)
  }

  const fieldClass =
    'w-full appearance-none border-0 border-b border-forest/20 bg-transparent px-0 py-3 text-sm text-forest outline-none transition duration-500 placeholder:text-forest/35 focus:border-blush-deep'

  return (
    <section id="contact" className="bg-linen py-24 text-forest lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="section-kicker section-kicker-light">Contact</p>
            <h2 className="section-title">Un devis, un échange.</h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-forest/65">
              Décrivez votre besoin : taille, abattage, entretien ou création. Amaury vous
              répond rapidement pour un rendez-vous sur site.
            </p>
            <ul className="mt-12 space-y-4 text-[11px] uppercase tracking-[0.18em] text-forest/70">
              <li>
                <a href="tel:+33637234405" className="transition hover:text-blush-deep">
                  06 37 23 44 05
                </a>
              </li>
              <li>
                <a href="mailto:arboria45@hotmail.com" className="transition hover:text-blush-deep">
                  arboria45@hotmail.com
                </a>
              </li>
              <li>Jargeau &amp; 25 km aux alentours</li>
            </ul>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            {sent ? (
              <div className="flex min-h-[360px] flex-col items-start justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-blush-deep text-forest">
                  <Check size={22} />
                </span>
                <h3 className="mt-8 font-serif text-3xl">Demande bien reçue</h3>
                <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-forest/65">
                  Merci {form.firstName}. Nous revenons vers vous très vite pour convenir
                  d&apos;un rendez-vous sur site.
                </p>
                <button
                  type="button"
                  className="mt-10 text-[11px] uppercase tracking-[0.28em] text-blush-deep hover:text-forest"
                  onClick={() => {
                    setSent(false)
                    setForm(initial)
                  }}
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-forest/50">
                    Nom
                    <input
                      className={`${fieldClass} mt-2`}
                      value={form.lastName}
                      onChange={update('lastName')}
                      autoComplete="family-name"
                    />
                    {errors.lastName && (
                      <span className="mt-1 block text-[11px] font-medium normal-case tracking-normal text-copper">
                        {errors.lastName}
                      </span>
                    )}
                  </label>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-forest/50">
                    Prénom
                    <input
                      className={`${fieldClass} mt-2`}
                      value={form.firstName}
                      onChange={update('firstName')}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <span className="mt-1 block text-[11px] font-medium normal-case tracking-normal text-copper">
                        {errors.firstName}
                      </span>
                    )}
                  </label>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-forest/50">
                    E-mail
                    <input
                      type="email"
                      className={`${fieldClass} mt-2`}
                      value={form.email}
                      onChange={update('email')}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span className="mt-1 block text-[11px] font-medium normal-case tracking-normal text-copper">
                        {errors.email}
                      </span>
                    )}
                  </label>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-forest/50">
                    Téléphone
                    <input
                      type="tel"
                      className={`${fieldClass} mt-2`}
                      value={form.phone}
                      onChange={update('phone')}
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <span className="mt-1 block text-[11px] font-medium normal-case tracking-normal text-copper">
                        {errors.phone}
                      </span>
                    )}
                  </label>
                </div>
                <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-forest/50">
                  Type de projet
                  <select
                    className={`${fieldClass} mt-2`}
                    value={form.project}
                    onChange={update('project')}
                  >
                    <option>Taille</option>
                    <option>Abattage</option>
                    <option>Entretien</option>
                    <option>Création</option>
                  </select>
                </label>
                <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-forest/50">
                  Précisions
                  <textarea
                    rows={3}
                    className={`${fieldClass} mt-2 resize-none`}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Arbres concernés, accès, délai souhaité…"
                  />
                </label>
                <button type="submit" className="btn-ink">
                  Envoyer ma demande
                  <Send size={14} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
