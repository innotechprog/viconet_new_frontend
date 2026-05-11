import Header from './Header'
import Footer from './Footer'

const blogPosts = [
  {
    title: 'How To Build a Standout Talent Profile in 2026',
    category: 'Career Growth',
    readTime: '6 min read',
    excerpt:
      'Simple profile upgrades that help professionals get discovered faster by top employers across regions.',
    image: '/images/hero-talent-lagos.png',
  },
  {
    title: 'Skills-First Hiring: What Leading Teams Do Differently',
    category: 'Hiring',
    readTime: '8 min read',
    excerpt:
      'A practical playbook for businesses shifting from CV filters to capability-based talent evaluation.',
    image: '/images/graduate-business-handshake.jpg',
  },
  {
    title: 'Remote Collaboration Rituals That Actually Work',
    category: 'Collaboration',
    readTime: '5 min read',
    excerpt:
      'Communication rhythms and lightweight habits that improve speed, trust, and delivery quality.',
    image: '/images/graduate-business-handshake.jpg',
  },
  {
    title: 'Portfolio Signals Recruiters Look For First',
    category: 'Career Growth',
    readTime: '7 min read',
    excerpt:
      'What to showcase in your portfolio so hiring teams can quickly understand your impact and strengths.',
    image: '/images/hero-talent-lagos.png',
  },
  {
    title: 'Cross-Border Hiring: A Readiness Checklist',
    category: 'Hiring',
    readTime: '9 min read',
    excerpt:
      'Before opening an international role, align process, onboarding, and collaboration expectations.',
    image: '/images/graduate-business-handshake.jpg',
  },
  {
    title: 'From Application to Interview: Reducing Drop-Off',
    category: 'Operations',
    readTime: '4 min read',
    excerpt:
      'Small UX and communication changes that keep qualified candidates engaged through the pipeline.',
    image: '/images/hero-talent-lagos.png',
  },
  {
    title: 'Building High-Trust Remote Teams Across Time Zones',
    category: 'Collaboration',
    readTime: '6 min read',
    excerpt:
      'How distributed teams can improve handoffs, accountability, and delivery confidence without burnout.',
    image: '/images/graduate-business-handshake.jpg',
  },
  {
    title: 'What Hiring Managers Expect in Technical Interviews',
    category: 'Hiring',
    readTime: '7 min read',
    excerpt:
      'A practical guide to preparation, communication, and problem-solving signals that stand out to interviewers.',
    image: '/images/hero-talent-lagos.png',
  },
]

export default function BlogsPage() {
  return (
    <div className="blogs-page">
      <Header />

      <section className="blogs-hero">
        <div className="blogs-hero-bg" aria-hidden />
        <div className="container blogs-hero-content">
          <p className="eyebrow">INSIGHTS</p>
          <h1>Blogs & Resources</h1>
          <p className="blogs-hero-lead">
            Practical ideas for professionals and businesses navigating modern work, hiring, and collaboration.
          </p>
          <div className="blogs-hero-ctas">
            <a className="btn btn-primary btn-lg" href="#signin-talent">
              Explore Articles
            </a>
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow eyebrow--on-light">LATEST ARTICLES</p>
            <h2>Fresh Insights From the Network</h2>
          </header>

          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <article key={post.title} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-card-image" loading="lazy" />
                <div className="blog-card-body">
                  <p className="blog-card-meta">
                    <span>{post.category}</span>
                    <span className="blog-dot">•</span>
                    <span>{post.readTime}</span>
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a className="blog-read-link" href="#webinars">
                    Continue reading
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="blogs-cta">
            <h3>Want more practical content?</h3>
            <p>Join our webinars and podcasts to learn directly from experts and hiring teams.</p>
            <a className="btn btn-primary btn-lg" href="#webinars">
              Explore Webinars
            </a>
          </div>

          <div className="blogs-cta blogs-cta--contribute">
            <h3>Want to write a blog for us?</h3>
            <p>
              Share your expertise with our global network. Send us your idea and we will get back to
              you.
            </p>
            <a className="btn btn-outline btn-lg" href="#contact">
              Become a Contributor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
