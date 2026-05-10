export type JobListing = {
  id: string
  title: string
  company: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
  salary: string
  summary: string
  description: string
  requirements: string[]
}

export const jobs: JobListing[] = [
  {
    id: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    company: 'vico.net',
    location: 'Lagos, Nigeria (Hybrid)',
    type: 'Full-time',
    salary: 'R850,000 - R1,200,000 / year',
    summary: 'Build modern marketplace experiences for talent and business users.',
    description:
      'You will lead the frontend experience for our talent marketplace, collaborate with product and design teams, and ship performant interfaces that scale globally.',
    requirements: [
      '5+ years building React applications in production',
      'Strong TypeScript and CSS architecture skills',
      'Experience with performance optimization and accessibility',
      'Ability to mentor junior engineers and review code',
    ],
  },
  {
    id: 'product-designer',
    title: 'Product Designer (UX/UI)',
    company: 'Orbit Talent Studio',
    location: 'Cape Town, South Africa (Remote)',
    type: 'Remote',
    salary: 'R650,000 - R950,000 / year',
    summary: 'Design intuitive flows for job discovery, applications, and dashboards.',
    description:
      'As a Product Designer, you will shape end-to-end user journeys for professionals and recruiters. You will run design sprints, prototype ideas, and improve conversion metrics.',
    requirements: [
      '3+ years in product design for web platforms',
      'Portfolio demonstrating UX research and UI craft',
      'Experience with Figma and design systems',
      'Ability to present design rationale to stakeholders',
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    company: 'BrightPath HR Tech',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    salary: 'R520,000 - R760,000 / year',
    summary: 'Turn hiring and engagement data into actionable product insights.',
    description:
      'You will work closely with operations and product teams to uncover trends in talent matching, application funnels, and business growth, and present findings through clear dashboards.',
    requirements: [
      'Strong SQL and dashboarding experience',
      'Proficiency with spreadsheet modeling and reporting',
      'Experience with A/B test analysis',
      'Clear written and verbal communication skills',
    ],
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    company: 'vico.net',
    location: 'Johannesburg, South Africa',
    type: 'Full-time',
    salary: 'R560,000 - R790,000 / year',
    summary: 'Support businesses and professionals to get maximum value from the platform.',
    description:
      'You will onboard business clients, guide professionals through profile optimization, and ensure healthy adoption of our collaboration tools through proactive account support.',
    requirements: [
      '2+ years in customer success or account management',
      'Excellent communication and stakeholder handling skills',
      'Experience with CRM workflows and client reporting',
      'Comfortable working across multiple time zones',
    ],
  },
]

export function findJobById(id: string) {
  return jobs.find((job) => job.id === id)
}
