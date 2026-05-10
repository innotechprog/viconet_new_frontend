import Header from './Header'
import Footer from './Footer'
import { findJobById } from '../config/jobs'

type JobDetailPageProps = {
  jobId: string
}

export default function JobDetailPage({ jobId }: JobDetailPageProps) {
  const job = findJobById(jobId)

  if (!job) {
    return (
      <div className="job-detail-page">
        <Header />
        <main className="job-detail-main-wrap">
          <div className="container job-detail-main">
            <h1>Job Not Found</h1>
            <p>The job listing you are looking for does not exist or has been removed.</p>
            <a className="btn btn-primary" href="#jobs">
              Back to Jobs
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="job-detail-page">
      <Header />

      <main className="job-detail-main-wrap">
        <div className="container job-detail-main">
          <header className="job-detail-head">
            <p className="job-detail-company">
              <span className="job-company-logo" aria-hidden>
                <img src="/viconet-logo.png" alt="" className="job-company-logo-img" loading="lazy" />
              </span>
              <span className="job-detail-company-name">{job.company}</span>
            </p>
            <h1>{job.title}</h1>
            <p className="job-detail-meta">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.type}</span>
              <span>•</span>
              <span>{job.salary}</span>
            </p>
          </header>

          <section className="job-detail-section">
            <h2>Role Overview</h2>
            <p>{job.description}</p>
          </section>

          <section className="job-detail-section">
            <h2>Requirements</h2>
            <ul className="job-requirements">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="job-detail-actions">
            <a className="btn btn-primary btn-lg" href="#signin-talent">
              Apply as Talent
            </a>
            <a className="btn btn-nav-talent btn-lg" href="#contact">
              Contact Recruiter
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
