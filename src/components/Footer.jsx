import logo from '../assets/logo.jpg'

function Footer() {
  return (
    <footer>
      <div className="foot">
        <div>
          <div className="brand-f">
            <img src={logo} alt="" />
            <div>
              <div className="n serif">Investing Club</div>
              <small>Learn &middot; Invest &middot; Grow</small>
            </div>
          </div>
          <p className="tag">
            A student-led investing society. Meeting every EC3.
          </p>
        </div>
        <div>
          <h6>Site</h6>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#members">Leadership</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Resources</h6>
          <ul>
            <li>
              <a href="https://quantaify.org" target="_blank" rel="noreferrer">
                Quantaify.org
              </a>
            </li>
            <li>
              <a href="https://www.perplexity.ai/finance" target="_blank" rel="noreferrer">
                Perplexity Finance
              </a>
            </li>
            <li>
              <a href="https://finance.yahoo.com" target="_blank" rel="noreferrer">
                Yahoo Finance
              </a>
            </li>
            <li>
              <a href="https://www.tradingview.com" target="_blank" rel="noreferrer">
                TradingView
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Contact</h6>
          <ul>
            <li>Meets every EC3</li>
            <li>Mr. Trepanier &middot; Advisor</li>
          </ul>
        </div>
      </div>
      <div className="footbot">
        <div>&copy; 2026 &middot; INVESTING CLUB &middot; FOR EDUCATIONAL PURPOSES ONLY</div>
        <div>NOT INVESTMENT ADVICE &middot; PAPER TRADING VIA QUANTAIFY.ORG</div>
      </div>
    </footer>
  )
}

export default Footer
