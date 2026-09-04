import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const VIDEO_SRC = '/investing-final.mp4'

function Film() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const numRef = useReveal()
  const headRef = useReveal()
  const introRef = useReveal()
  const frameRef = useReveal()

  // React can set `muted` after insertion, which some browsers count as an
  // unmuted autoplay and block. Force it on the element before playing.
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function toggleSound() {
    const el = videoRef.current
    if (!el) return
    const next = !muted
    el.muted = next
    setMuted(next)
    if (!next) el.play().catch(() => {})
  }

  return (
    <section id="film">
      <div className="section-head">
        <div className="num mono reveal-fade" ref={numRef}>
          / 01 &middot; FILM
        </div>
        <div>
          <h2 className="reveal" ref={headRef}>
            The club, in <em>motion</em>.
          </h2>
          <p className="intro reveal" ref={introRef}>
            A short film on how we meet, research, and put capital to work.
          </p>
        </div>
      </div>

      <div className="film-frame reveal" ref={frameRef}>
        <video
          ref={videoRef}
          className="film-video"
          src={VIDEO_SRC}
          muted={muted}
          loop
          playsInline
          controls
          preload="none"
        />
        <button
          type="button"
          className="film-sound"
          onClick={toggleSound}
          aria-pressed={!muted}
        >
          <span aria-hidden="true">{muted ? '\u{1F507}' : '\u{1F50A}'}</span>
          <span className="film-sound-label mono">{muted ? 'Unmute' : 'Mute'}</span>
        </button>
      </div>
    </section>
  )
}

export default Film
