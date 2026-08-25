export const portfolioData = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Client Work', href: '#client-work' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'My Details', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/iamsaifullah/',
      iconType: 'feather',
      icon: 'linkedin'
    },
    {
      name: 'Fiverr',
      href: 'https://www.fiverr.com/saifullah1110',
      iconType: 'image',
      icon: '/assets/images/icons/fiverr.png'
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~0142172d98c1a4bb8a',
      iconType: 'image',
      icon: '/assets/images/icons/upwork.png'
    }
  ],
  about: {
    name: 'Saifullah',
    greeting: "Hi, I'm",
    title:
      'Remote full-stack web developer building React, Vue, Tailwind, Laravel, and AI-powered web applications.',
    role: 'Full-Stack Web Developer | React, Vue, Tailwind, Laravel, AI Integrations',
    email: 'hello@iamsaifullah.com',
    location: 'Germany',
    avatar: '/assets/images/portfolio-my-image.png',
    logo: '/assets/images/logo-for-portfolio.png',
    cvUrl: '/assets/Saifullah-resume.pdf',
    cvDownloadName: 'saifullah.pdf',
    contactEmail: 'hello@iamsaifullah.com',
    inlineSocialTitle: 'You can also find me at:'
  },
  details: {
    subtitle: '5+ Years of Experience',
    tabs: [
      { id: 'education', label: 'education' },
      { id: 'professional', label: 'professional Skills' },
      { id: 'experience', label: 'experience' }
    ],
    educationColumns: [
      [
        {
          id: 'bachelors',
          title: 'FUUAST',
          subtitle: "Bachelor's Degree | 2019 - 2022",
          description: "Bachelor's degree completed at FUUAST."
        }
      ],
      [
        {
          id: 'microverse',
          title: 'Microverse',
          subtitle: 'Remote Software Development Program | 2022',
          description:
            'Completed 1,300+ hours of full-stack development and remote collaboration training.'
        }
      ]
    ],
    skills: [
      {
        id: 'frontend',
        items: ['React', 'Redux', 'Vue.js', 'Pinia', 'JavaScript', 'Tailwind CSS', 'HTML/CSS']
      },
      {
        id: 'backend',
        items: ['PHP', 'Laravel', 'REST APIs', 'Databases', 'Async job queues']
      },
      {
        id: 'aiProduct',
        items: ['AI integrations', 'Agentic workflows', 'Tool calling', 'Prompt engineering', 'SaaS', 'E-commerce']
      },
      {
        id: 'delivery',
        items: ['Git/GitHub', 'Code reviews', 'Remote pair programming', 'Mentoring', 'Fabric.js', 'MJML']
      }
    ],
    experienceColumns: [
      [
        {
          id: 'jeeglo',
          title: 'Jeeglo',
          subtitle: 'Full-Stack Developer | 2022 - Present',
          description:
            'Build Vue.js and Tailwind CSS interfaces, connect them to Laravel APIs and databases, and maintain the production landing-page builder I developed with Vue and Laravel.'
        },
        {
          id: 'deevloopers',
          title: 'Deevloopers',
          subtitle: 'Full-Stack Developer | 2021 - 2022',
          description:
            'Created front-end interfaces, connected them to PHP back ends and databases, and supported end-to-end feature delivery.'
        }
      ],
      [
        {
          id: 'mentor',
          title: 'Microverse',
          subtitle: 'Volunteer Mentor | Feb 2022 - Present',
          description:
            'Mentor junior developers through code reviews, debugging support, clean-code guidance, and remote collaboration.'
        }
      ]
    ]
  },
  clientWork: {
    subtitle: 'Featured Work',
    title: "Products I've Worked On",
    description:
      "A selection of production apps I've contributed to across marketing, video, lead generation, and digital commerce.",
    items: [
      {
        name: 'Grawt',
        label: 'Product contribution',
        logo: '/assets/images/client-work/grawt.png',
        logoStyle: 'wordmark',
        url: 'https://www.grawt.com/',
        descriptionKey: 'grawt',
        tags: ['Agentic AI', 'Vue', 'Laravel', 'MJML']
      },
      {
        name: 'Redeemlo',
        label: 'Product contribution',
        logo: '/assets/images/client-work/redeemlo.webp',
        logoStyle: 'wide',
        url: 'https://www.redeemlo.com/',
        descriptionKey: 'redeemlo',
        tags: ['Fabric.js', 'Campaigns', 'Custom domains']
      },
      {
        name: 'Unfold.video',
        label: 'Product contribution',
        logo: '/assets/images/client-work/unfold-video.webp',
        logoStyle: 'wide',
        url: 'https://www.unfold.video/',
        descriptionKey: 'unfold',
        tags: ['Video marketing', 'Production SaaS']
      },
      {
        name: 'KuickList',
        label: 'Product contribution',
        logo: '/assets/images/client-work/kuicklist.png',
        logoStyle: 'icon',
        iconPlate: true,
        url: 'https://www.kuicklist.com/',
        descriptionKey: 'kuicklist',
        tags: ['Lead generation', 'Marketing SaaS']
      },
      {
        name: 'ProductDyno',
        label: 'Product contribution',
        logo: '/assets/images/client-work/productdyno.png',
        logoStyle: 'icon',
        url: 'https://productdyno.com/',
        descriptionKey: 'productdyno',
        tags: ['AI agents', 'Embeddable UI', 'SaaS']
      },
      {
        name: 'ListWeaver',
        label: 'Product contribution',
        logo: '/assets/images/client-work/listweaver.webp',
        logoStyle: 'wide',
        url: 'https://listweaver.app/',
        descriptionKey: 'listweaver',
        tags: ['AI Skills', 'Lead magnets', 'Workflows']
      }
    ]
  },
  projectsDescription:
    "A selection of personal products, practical experiments, and web experiences I've built.",
  projects: [
    {
      id: 'brandOs',
      categoryKey: 'brandOsCategory',
      titleKey: 'brandOsTitle',
      descriptionKey: 'brandOsDescription',
      title: 'BRAND OS',
      category: 'AI Brand Workspace',
      image: null,
      url: null,
      tags: ['AI Skills', 'Brand systems', 'Content generation']
    },
    {
      id: 'siteSnap',
      categoryKey: 'siteSnapCategory',
      titleKey: 'siteSnapTitle',
      descriptionKey: 'siteSnapDescription',
      category: 'Personal Tool',
      title: 'SITESNAP LIVE WEBSITE MOCKUP GENERATOR',
      image: '/assets/images/my-projects/site-snap-1.png',
      url: 'https://sitesnap.iamsaifullah.com/',
      tags: ['Responsive preview', 'Screenshot automation']
    },
    {
      id: 'kanban',
      categoryKey: 'kanbanCategory',
      titleKey: 'kanbanTitle',
      descriptionKey: 'kanbanDescription',
      category: 'Old Todo List -> New Kanban Board',
      title: 'KANBAN BOARD WORKFLOW UPGRADE',
      image: '/assets/images/my-projects/kanban.png',
      url: 'https://kanban.iamsaifullah.com/',
      tags: ['Drag and drop', 'Google sync', 'Responsive UI']
    },
    {
      id: 'kuickstore',
      categoryKey: 'kuickstoreCategory',
      titleKey: 'kuickstoreTitle',
      descriptionKey: 'kuickstoreDescription',
      category: 'AI E-commerce Store Builder',
      title: 'KUICKSTORE',
      image: '/assets/images/my-projects/product-cart.png',
      url: 'https://kuickstore.com',
      tags: ['E-commerce', 'Storefronts', 'Analytics']
    }
  ],
  earlierProjects: [
    {
      id: 'capstone',
      titleKey: 'capstoneTitle',
      category: 'CAPSTONE PROJECT',
      title: 'CC GLOBAL SUMMIT LANDING PAGE',
      image: '/assets/images/my-projects/project001.png',
      url: 'https://saifullah767.github.io/capstone/'
    },
    {
      id: 'roundHome',
      titleKey: 'roundHomeTitle',
      category: 'Upwork Project',
      title: 'Round Home || Landing Page',
      image: '/assets/images/my-projects/project-upwork-round.png',
      url: 'https://up-work-test-46on.vercel.app/'
    },
    {
      id: 'oldPortfolio',
      titleKey: 'oldPortfolioTitle',
      category: 'My Previous Portfolio',
      title: 'My Previous portfolio based on React JS',
      image: '/assets/images/my-projects/project-oldprotfolio.png',
      url: 'https://saifullah767.github.io/My-portfolio/'
    },
    {
      id: 'books',
      titleKey: 'booksTitle',
      category: 'Awesome Books',
      title: 'Project Based on Vanilla JS to store data',
      image: '/assets/images/my-projects/project-awesomeBooks.png',
      url: 'https://saifullah767.github.io/Awesome-Books-ES6/'
    },
    {
      id: 'template',
      titleKey: 'templateTitle',
      category: 'Portfolio Website Project',
      title: 'Figma to HTML / CSS convert template project',
      image: '/assets/images/my-projects/project-portfolio-module.png',
      url: 'https://saifullah767.github.io/Portfolio_module/project_one.html'
    }
  ],
  testimonials: [
    {
      name: 'Juan Francisco Rosario Suli',
      role: 'Industrial Engineer and Full-Stack Web Developer',
      source: 'via LinkedIn',
      title: 'Pair Programming',
      image: '/assets/images/testimonial/1.png',
      text:
        'Saif is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled at Microverse, and during that time his work ethic blew me away. Saif views writing clean, accessible code as a calling, and he is great at identifying areas where we can improve UI. He is also super friendly; by the time our project was done, I felt like we had known each other for years. I highly recommend him.'
    },
    {
      name: 'Arturo Hermida',
      role: 'Full-Stack Web Developer | JavaScript | .Net MVC | React | Redux',
      source: 'via LinkedIn',
      title: 'Pair Programming',
      image: '/assets/images/testimonial/2.png',
      text:
        'I had the privilege of working with Saifullah during pair-programming activities at Microverse. Saifullah is proactive, result-oriented, responsible, and technically a strong teammate. He always puts in the energy and time to complete tasks with high quality and consistency. He will definitely be a great asset to any company.'
    },
    {
      name: 'Alexander (Santiago) Cardenas',
      role: 'Full-stack Developer | Telecommunications Engineer',
      source: 'via LinkedIn',
      title: 'Pair Programming',
      image: '/assets/images/testimonial/3.png',
      text:
        'I personally recommend Saifullah to any team looking for an excellent software developer. He understands project goals, code quality, and the concepts needed to find efficient solutions. I had the opportunity to work with him on different projects and found him professional, responsible, and dedicated.'
    },
    {
      name: 'Alejandro Puente Farias',
      role: 'Full-Stack Web Developer | Ruby on Rails | React & Redux',
      source: 'via LinkedIn',
      title: 'Pair Programming',
      image: '/assets/images/testimonial/4.png',
      text:
        'We worked together for a few weeks on different projects, and he is very professional and smart. He has a mind for innovation and an eye for solving complex issues.'
    }
  ],
  certifications: [
    {
      title: 'Certification of HTML / CSS',
      issuer: 'Microverse',
      subtitle: 'Learnt with the group of different people of the world',
      image: '/assets/images/Certificate/HTML CSS.png',
      credentialUrl: 'https://www.credential.net/16da5c7e-1d5a-4eb6-8519-e2db7f9accd7'
    },
    {
      title: 'Certification of JAVASCRIPT',
      issuer: 'Microverse',
      subtitle: 'Learnt with the group of different people of the world',
      image: '/assets/images/Certificate/JAVASCRIPT.png',
      credentialUrl: 'https://www.credential.net/6e89bfaf-6d9c-43a9-a15a-78f23c1ffd4f'
    },
    {
      title: 'Certification of REACT / REDUX',
      issuer: 'Microverse',
      subtitle: 'Learnt with the group of different people of the world',
      image: '/assets/images/Certificate/REACT REDUX.png',
      credentialUrl: 'https://www.credential.net/957cbb8d-c54e-43f8-8446-94c227ae0356'
    },
    {
      title: 'Certification of RUBY / DATABASES',
      issuer: 'Microverse',
      subtitle: 'Learnt with the group of different people of the world',
      image: '/assets/images/Certificate/RUBY.png',
      credentialUrl: 'https://www.credential.net/848a939e-e0e3-4e1d-b014-ef8be3245144'
    },
    {
      title: 'Certification of RUBY on RAILS',
      issuer: 'Microverse',
      subtitle: 'Learnt with the group of different people of the world',
      image: '/assets/images/Certificate/ror.png',
      credentialUrl: 'https://www.credential.net/be449ad2-7616-4564-84f4-906934bdaaa7'
    }
  ],
  contact: {
    subtitle: 'Get In Touch',
    title: 'Contact With Me',
    email: 'hello@iamsaifullah.com'
  },
  footer: {
    logo: '/assets/images/logo-for-portfolio.png',
    groups: [
      {
        title: 'Expertise',
        links: ['Vue.js', 'React', 'Laravel', 'AI Integrations', 'SaaS Products']
      },
      {
        title: 'Services',
        links: ['Landing Pages', 'Website Portfolio', 'Web Development', 'Design to Real world website', 'Connect Front-end to Back-end']
      },
      {
        title: 'Why Me?',
        links: ['Friendly', 'Responsive', 'Guide about best possibility', 'Support', 'Clean Code']
      }
    ]
  }
};
