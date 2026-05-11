const miniAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="20" fill="#EEF2FF"/>
    <path d="M16 21l16-7 16 7-16 7-16-7Z" fill="#475569"/>
    <path d="M45 24v8" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <circle cx="46" cy="33" r="2" fill="#475569"/>
    <circle cx="32" cy="32" r="9" fill="#9CA3AF"/>
    <path d="M16 54c0-10.4 7.7-17 16-17s16 6.6 16 17" fill="#9CA3AF"/>
  </svg>
`)}`

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
  { id: 't5', role: 'QA Engineer', cx: 165, cy: 190, icon: 'person' as const },
  { id: 't6', role: 'DevOps Engineer', cx: 226, cy: 186, icon: 'cap' as const },
  { id: 't7', role: 'BI Analyst', cx: 210, cy: 302, icon: 'person' as const },
]

const talentAvatarNodes = [
  { id: 'ta1', cx: 118, cy: 170 },
  { id: 'ta2', cx: 138, cy: 214 },
  { id: 'ta3', cx: 112, cy: 258 },
  { id: 'ta4', cx: 136, cy: 292 },
  { id: 'ta5', cx: 184, cy: 136 },
  { id: 'ta6', cx: 242, cy: 136 },
  { id: 'ta7', cx: 286, cy: 170 },
  { id: 'ta8', cx: 304, cy: 222 },
  { id: 'ta9', cx: 286, cy: 286 },
  { id: 'ta10', cx: 242, cy: 322 },
  { id: 'ta11', cx: 178, cy: 328 },
  { id: 'ta12', cx: 132, cy: 286 },
]

const companyAvatarNodes = [
  { id: 'ca1', cx: 496, cy: 144 },
  { id: 'ca2', cx: 612, cy: 178 },
  { id: 'ca3', cx: 640, cy: 268 },
  { id: 'ca4', cx: 528, cy: 346 },
]

export default function GlobeConnections() {
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
              <pattern id="talentAvatarPattern" patternUnits="objectBoundingBox" width="1" height="1">
                <image href={miniAvatar} x="0" y="0" width="20" height="20" preserveAspectRatio="xMidYMid slice" />
              </pattern>
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

            {talentAvatarNodes.map((node, index) => {
              const gatewayX = 382
              const gatewayY = 212
              const mx = (node.cx + gatewayX) / 2 - 4
              const my = Math.min(node.cy, gatewayY) - (18 + (index % 4))
              const pathD = `M ${node.cx} ${node.cy} Q ${mx} ${my} ${gatewayX} ${gatewayY}`

              return (
                <g key={`talent-avatar-link-${node.id}`}>
                  <path
                    className="globe-link globe-link--talent globe-link--avatar"
                    d={pathD}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  />
                  <circle className="flow-dot flow-dot--talent" r="2.4">
                    <animateMotion dur={`${2.1 + (index % 3) * 0.2}s`} repeatCount="indefinite" path={pathD} />
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

            {companyAvatarNodes.map((node, index) => {
              const gatewayX = 442
              const gatewayY = 212
              const mx = (node.cx + gatewayX) / 2 + 5
              const my = Math.min(node.cy, gatewayY) - (16 + (index % 3) * 2)
              const pathD = `M ${gatewayX} ${gatewayY} Q ${mx} ${my} ${node.cx} ${node.cy}`

              return (
                <g key={`company-avatar-link-${node.id}`}>
                  <path
                    className="globe-link globe-link--business globe-link--avatar"
                    d={pathD}
                    style={{ animationDelay: `${index * 0.14}s` }}
                  />
                  <circle className="flow-dot flow-dot--business" r="2.4">
                    <animateMotion dur={`${2.2 + (index % 2) * 0.2}s`} repeatCount="indefinite" path={pathD} />
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
                <text className="node-label node-label-talent node-label-talent-top" x={node.cx} y={node.cy - 18}>
                  {node.role}
                </text>
              </g>
            ))}

            {talentAvatarNodes.map((node, index) => (
              <g key={node.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <circle
                  className="node-talent-avatar"
                  cx={node.cx}
                  cy={node.cy}
                  r="9"
                  style={{ fill: 'url(#talentAvatarPattern)' }}
                />
                <circle className="node-talent-avatar-ring" cx={node.cx} cy={node.cy} r="10.5" />
              </g>
            ))}

            {companyAvatarNodes.map((node, index) => (
              <g key={node.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <circle className="node-company-avatar" cx={node.cx} cy={node.cy} r="9" />
                <path
                  className="node-icon"
                  d={`M ${node.cx - 4} ${node.cy - 1} h8 v6 h-8 z M ${node.cx - 2} ${node.cy - 4} h4 v2 h-4 z`}
                />
                <circle className="node-company-avatar-ring" cx={node.cx} cy={node.cy} r="10.5" />
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

          <a className="globe-read-more" href="#about-us">
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
