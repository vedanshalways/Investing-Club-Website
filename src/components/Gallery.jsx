import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const modules = import.meta.glob('../assets/gallery/*.jpg', { eager: true, import: 'default' })
const photos = Object.keys(modules)
  .sort()
  .map((key) => modules[key])

const AUTOPLAY_MS = 1000

function Gallery() {
  const trackRef = useRef(null)
  const [autoplay, setAutoplay] = useState(true)
  const numRef = useReveal()
  const headRef = useReveal()
  const introRef = useReveal()
  const wrapRef = useReveal()

  function cardStep(el) {
    const card = el.querySelector('.gallery-item')
    return (card ? card.getBoundingClientRect().width : 300) + 16
  }

  function scrollByCard(direction) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * cardStep(el), behavior: 'smooth' })
  }

  function handleArrowClick(direction) {
    setAutoplay(false)
    scrollByCard(direction)
  }

  useEffect(() => {
    if (!autoplay) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: cardStep(el), behavior: 'smooth' })
      }
    }, AUTOPLAY_MS)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section id="gallery">
      <div className="section-head">
        <div className="num mono reveal-fade" ref={numRef}>
          / 05 &middot; GALLERY
        </div>
        <div>
          <h2 className="reveal" ref={headRef}>
            Moments from the <em>club</em>.
          </h2>
          <p className="intro reveal" ref={introRef}>
            Meetings, workshops, and milestones, a few snapshots from this year.
          </p>
        </div>
      </div>

      <div className="gallery-wrap reveal" ref={wrapRef}>
        <button
          type="button"
          className="gallery-nav prev"
          onClick={() => handleArrowClick(-1)}
          aria-label="Previous photo"
        >
          &#8592;
        </button>
        <div className="gallery-track" ref={trackRef}>
          {photos.map((src, i) => (
            <div className="gallery-item" key={src}>
              <img src={src} alt={`Investing Club photo ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="gallery-nav next"
          onClick={() => handleArrowClick(1)}
          aria-label="Next photo"
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}

export default Gallery
