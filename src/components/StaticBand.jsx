import { staticBand } from '../data/club.js'
import { useReveal } from '../hooks/useReveal.js'

function withDots(items) {
  const parts = []
  items.forEach((item, i) => {
    parts.push(
      <span className="reveal-item" key={item}>
        {item}
      </span>
    )
    if (i < items.length - 1) {
      parts.push(<span className="dot reveal-item" key={`${item}-dot`} />)
    }
  })
  return parts
}

function withDotsPlain(items, prefix) {
  const parts = []
  items.forEach((item, i) => {
    parts.push(<span key={`${prefix}-${item}`}>{item}</span>)
    parts.push(<span className="dot" key={`${prefix}-${item}-dot`} />)
  })
  return parts
}

function StaticBand() {
  const ref = useReveal({ stagger: true, staggerDelay: 60 })

  return (
    <div className="static-band">
      <div className="static-band-inner serif reveal-group" ref={ref}>
        {withDots(staticBand)}
      </div>
      <div className="static-band-mobile" aria-hidden="true">
        <div className="static-band-mobile-track serif">
          {withDotsPlain(staticBand, 'a')}
          {withDotsPlain(staticBand, 'b')}
        </div>
      </div>
    </div>
  )
}

export default StaticBand
