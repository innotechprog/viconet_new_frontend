const cards = [
  {
    type: 'podcast',
    label: 'Podcast',
    title: 'The Future of Remote Work',
    meta: 'Industry Leader · 45 min listen',
    image: 'https://img.youtube.com/vi/F-GINBMWN9g/hqdefault.jpg',
    imageAlt: 'Podcast episode thumbnail — The Future of Remote Work on vico.net',
  },
  {
    type: 'webinar',
    label: 'Webinar',
    title: 'AI & the Future of Talent Acquisition',
    meta: 'Jun 14, 2026 · 14:00 UTC · Dr. Lebo Ndlovu',
    image: 'https://img.youtube.com/vi/8Z3lOidpCwM/hqdefault.jpg',
    imageAlt: 'Webinar — AI & the Future of Talent Acquisition on vico.net',
  },
  {
    type: 'podcast',
    label: 'Podcast',
    title: 'Skills-First Hiring Revolution',
    meta: 'HR Innovator · 52 min listen',
    image: 'https://img.youtube.com/vi/WSwyXjPqDbo/hqdefault.jpg',
    imageAlt: 'Podcast episode thumbnail — Skills-First Hiring Revolution on vico.net',
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
          <a className="link-arrow" href="#webinars">
            View All Webinars & Podcasts →
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

        <div className="resources-featured-cta">
          <p>Have expertise to share with our community?</p>
          <a className="btn btn-primary" href="#webinars">
            Want to be Featured?
          </a>
        </div>
      </div>
    </section>
  )
}
