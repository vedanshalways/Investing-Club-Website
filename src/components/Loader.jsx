import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.jpg'

function Loader() {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    let p = 0
    const tick = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4)
      setPct(Math.floor(p))
      if (barRef.current) barRef.current.style.setProperty('--pct', p / 100)
      if (p >= 100) clearInterval(tick)
    }, 120)

    const hideTimer = setTimeout(() => setDone(true), 1600)

    return () => {
      clearInterval(tick)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div id="loader" className={done ? 'done' : ''} aria-hidden={done}>
      <div className="loader-brand">
        <img src={logo} alt="" />
        <div className="t">Investing Club</div>
      </div>
      <div className="loader-quote">
        &ldquo;The stock market is a device for transferring money from the impatient to the patient.&rdquo;
      </div>
      <div className="loader-bar-wrap mono">
        <span>LOADING</span>
        <span className="bar" ref={barRef} />
        <span>{String(pct).padStart(2, '0')}%</span>
      </div>
    </div>
  )
}

export default Loader
