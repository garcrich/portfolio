
type WorkHistory = {
  company: string
  position: string
  description: string[]
}
const workHistory: WorkHistory[] = [
  {
    company: 'Vyne Dental',
    position: 'Senior Software Engineer',
    description: [
      "Developed a comprehensive insurance billing platform using the latest technologies in an agile environment",
      "Collaborated with the team to refine the codebase, optimize performance, and maintain modularity",
      "Worked with multi-cloud infrastructure using Azure and AWS for CI/CD, deployment, and monitoring",
    ],
  },
  {
    company: 'Purple',
    position: 'Senior Software Engineer',
    description: [
      "Collaborated with multiple teams to develop and enhance the e-commerce platform, delivering mission-critical sales and promotional objectives",
      "Created and implemented new front-end content for both new and existing products, resulting in improved customer experience",
      "Acted as a liaison between product, content, and engineering teams in an agile environment"
    ],
  },
  {
    company: 'CardWorks',
    position: 'Software Engineer',
    description: [
      "Maintained a ticketing system using a variety of technologies, including C# .Net Framework, Entity Framework Core, MS Server, TSQL, Angular, rx/js, Ngrx data, TypeScript, JavaScript, CSS, and Material UI",
      "Worked as a full-stack developer to resolve bugs and improve the application"
    ]
  },
  {
    company: 'Micron',
    position: 'Frontend Web Producer',
    description: [
      "Created visually appealing designs for Micron Consumer Products Group's domestic, regional, and international sites",
      "Identified and addressed site issues with workable solutions within strict time constraints"
    ]
  },
  {
    company: 'RS&I Inc.',
    position: 'Front End Developer',
    description: [
      "Led the redesign of the customer-facing website and HubSpot Blog",
      "Optimized website performance by creating custom solutions and landing pages, and designing engaging email templates aligned with company branding"
    ]
  },
];

export default workHistory;