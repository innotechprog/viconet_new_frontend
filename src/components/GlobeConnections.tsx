import { useState } from 'react'

const businesses = [
  { id: 'b1', company: 'Microsoft', cx: 510, cy: 170 },
  { id: 'b2', company: 'Deloitte', cx: 434, cy: 232 },
  { id: 'b3', company: 'AWS', cx: 592, cy: 236 },
  { id: 'b4', company: 'IBM', cx: 560, cy: 315 },
]

const talents = [
  { id: 't1', role: 'Data Scientist', cx: 182, cy: 246, icon: 'person' as const },
  { id: 't2', role: 'Software Engineer', cx: 246, cy: 265, icon: 'cap' as const },
  { id: 't3', role: 'Product Designer', cx: 142, cy: 265, icon: 'person' as const },
  { id: 't4', role: 'Cloud Architect', cx: 284, cy: 242, icon: 'cap' as const },
]

export default function GlobeConnections() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)

  return (
    <section className="section section-globe" aria-labelledby="globe-heading">
      <div className="container globe-layout">
        <div
          className="globe-visual"
          role="img"
          aria-label="Two globes showing talents and businesses connected through collaboration"
        >
          <svg viewBox="0 0 760 420" className="globe-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="globeFillTalents" cx="50%" cy="38%" r="70%">
                <stop offset="0%" stopColor="#1f3b8b" />
                <stop offset="70%" stopColor="#13285d" />
                <stop offset="100%" stopColor="#0b1738" />
              </radialGradient>
              <radialGradient id="globeFillBusiness" cx="50%" cy="38%" r="70%">
                <stop offset="0%" stopColor="#2f3f93" />
                <stop offset="70%" stopColor="#1b2a72" />
                <stop offset="100%" stopColor="#101d54" />
              </radialGradient>
            </defs>

            <g>
              <circle className="globe-shell" cx="210" cy="230" r="154" fill="url(#globeFillTalents)" />
              <circle className="globe-ring" cx="210" cy="230" r="154" />
              <ellipse className="globe-lat" cx="210" cy="230" rx="132" ry="48" />
              <ellipse className="globe-lat" cx="210" cy="230" rx="132" ry="88" />
              <ellipse className="globe-lon" cx="210" cy="230" rx="56" ry="154" />
              <ellipse className="globe-lon" cx="210" cy="230" rx="102" ry="154" />
            </g>

            <g>
              <circle className="globe-shell" cx="550" cy="230" r="154" fill="url(#globeFillBusiness)" />
              <circle className="globe-ring" cx="550" cy="230" r="154" />
              <ellipse className="globe-lat" cx="550" cy="230" rx="132" ry="48" />
              <ellipse className="globe-lat" cx="550" cy="230" rx="132" ry="88" />
              <ellipse className="globe-lon" cx="550" cy="230" rx="56" ry="154" />
              <ellipse className="globe-lon" cx="550" cy="230" rx="102" ry="154" />
            </g>

            <g className="globe-hub" transform="translate(412 212)">
              <rect x="-32" y="-14" width="64" height="28" rx="14" />
              <text x="0" y="5">vico.net®</text>
            </g>

            {talents.map((node, index) => {
              const gatewayX = 382
              const gatewayY = 212
              const mx = (node.cx + gatewayX) / 2 - 6
              const my = Math.min(node.cy, gatewayY) - (22 + index * 2)
              const pathD = `M ${node.cx} ${node.cy} Q ${mx} ${my} ${gatewayX} ${gatewayY}`

              return (
                <g key={`talent-${node.id}`}>
                  <path className="globe-link globe-link--talent" d={pathD} style={{ animationDelay: `${index * 0.25}s` }} />
                  <circle className="flow-dot flow-dot--talent" r="3">
                    <animateMotion
                      dur={`${2.5 + index * 0.25}s`}
                      repeatCount="indefinite"
                      path={pathD}
                    />
                  </circle>
                </g>
              )
            })}

            {businesses.map((node, index) => {
              const gatewayX = 442
              const gatewayY = 212
              const mx = (node.cx + gatewayX) / 2 + 6
              const my = Math.min(node.cy, gatewayY) - (20 + index * 2)
              const pathD = `M ${gatewayX} ${gatewayY} Q ${mx} ${my} ${node.cx} ${node.cy}`

              return (
                <g key={`business-${node.id}`}>
                  <path className="globe-link globe-link--business" d={pathD} style={{ animationDelay: `${index * 0.25}s` }} />
                  <circle className="flow-dot flow-dot--business" r="3">
                    <animateMotion
                      dur={`${2.4 + index * 0.2}s`}
                      repeatCount="indefinite"
                      path={pathD}
                    />
                  </circle>
                </g>
              )
            })}

            {businesses.map((node) => (
              <g key={node.id}>
                <circle className="node node-business" cx={node.cx} cy={node.cy} r="13" />
                <path
                  className="node-icon"
                  d={`M ${node.cx - 5} ${node.cy - 2} h10 v8 h-10 z M ${node.cx - 3} ${node.cy - 5} h6 v3 h-6 z`}
                />
                <text className="node-label node-label-business" x={node.cx + 14} y={node.cy - 12}>
                  {node.company}
                </text>
              </g>
            ))}

            {talents.map((node) => (
              <g key={node.id}>
                <circle className="node node-talent" cx={node.cx} cy={node.cy} r="13" />
                {node.icon === 'person' ? (
                  <path
                    className="node-icon"
                    d={`M ${node.cx} ${node.cy - 5} a3 3 0 1 0 0.01 0 M ${node.cx - 5} ${node.cy + 6} c1.5 -4 8.5 -4 10 0`}
                    fill="none"
                  />
                ) : (
                  <path
                    className="node-icon"
                    d={`M ${node.cx - 6} ${node.cy - 4} l6 -3 6 3 -6 3 z M ${node.cx - 3} ${node.cy} v4 M ${node.cx + 3} ${node.cy} v4`}
                    fill="none"
                  />
                )}
                <text className="node-label node-label-talent" x={node.cx + 14} y={node.cy + 18}>
                  {node.role}
                </text>
              </g>
            ))}

          </svg>

        </div>

        <div className="globe-copy">
          <p className="eyebrow">ABOUT US</p>
          <h2 id="globe-heading">About Us</h2>
          <p>
            Vico.net® helps businesses and talented professionals connect, collaborate, and access meaningful
            opportunities for long-term growth.
          </p>

          {isAboutExpanded ? (
            <>
              <p>
                We are committed to unlocking a wide range of high-value opportunities for our members by
                building a trusted collaboration network.
              </p>
              <p>
                Through our platform, we offer services such as job postings, career opportunities, blogs,
                and seminars, while also connecting our community with mentors and advisors for practical
                guidance in a rapidly evolving digital landscape.
              </p>
            </>
          ) : null}

          <button
            type="button"
            className="globe-read-more"
            onClick={() => setIsAboutExpanded((current) => !current)}
            aria-expanded={isAboutExpanded}
          >
            {isAboutExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  )
}
