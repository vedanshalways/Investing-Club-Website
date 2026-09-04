import { useEffect, useRef, useState } from 'react'
import { tickerFallback } from '../data/club.js'

const LABELS = { SPY: 'S&P 500', QQQ: 'NASDAQ', 'BTC-USD': 'BTC', GLD: 'GOLD' }
const REFRESH_MS = 60000
const FETCH_TIMEOUT_MS = 8000
const SPEED_PX_PER_SEC_DESKTOP = 140
const SPEED_PX_PER_SEC_MOBILE = 110
const MOBILE_BREAKPOINT = 640

function formatQuotes(results) {
  return results.map((q) => {
    const label = LABELS[q.symbol] || q.symbol
    const price =
      q.price >= 1000
        ? q.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : q.price.toFixed(2)
    const pct = (q.changePercent >= 0 ? '+' : '') + q.changePercent.toFixed(2)
    return [label, price, pct]
  })
}

function Ticker() {
  const [quotes, setQuotes] = useState(tickerFallback)
  const trackRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function refresh() {
      try {
        const res = await fetch('/api/quotes', { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) })
        if (!res.ok) return
        const data = await res.json()
        if (!cancelled && data.results?.length) {
          setQuotes(formatQuotes(data.results))
        }
      } catch {
        // keep showing whatever we currently have (fallback or last-good live data)
      }
    }

    refresh()
    const interval = setInterval(refresh, REFRESH_MS)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  // Drive the scroll with a fixed pixel offset per frame instead of a CSS
  // percentage transform, so live data changing the track's width (different
  // digit counts) can never cause the loop to jump mid-animation.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let halfWidth = track.scrollWidth / 2
    const resizeObserver = new ResizeObserver(() => {
      halfWidth = track.scrollWidth / 2
    })
    resizeObserver.observe(track)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => resizeObserver.disconnect()
    }

    let offset = 0
    let lastTime = performance.now()
    let rafId = requestAnimationFrame(tick)

    function tick(now) {
      const dt = (now - lastTime) / 1000
      lastTime = now
      const speed = window.innerWidth <= MOBILE_BREAKPOINT ? SPEED_PX_PER_SEC_MOBILE : SPEED_PX_PER_SEC_DESKTOP
      offset += speed * dt
      if (halfWidth > 0 && offset >= halfWidth) {
        offset -= halfWidth
      }
      track.style.transform = `translateX(-${offset}px)`
      rafId = requestAnimationFrame(tick)
    }

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [])

  const items = [...quotes, ...quotes]

  return (
    <div className="tickerbar">
      <div className="track">
        <div className="ticker-move" ref={trackRef}>
          {items.map(([symbol, price, change], i) => {
            const up = parseFloat(String(change).replace(',', '')) >= 0
            return (
              <span className="tick" key={`tick-${i}`}>
                <b>{symbol}</b>
                <span>{price}</span>
                <span className={`pct ${up ? 'up' : 'dn'}`}>
                  <span className="arrow">{up ? '▲' : '▼'}</span> {change}%
                </span>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Ticker
