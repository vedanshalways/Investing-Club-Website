import { joinSteps } from '../data/club.js'
import { useReveal } from '../hooks/useReveal.js'

const FORM_URL =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=60t_icBLTkKwk4gBajiPCDyU8M5CCSVLuQbd6ka97F9UNVdLRlQ2R0dOVjkzUzVBSFIwQjRBSUdKTC4u'

function Join() {
  const headRef = useReveal()
  const ctaRef = useReveal()

  return (
    <div className="join" id="join">
      <div className="join-inner">
        <div className="reveal" ref={headRef}>
          <h2>
            Join the <em>club</em>.
          </h2>
          <p>
            No experience, no application. Just show up during EC3 and bring a stock idea,
            even a rough one.
          </p>
          <ul className="join-bullets">
            {joinSteps.map((step) => (
              <li key={step.num}>
                <b className="mono">{step.num}</b>
                <span>{step.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal join-cta-card" ref={ctaRef}>
          <span className="eyebrow">Contact</span>
          <div className="join-cta-title serif">
            Have <em>questions</em>?
          </div>
          <p>
            Send them over using the form below and an officer will get back to you before the
            next meeting.
          </p>
          <a href={FORM_URL} target="_blank" rel="noreferrer" className="btn btn-orange">
            Contact Us &#8599;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Join
