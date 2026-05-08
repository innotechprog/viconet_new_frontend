const cards = [
  {
    type: 'blog',
    label: 'Blog',
    title: 'The Future of Work: Why Skills Matter More Than Degrees',
    meta: 'October 24, 2024 · 5 min read',
    image: '/images/blog-future-work.png',
    imageAlt:
      'Professional woman working on a laptop in a bright office — blog cover about skills and the future of work on vico.net',
  },
  {
    type: 'webinar',
    label: 'Webinar',
    title: 'Building a Strong Personal Brand in the Digital Age',
    meta: 'November 2, 2024 · 45 min',
    image: '/images/webinar-personal-brand.png',
    imageAlt:
      'Speaker presenting a webinar on building a strong personal brand online — vico.net learning resources',
  },
  {
    type: 'podcast',
    label: 'Podcast',
    title: 'The Collaboration Advantage: Businesses & Talent Together',
    meta: 'October 18, 2024 · 32 min listen',
    image: '/images/podcast-collaboration.png',
    imageAlt:
      'Two hosts recording a podcast about collaboration between businesses and talent — vico.net podcast',
  },
]

export default function Resources() {
  return (
    <section className="section section-resources" id="resources" aria-labelledby="resources-heading">
      <div className="container">
        <header className="resources-head">
          <div>
            <h2 id="resources-heading">Explore. Learn. Grow.</h2>
            <p className="resources-sub">Insights &amp; inspiration from experts across industries.</p>
          </div>
          <a className="link-arrow" href="#resources">
            View All Blogs →
          </a>
        </header>

        <div className="resource-grid">
          {cards.map((c) => (
            <article key={c.title} className="resource-card">
              <div className="resource-image-wrap">
                <img src={c.image} alt={c.imageAlt} width={400} height={240} loading="lazy" />
              </div>
              <div className="resource-body">
                <span className={`resource-tag resource-tag--${c.type}`}>{c.label}</span>
                <h3>{c.title}</h3>
                <p className="resource-meta">{c.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
