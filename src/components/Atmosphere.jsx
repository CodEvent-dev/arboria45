import { useEffect, useRef, useState } from 'react'

export default function Atmosphere() {
  const ring = useRef(null)
  const [progress, setProgress] = useState(0)
  const [veiled, setVeiled] = useState(true)

  useEffect(() => {
    const id = window.setTimeout(() => setVeiled(false), 60)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    const el = ring.current
    if (!el) return

    document.documentElement.classList.add('has-cursor-ring')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let frame

    const onMove = (event) => {
      tx = event.clientX
      ty = event.clientY
      el.classList.add('is-on')
    }

    const tick = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame = requestAnimationFrame(tick)
    return () => {
      document.documentElement.classList.remove('has-cursor-ring')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className={`intro-veil ${veiled ? '' : 'is-lifted'}`} aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div ref={ring} className="cursor-ring hidden lg:block" aria-hidden="true" />
    </>
  )
}
