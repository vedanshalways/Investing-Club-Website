import { aboutCards } from '../data/club.js'
import { useReveal } from '../hooks/useReveal.js'

function About() {
  const numRef = useReveal()
  const headRef = useReveal()
  const introRef = useReveal()
  const gridRef = useReveal({ stagger: true })

  return (
    <section id="about">
      <div className="section-head">
        <div className="num mono reveal-fade" ref={numRef}>
          / 02 &middot; ABOUT
        </div>
        <div>
          <h2 className="reveal" ref={headRef}>
            A hands-on education in <em>markets</em>.
          </h2>
          <p className="intro reveal" ref={introRef}>
            The Investing Club isn't a finance lecture. Members run real paper portfolios, pitch
            ideas to each other, and collectively vote on moves for the club's group fund.
            Everyone learns by doing.
          </p>
        </div>
      </div>
      <div className="about-grid reveal-group" ref={gridRef}>
        {aboutCards.map((card) => (
          <div className="about-card reveal-item" key={card.title}>
            <div>
              <div className="ic mono">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
