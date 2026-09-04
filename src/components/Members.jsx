import { members } from '../data/club.js'
import { useReveal } from '../hooks/useReveal.js'

function Members() {
  const numRef = useReveal()
  const headRef = useReveal()
  const introRef = useReveal()
  const gridRef = useReveal({ stagger: true })

  return (
    <section id="members">
      <div className="section-head">
        <div className="num mono reveal-fade" ref={numRef}>
          / 04 &middot; LEADERSHIP
        </div>
        <div>
          <h2 className="reveal" ref={headRef}>
            Meet the <em>officers</em>.
          </h2>
          <p className="intro reveal" ref={introRef}>
            The 2025&ndash;26 Investing Club leadership team.
          </p>
        </div>
      </div>
      <div className="spot-grid reveal-group" ref={gridRef}>
        {members.map((m) => (
          <div className={`spot reveal-item ${m.advisor ? 'advisor' : ''}`} key={m.name}>
            <div
              className="ph"
              style={
                m.photo
                  ? {
                      backgroundImage: `url(${m.photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : undefined
              }
            >
              {!m.photo && <div className="ph-soon mono">Photo coming soon</div>}
              <div className="role mono">{m.role}</div>
            </div>
            <div className="body">
              <h5>{m.name}</h5>
              <div className="grade mono">{m.grade}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Members
