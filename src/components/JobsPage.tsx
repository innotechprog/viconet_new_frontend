import { useEffect, useMemo, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { jobs } from '../config/jobs'

const PAGE_SIZE = 3

const categoryOptions = ['All Categories', ...Array.from(new Set(jobs.map((job) => job.type)))]

export default function JobsPage() {
  const [searchInput, setSearchInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('All Categories')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !searchTerm ||
        [job.title, job.company, job.location, job.summary].some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase()),
        )

      const matchesCategory = selectedCategory === 'All Categories' || job.type === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / PAGE_SIZE))

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filteredJobs.slice(start, start + PAGE_SIZE)
  }, [currentPage, filteredJobs])

  const startItem = filteredJobs.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1
  const endItem = Math.min(currentPage * PAGE_SIZE, filteredJobs.length)

  const applySearch = () => {
    setSearchTerm(searchInput.trim())
    setSelectedCategory(categoryInput)
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchInput('')
    setCategoryInput('All Categories')
    setSearchTerm('')
    setSelectedCategory('All Categories')
    setCurrentPage(1)
  }

  return (
    <div className="jobs-page">
      <Header />

      <section className="jobs-hero">
        <div className="jobs-hero-bg" aria-hidden />
        <div className="container jobs-hero-content">
          <p className="eyebrow">CAREERS</p>
          <h1>Open Jobs</h1>
          <p>
            Explore curated opportunities from vico.net and trusted partners across Africa and beyond.
          </p>
          <div className="jobs-hero-highlights" aria-label="Jobs overview">
            <span>{jobs.length} Open Roles</span>
            <span>{categoryOptions.length - 1} Categories</span>
            <span>Remote & Hybrid Friendly</span>
          </div>
        </div>
      </section>

      <section className="jobs-shell">
        <div className="container">
          <section className="jobs-search-section" aria-labelledby="jobs-search-title">
            <h2 id="jobs-search-title" className="jobs-search-title">Find Your Next Role</h2>
            <form
              className="jobs-search-form"
              onSubmit={(event) => {
                event.preventDefault()
                applySearch()
              }}
            >
              <input
                type="search"
                className="jobs-search-input"
                placeholder="Job title, company, location, keywords..."
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                aria-label="Search jobs by keyword"
              />
              <select
                className="jobs-search-select"
                value={categoryInput}
                onChange={(event) => setCategoryInput(event.target.value)}
                aria-label="Filter jobs by category"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn btn-primary jobs-search-btn">
                Search
              </button>
              <button type="button" className="btn btn-nav-talent jobs-reset-btn" onClick={clearFilters}>
                Reset
              </button>
            </form>
          </section>

          <section className="jobs-listing-section">
          <p className="jobs-results-meta">
            Showing {startItem}-{endItem} of {filteredJobs.length} jobs
          </p>

          <div className="jobs-listing-grid">
            {paginatedJobs.map((job) => {
              const jobHref = `#job-${job.id}`

              return (
                <a
                  key={job.id}
                  className="job-card job-card--clickable"
                  href={jobHref}
                >
                <div className="job-card-meta">
                  <span className="job-card-company">
                    <span className="job-company-logo" aria-hidden>
                      <img src="/viconet-logo.png" alt="" className="job-company-logo-img" loading="lazy" />
                    </span>
                    <span>{job.company}</span>
                  </span>
                  <span>{job.type}</span>
                </div>
                <h2>{job.title}</h2>
                <p className="job-location">{job.location}</p>
                <p className="job-summary">{job.summary}</p>
                  <div className="job-card-footer">
                    <p className="job-salary">{job.salary}</p>
                    <span className="job-card-link-text">View role →</span>
                  </div>
                </a>
              )
            })}
          </div>

          {filteredJobs.length === 0 && (
            <div className="jobs-empty-state">
              <h3>No jobs found</h3>
              <p>Try adjusting your search terms or choose a different category.</p>
              <button
                type="button"
                className="btn btn-nav-talent"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

          {filteredJobs.length > 0 && totalPages > 1 && (
            <nav className="jobs-pagination" aria-label="Job listing pages">
              <button
                type="button"
                className="jobs-page-btn"
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <div className="jobs-page-numbers">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`jobs-page-number ${page === currentPage ? 'is-active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="jobs-page-btn"
                onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          )}
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
