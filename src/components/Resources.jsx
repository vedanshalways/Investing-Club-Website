import { resources } from '../data/club.js'
import { useReveal } from '../hooks/useReveal.js'

function ResourceCard({ item }) {
  const content = (
    <>
      <span className="res-tag">{item.tag}</span>
      <h4>{item.title}</h4>
      <p className="res-desc">{item.text}</p>
      <span className="res-link mono">{item.link}</span>
    </>
  )

  if (item.href) {
    return (
      <a className="res-card reveal-item" href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return <div className="res-card reveal-item">{content}</div>
}

function Resources() {
  const numRef = useReveal()
  const headRef = useReveal()
  const introRef = useReveal()
  const gridRef = useReveal({ stagger: true })

  return (
    <section id="resources">
      <div className="section-head">
        <div className="num mono reveal-fade" ref={numRef}>
          / 03 &middot; RESOURCES
        </div>
        <div>
          <h2 className="reveal" ref={headRef}>
            Everything you <em>need</em>.
          </h2>
          <p className="intro reveal" ref={introRef}>
            Useful links and tools for members. Bookmark this page and come back whenever you
            need a reference.
          </p>
        </div>
      </div>
      <div className="res-grid reveal-group" ref={gridRef}>
        {resources.map((item) => (
          <ResourceCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  )
}

export default Resources
