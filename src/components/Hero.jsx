import { stats } from '../data/club.js'
import { useCountUp } from '../hooks/useCountUp.js'

function StatValue({ stat }) {
  const [value, ref] = useCountUp(stat.count ? stat.n : 0)

  return (
    <div className="n serif" ref={ref}>
      {stat.count ? value : stat.n}
      {stat.suffix && <span style={{ fontSize: '22px', color: 'var(--orange)' }}>{stat.suffix}</span>}
    </div>
  )
}

function Hero() {
  const heroItems = [
    'eyebrow',
    'h1',
    'dek',
    'ctas',
    'stats',
  ]
  const delay = (key) => ({ animationDelay: `${300 + heroItems.indexOf(key) * 120}ms` })

  return (
    <div className="hero">
      <div className="hero-blobs" aria-hidden="true">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
        <div className="hero-blob hero-blob-c" />
      </div>
      <div className="hero-grid">
        <div>
          <div className="eyebrow hero-anim" style={{ marginBottom: 24, ...delay('eyebrow') }}>
            A Student-Led Market Society
          </div>
          <h1 className="hero-anim" style={delay('h1')}>
            Learn the
            <br />
            market. <em>Build</em>
            <br />
            the portfolio.
          </h1>
          <p className="dek hero-anim" style={delay('dek')}>
            We're a group of students studying how capital markets work: trading paper
            portfolios on Quantaify, debating picks, and managing a collective fund together.
          </p>
          <div className="hero-ctas hero-anim" style={delay('ctas')}>
            <a href="#join" className="btn btn-primary">
              Join Us &rarr;
            </a>
            <a href="#about" className="btn btn-ghost">
              How It Works
            </a>
          </div>
          <div className="hero-stats hero-anim" style={delay('stats')}>
            {stats.map((stat) => (
              <div className="s" key={stat.label}>
                <StatValue stat={stat} />
                <div className="l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
