/**
 * Portfolio translations.
 *
 * Locale codes follow BCP 47 / ISO conventions:
 * - en: English (source and fallback language)
 * - da: Danish
 * - de: German
 *
 * Keep URLs, email addresses, personal names, product names, and technology names
 * in portfolioData.js. Only language-dependent copy belongs in this file.
 */

export const defaultLocale = 'en';

export const supportedLocales = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'da', label: 'Danish', nativeLabel: 'Dansk' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch' }
];

export const translations = {
  en: {
    meta: {
      title: 'Saifullah Jamali | Full-Stack Developer (React, Vue, Tailwind, AI)',
      description:
        'Saifullah Jamali is a remote full-stack web developer building React, Vue, Tailwind, Laravel, and AI-powered web apps for startups and businesses.',
      keywords:
        'Saifullah, Saifullah Jamali, full-stack developer, remote web developer, React developer, Vue developer, Tailwind CSS developer, Laravel developer, AI web app developer, portfolio',
      socialTitle: 'Saifullah Jamali | Full-Stack React, Vue & AI Web Developer',
      socialDescription:
        'Remote full-stack developer specializing in React, Vue, Tailwind, Laravel, and AI-integrated web applications.',
      imageAlt: 'Saifullah Jamali portfolio logo',
      siteName: 'Saifullah Portfolio',
      jobTitle: 'Full-Stack Web Developer'
    },
    nav: {
      home: 'Home',
      clientWork: 'Client Work',
      projects: 'Projects',
      details: 'My Details',
      contact: 'Contact'
    },
    layout: {
      language: 'Select language',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      mobileWelcome: 'Welcome to my profile.',
      findMe: 'You can also find me on',
      backToTop: 'Back to top',
      logoAlt: 'Saifullah logo'
    },
    splash: {
      name: 'Saifullah',
      tagline: 'Designer. Developer. Problem Solver.',
      logoAlt: 'Saifullah logo'
    },
    about: {
      greeting: "Hi, I'm",
      title:
        'Remote full-stack web developer building React, Vue, Tailwind, Laravel, and AI-powered web applications.',
      role: 'Full-Stack Web Developer | React, Vue, Tailwind, Laravel, AI Integrations',
      socialTitle: 'You can also find me on:',
      downloadPrompt: 'Download my résumé:',
      downloadButton: 'DOWNLOAD CV',
      contactButton: 'CONTACT ME',
      portraitAlt: 'Portrait of Saifullah'
    },
    clientWork: {
      subtitle: 'Featured Work',
      title: "Products I've Worked On",
      description:
        "A selection of production apps I've contributed to across marketing, video, lead generation, and digital commerce.",
      contribution: 'Product contribution',
      hint: 'Select a product to visit the live app.',
      visitWebsite: 'Visit {name} website',
      logoAlt: '{name} logo'
    },
    projects: {
      subtitle: 'Visit my projects',
      title: 'Projects',
      description:
        "A selection of personal products, practical experiments, and web experiences I've built.",
      previous: 'Show previous projects',
      next: 'Show next projects',
      pages: 'Project pages',
      showPage: 'Show project page {current} of {total}',
      items: {
        siteSnapCategory: 'Personal Tool',
        siteSnapTitle: 'SITESNAP LIVE WEBSITE MOCKUP GENERATOR',
        kanbanCategory: 'Old To-Do List → New Kanban Board',
        kanbanTitle: 'KANBAN BOARD WORKFLOW UPGRADE',
        kuickstoreCategory: 'AI E-commerce Store Builder',
        capstoneCategory: 'CAPSTONE PROJECT',
        capstoneTitle: 'CC GLOBAL SUMMIT LANDING PAGE',
        roundHomeCategory: 'Upwork Project',
        roundHomeTitle: 'Round Home | Landing Page',
        oldPortfolioCategory: 'My Previous Portfolio',
        oldPortfolioTitle: 'My previous React portfolio',
        booksCategory: 'Awesome Books',
        booksTitle: 'Vanilla JavaScript data-storage project',
        templateCategory: 'Portfolio Website Project',
        templateTitle: 'Figma-to-HTML/CSS template conversion'
      }
    },
    details: {
      subtitle: '4+ Years of Experience',
      title: 'My Details',
      tabs: {
        education: 'Education',
        skills: 'Professional Skills',
        experience: 'Experience'
      },
      features: 'Skills',
      designSkills: 'Design Skills',
      developmentSkills: 'Development Skills',
      educationTitle: 'Education',
      experienceTitle: 'Job Experience',
      skillNames: {
        portfolio: 'PORTFOLIO',
        landingPage: 'LANDING PAGE',
        database: 'DATABASE',
        apiDevelopment: 'API DEVELOPMENT'
      },
      education: {
        microverseSubtitle: 'Global Remote School of Programming',
        microverseDescription:
          'Microverse graduate with full-stack web development training focused on remote collaboration and real-world project experience.',
        intermediateTitle: 'Intermediate',
        intermediateSubtitle: 'Pre-Engineering',
        intermediateDescription:
          'This preparatory program provided the essential knowledge and problem-solving skills needed for a range of engineering disciplines.',
        aptechSubtitle: 'School of Information Technology',
        aptechDescription:
          'Aptech Certified Professional with practical skills in problem-solving and software development.',
        bachelorsTitle: "Bachelor's Degree",
        bachelorsSubtitle: 'International Relations',
        bachelorsDescription:
          'A degree in International Relations that developed my understanding of global politics, the Cold War, and decision-making in critical situations.'
      },
      experience: {
        internTitle: 'Student Intern',
        internDescription:
          'Participated in code reviews and exchanged constructive feedback with peers and mentors to improve my development skills.',
        developerTitle: 'Web Developer',
        developerDescription:
          'Worked on Vue.js frontend development, created Laravel APIs, and connected frontend interfaces to Laravel-backed databases.',
        mentorTitle: 'Mentor',
        mentorDescription:
          'Guided students through coding problems, helped them strengthen their communication skills, and supported collaboration across globally distributed teams.'
      }
    },
    testimonials: {
      title: 'Testimonials',
      source: 'via LinkedIn',
      pairProgramming: 'Pair Programming',
      imageAlt: 'Testimonial from {name}',
      pagination: 'Testimonial pagination',
      goTo: 'Go to testimonial {number}',
      roles: {
        juan: 'Industrial Engineer and Full-Stack Web Developer',
        arturo: 'Full-Stack Web Developer | JavaScript | .NET MVC | React | Redux',
        alexander: 'Full-Stack Developer | Telecommunications Engineer',
        alejandro: 'Full-Stack Web Developer | Ruby on Rails | React & Redux'
      },
      quotes: {
        juan:
          'Saif is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled at Microverse, and during that time his work ethic blew me away. Saif views writing clean, accessible code as a calling, and he is great at identifying areas where we can improve UI. He is also super friendly; by the time our project was done, I felt like we had known each other for years. I highly recommend him.',
        arturo:
          'I had the privilege of working with Saifullah during pair-programming activities at Microverse. Saifullah is proactive, result-oriented, responsible, and technically a strong teammate. He always puts in the energy and time to complete tasks with high quality and consistency. He will definitely be a great asset to any company.',
        alexander:
          'I personally recommend Saifullah to any team looking for an excellent software developer. He understands project goals, code quality, and the concepts needed to find efficient solutions. I had the opportunity to work with him on different projects and found him professional, responsible, and dedicated.',
        alejandro:
          'We worked together for a few weeks on different projects, and he is very professional and smart. He has a mind for innovation and an eye for solving complex issues.'
      }
    },
    certifications: {
      title: 'Professional Certifications',
      credentialsButton: 'VIEW CREDENTIAL',
      learningSubtitle: 'Completed through collaborative learning with people from around the world.',
      htmlCss: 'HTML/CSS Certification',
      javascript: 'JavaScript Certification',
      reactRedux: 'React/Redux Certification',
      rubyDatabases: 'Ruby/Databases Certification',
      rubyRails: 'Ruby on Rails Certification'
    },
    contact: {
      subtitle: 'Get in Touch',
      title: 'Contact Me',
      name: 'Your Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sending: 'Sending…',
      send: 'Send Message',
      notConfigured: 'The contact form is not configured yet.',
      failed: 'Sending failed. Please try again in a moment.',
      success: 'Message sent successfully. I will get back to you soon.'
    },
    thankYou: {
      eyebrow: 'Thank You',
      title: 'Your message has been sent.',
      message: 'Thanks for contacting me. I will get back to you as soon as possible.',
      button: 'Send Another Message'
    },
    footer: {
      expertise: 'Expertise',
      services: 'Services',
      whyMe: 'Why Me?',
      portfolio: 'Portfolio Websites',
      landingPages: 'Landing Pages',
      webDevelopment: 'Web Development',
      designToWebsite: 'Design-to-Website Development',
      frontendBackend: 'Frontend and Backend Integration',
      friendly: 'Friendly',
      responsive: 'Responsive',
      guidance: 'Practical Guidance',
      support: 'Support',
      cleanCode: 'Clean Code',
      databaseStructure: 'Database Architecture',
      webDesign: 'Web Design'
    }
  },

  da: {
    meta: {
      title: 'Saifullah Jamali | Full-stack-udvikler (React, Vue, Tailwind, AI)',
      description:
        'Saifullah Jamali er en remote full-stack-webudvikler, der bygger webapps med React, Vue, Tailwind, Laravel og AI til startups og virksomheder.',
      keywords:
        'Saifullah, Saifullah Jamali, full-stack-udvikler, remote webudvikler, React-udvikler, Vue-udvikler, Tailwind CSS-udvikler, Laravel-udvikler, AI-webapp-udvikler, portfolio',
      socialTitle: 'Saifullah Jamali | Full-stack React-, Vue- og AI-webudvikler',
      socialDescription:
        'Remote full-stack-udvikler med speciale i React, Vue, Tailwind, Laravel og AI-integrerede webapplikationer.',
      imageAlt: 'Logo for Saifullah Jamalis portfolio',
      siteName: 'Saifullahs portfolio',
      jobTitle: 'Full-stack-webudvikler'
    },
    nav: {
      home: 'Forside',
      clientWork: 'Kundearbejde',
      projects: 'Projekter',
      details: 'Om mig',
      contact: 'Kontakt'
    },
    layout: {
      language: 'Vælg sprog',
      openMenu: 'Åbn navigationsmenuen',
      closeMenu: 'Luk navigationsmenuen',
      mobileWelcome: 'Velkommen til min profil.',
      findMe: 'Du kan også finde mig på',
      backToTop: 'Tilbage til toppen',
      logoAlt: 'Saifullah-logo'
    },
    splash: {
      name: 'Saifullah',
      tagline: 'Designer. Udvikler. Problemløser.',
      logoAlt: 'Saifullah-logo'
    },
    about: {
      greeting: 'Hej, jeg er',
      title:
        'Remote full-stack-webudvikler, der bygger webapplikationer med React, Vue, Tailwind, Laravel og AI.',
      role: 'Full-stack-webudvikler | React, Vue, Tailwind, Laravel, AI-integrationer',
      socialTitle: 'Du kan også finde mig på:',
      downloadPrompt: 'Download mit CV:',
      downloadButton: 'DOWNLOAD CV',
      contactButton: 'KONTAKT MIG',
      portraitAlt: 'Portræt af Saifullah'
    },
    clientWork: {
      subtitle: 'Udvalgt arbejde',
      title: 'Produkter, jeg har arbejdet på',
      description:
        'Et udvalg af produktionsapps, som jeg har bidraget til inden for marketing, video, leadgenerering og digital handel.',
      contribution: 'Bidrag til produktet',
      hint: 'Vælg et produkt for at besøge den aktive app.',
      visitWebsite: 'Besøg {name}s website',
      logoAlt: '{name}-logo'
    },
    projects: {
      subtitle: 'Se mine projekter',
      title: 'Projekter',
      description:
        'Et udvalg af personlige produkter, praktiske eksperimenter og weboplevelser, jeg har bygget.',
      previous: 'Vis tidligere projekter',
      next: 'Vis næste projekter',
      pages: 'Projektsider',
      showPage: 'Vis projektside {current} af {total}',
      items: {
        siteSnapCategory: 'Personligt værktøj',
        siteSnapTitle: 'SITESNAP – GENERATOR TIL LIVE-WEBSITEMOCKUPS',
        kanbanCategory: 'Gammel opgaveliste → Nyt Kanban-board',
        kanbanTitle: 'OPGRADERING AF KANBAN-WORKFLOW',
        kuickstoreCategory: 'AI-baseret webshopbygger',
        capstoneCategory: 'AFSLUTTENDE PROJEKT',
        capstoneTitle: 'LANDINGPAGE TIL CC GLOBAL SUMMIT',
        roundHomeCategory: 'Upwork-projekt',
        roundHomeTitle: 'Round Home | Landingpage',
        oldPortfolioCategory: 'Min tidligere portfolio',
        oldPortfolioTitle: 'Min tidligere React-portfolio',
        booksCategory: 'Awesome Books',
        booksTitle: 'Datalagringsprojekt med Vanilla JavaScript',
        templateCategory: 'Portfolio-websiteprojekt',
        templateTitle: 'Konvertering af Figma-design til HTML/CSS'
      }
    },
    details: {
      subtitle: 'Mere end 4 års erfaring',
      title: 'Om mig',
      tabs: {
        education: 'Uddannelse',
        skills: 'Faglige kompetencer',
        experience: 'Erfaring'
      },
      features: 'Kompetencer',
      designSkills: 'Designkompetencer',
      developmentSkills: 'Udviklingskompetencer',
      educationTitle: 'Uddannelse',
      experienceTitle: 'Erhvervserfaring',
      skillNames: {
        portfolio: 'PORTFOLIO',
        landingPage: 'LANDINGSSIDE',
        database: 'DATABASE',
        apiDevelopment: 'API-UDVIKLING'
      },
      education: {
        microverseSubtitle: 'Global skole for remote programmering',
        microverseDescription:
          'Uddannet fra Microverse i full-stack-webudvikling med fokus på remote samarbejde og praktisk projekterfaring.',
        intermediateTitle: 'Gymnasial uddannelse',
        intermediateSubtitle: 'Forberedelse til ingeniørstudier',
        intermediateDescription:
          'Dette forberedende forløb gav den grundlæggende viden og de problemløsningskompetencer, der kræves inden for forskellige ingeniørdiscipliner.',
        aptechSubtitle: 'Skole for informationsteknologi',
        aptechDescription:
          'Aptech-certificeret specialist med praktiske kompetencer inden for problemløsning og softwareudvikling.',
        bachelorsTitle: 'Bachelorgrad',
        bachelorsSubtitle: 'Internationale relationer',
        bachelorsDescription:
          'En bachelorgrad i internationale relationer, som udviklede min forståelse for global politik, den kolde krig og beslutningstagning i kritiske situationer.'
      },
      experience: {
        internTitle: 'Praktikant',
        internDescription:
          'Deltog i kodegennemgange og udvekslede konstruktiv feedback med medstuderende og mentorer for at forbedre mine udviklingskompetencer.',
        developerTitle: 'Webudvikler',
        developerDescription:
          'Arbejdede med frontend-udvikling i Vue.js, udviklede Laravel-API’er og forbandt frontend-brugerflader med Laravel-baserede databaser.',
        mentorTitle: 'Mentor',
        mentorDescription:
          'Hjalp studerende med programmeringsproblemer, styrkede deres kommunikationsevner og understøttede samarbejde i globalt distribuerede teams.'
      }
    },
    testimonials: {
      title: 'Anbefalinger',
      source: 'via LinkedIn',
      pairProgramming: 'Parprogrammering',
      imageAlt: 'Anbefaling fra {name}',
      pagination: 'Navigation mellem anbefalinger',
      goTo: 'Gå til anbefaling {number}',
      roles: {
        juan: 'Industriingeniør og full-stack-webudvikler',
        arturo: 'Full-stack-webudvikler | JavaScript | .NET MVC | React | Redux',
        alexander: 'Full-stack-udvikler | Telekommunikationsingeniør',
        alejandro: 'Full-stack-webudvikler | Ruby on Rails | React & Redux'
      },
      quotes: {
        juan:
          'Saif er en fantastisk softwareingeniør, og hans sans for detaljer gjorde ham til en fornøjelse at arbejde sammen med. Vi parprogrammerede meget under vores tid på Microverse, og hans arbejdsmoral imponerede mig dybt. Saif ser ren og tilgængelig kode som et kald og er dygtig til at finde områder, hvor brugerfladen kan forbedres. Han er også meget venlig; da projektet var færdigt, føltes det, som om vi havde kendt hinanden i årevis. Jeg kan varmt anbefale ham.',
        arturo:
          'Jeg havde fornøjelsen af at arbejde sammen med Saifullah under parprogrammering på Microverse. Saifullah er proaktiv, resultatorienteret, ansvarlig og teknisk stærk. Han investerer altid den nødvendige energi og tid for at løse opgaver med høj kvalitet og stabilitet. Han vil være et stort aktiv for enhver virksomhed.',
        alexander:
          'Jeg anbefaler Saifullah til ethvert team, der søger en fremragende softwareudvikler. Han forstår projektmål, kodekvalitet og de principper, der skal til for at finde effektive løsninger. Jeg arbejdede sammen med ham på flere projekter og oplevede ham som professionel, ansvarlig og engageret.',
        alejandro:
          'Vi arbejdede sammen i nogle uger på forskellige projekter, og han er meget professionel og dygtig. Han tænker innovativt og har blik for at løse komplekse problemer.'
      }
    },
    certifications: {
      title: 'Professionelle certificeringer',
      credentialsButton: 'SE CERTIFIKAT',
      learningSubtitle: 'Gennemført gennem samarbejdsbaseret læring med mennesker fra hele verden.',
      htmlCss: 'HTML/CSS-certificering',
      javascript: 'JavaScript-certificering',
      reactRedux: 'React/Redux-certificering',
      rubyDatabases: 'Ruby/database-certificering',
      rubyRails: 'Ruby on Rails-certificering'
    },
    contact: {
      subtitle: 'Kontakt mig',
      title: 'Lad os tage en snak',
      name: 'Dit navn',
      email: 'E-mail',
      subject: 'Emne',
      message: 'Besked',
      sending: 'Sender…',
      send: 'Send besked',
      notConfigured: 'Kontaktformularen er endnu ikke konfigureret.',
      failed: 'Beskeden kunne ikke sendes. Prøv igen om et øjeblik.',
      success: 'Beskeden er sendt. Jeg vender tilbage hurtigst muligt.'
    },
    thankYou: {
      eyebrow: 'Tak',
      title: 'Din besked er blevet sendt.',
      message: 'Tak, fordi du kontaktede mig. Jeg vender tilbage hurtigst muligt.',
      button: 'Send en ny besked'
    },
    footer: {
      expertise: 'Ekspertise',
      services: 'Ydelser',
      whyMe: 'Hvorfor vælge mig?',
      portfolio: 'Portfolio-websites',
      landingPages: 'Landingssider',
      webDevelopment: 'Webudvikling',
      designToWebsite: 'Fra design til website',
      frontendBackend: 'Integration af frontend og backend',
      friendly: 'Venlig',
      responsive: 'Hurtig til at svare',
      guidance: 'Praktisk rådgivning',
      support: 'Support',
      cleanCode: 'Ren kode',
      databaseStructure: 'Databasearkitektur',
      webDesign: 'Webdesign'
    }
  },

  de: {
    meta: {
      title: 'Saifullah Jamali | Full-Stack-Entwickler (React, Vue, Tailwind, KI)',
      description:
        'Saifullah Jamali ist ein Remote-Full-Stack-Webentwickler und entwickelt Web-Apps mit React, Vue, Tailwind, Laravel und KI für Start-ups und Unternehmen.',
      keywords:
        'Saifullah, Saifullah Jamali, Full-Stack-Entwickler, Remote-Webentwickler, React-Entwickler, Vue-Entwickler, Tailwind-CSS-Entwickler, Laravel-Entwickler, KI-Web-App-Entwickler, Portfolio',
      socialTitle: 'Saifullah Jamali | Full-Stack-Webentwickler für React, Vue und KI',
      socialDescription:
        'Remote-Full-Stack-Entwickler mit Schwerpunkt auf React, Vue, Tailwind, Laravel und KI-integrierten Webanwendungen.',
      imageAlt: 'Logo des Portfolios von Saifullah Jamali',
      siteName: 'Saifullahs Portfolio',
      jobTitle: 'Full-Stack-Webentwickler'
    },
    nav: {
      home: 'Startseite',
      clientWork: 'Kundenprojekte',
      projects: 'Projekte',
      details: 'Über mich',
      contact: 'Kontakt'
    },
    layout: {
      language: 'Sprache auswählen',
      openMenu: 'Navigationsmenü öffnen',
      closeMenu: 'Navigationsmenü schließen',
      mobileWelcome: 'Willkommen auf meinem Profil.',
      findMe: 'Du findest mich auch auf',
      backToTop: 'Zurück nach oben',
      logoAlt: 'Saifullah-Logo'
    },
    splash: {
      name: 'Saifullah',
      tagline: 'Designer. Entwickler. Problemlöser.',
      logoAlt: 'Saifullah-Logo'
    },
    about: {
      greeting: 'Hallo, ich bin',
      title:
        'Remote-Full-Stack-Webentwickler für Webanwendungen mit React, Vue, Tailwind, Laravel und KI.',
      role: 'Full-Stack-Webentwickler | React, Vue, Tailwind, Laravel, KI-Integrationen',
      socialTitle: 'Du findest mich auch auf:',
      downloadPrompt: 'Meinen Lebenslauf herunterladen:',
      downloadButton: 'LEBENSLAUF',
      contactButton: 'KONTAKT',
      portraitAlt: 'Porträt von Saifullah'
    },
    clientWork: {
      subtitle: 'Ausgewählte Arbeiten',
      title: 'Produkte, an denen ich mitgearbeitet habe',
      description:
        'Eine Auswahl produktiver Apps, zu denen ich in den Bereichen Marketing, Video, Leadgenerierung und digitaler Handel beigetragen habe.',
      contribution: 'Produktbeitrag',
      hint: 'Wähle ein Produkt aus, um die Live-App zu besuchen.',
      visitWebsite: 'Website von {name} besuchen',
      logoAlt: '{name}-Logo'
    },
    projects: {
      subtitle: 'Meine Projekte ansehen',
      title: 'Projekte',
      description:
        'Eine Auswahl persönlicher Produkte, praktischer Experimente und Web-Erlebnisse, die ich entwickelt habe.',
      previous: 'Vorherige Projekte anzeigen',
      next: 'Nächste Projekte anzeigen',
      pages: 'Projektseiten',
      showPage: 'Projektseite {current} von {total} anzeigen',
      items: {
        siteSnapCategory: 'Persönliches Tool',
        siteSnapTitle: 'SITESNAP – GENERATOR FÜR LIVE-WEBSITE-MOCKUPS',
        kanbanCategory: 'Alte Aufgabenliste → Neues Kanban-Board',
        kanbanTitle: 'KANBAN-WORKFLOW-UPGRADE',
        kuickstoreCategory: 'KI-basierter Onlineshop-Builder',
        capstoneCategory: 'ABSCHLUSSPROJEKT',
        capstoneTitle: 'LANDINGPAGE FÜR DEN CC GLOBAL SUMMIT',
        roundHomeCategory: 'Upwork-Projekt',
        roundHomeTitle: 'Round Home | Landingpage',
        oldPortfolioCategory: 'Mein früheres Portfolio',
        oldPortfolioTitle: 'Mein früheres React-Portfolio',
        booksCategory: 'Awesome Books',
        booksTitle: 'Datenspeicherprojekt mit Vanilla JavaScript',
        templateCategory: 'Portfolio-Website-Projekt',
        templateTitle: 'Umsetzung eines Figma-Designs in HTML/CSS'
      }
    },
    details: {
      subtitle: 'Mehr als 4 Jahre Erfahrung',
      title: 'Über mich',
      tabs: {
        education: 'Ausbildung',
        skills: 'Fachkenntnisse',
        experience: 'Erfahrung'
      },
      features: 'Kenntnisse',
      designSkills: 'Designkenntnisse',
      developmentSkills: 'Entwicklungskenntnisse',
      educationTitle: 'Ausbildung',
      experienceTitle: 'Berufserfahrung',
      skillNames: {
        portfolio: 'PORTFOLIO',
        landingPage: 'LANDINGPAGE',
        database: 'DATENBANK',
        apiDevelopment: 'API-ENTWICKLUNG'
      },
      education: {
        microverseSubtitle: 'Globale Schule für Remote-Programmierung',
        microverseDescription:
          'Microverse-Absolvent mit Full-Stack-Webentwicklungsausbildung und Schwerpunkt auf Remote-Zusammenarbeit und praktischer Projekterfahrung.',
        intermediateTitle: 'Höhere Sekundarschulbildung',
        intermediateSubtitle: 'Vorbereitung auf Ingenieurwissenschaften',
        intermediateDescription:
          'Dieses Vorbereitungsprogramm vermittelte grundlegendes Wissen und Problemlösungskompetenzen für verschiedene Ingenieurdisziplinen.',
        aptechSubtitle: 'Schule für Informationstechnologie',
        aptechDescription:
          'Von Aptech zertifizierter Spezialist mit praktischen Fähigkeiten in Problemlösung und Softwareentwicklung.',
        bachelorsTitle: 'Bachelorabschluss',
        bachelorsSubtitle: 'Internationale Beziehungen',
        bachelorsDescription:
          'Ein Abschluss in Internationalen Beziehungen, der mein Verständnis für Weltpolitik, den Kalten Krieg und Entscheidungen in kritischen Situationen vertieft hat.'
      },
      experience: {
        internTitle: 'Werkstudent',
        internDescription:
          'Teilnahme an Code-Reviews und Austausch konstruktiven Feedbacks mit Kollegen und Mentoren, um meine Entwicklungsfähigkeiten zu verbessern.',
        developerTitle: 'Webentwickler',
        developerDescription:
          'Arbeitete an der Frontend-Entwicklung mit Vue.js, erstellte Laravel-APIs und verband Frontend-Oberflächen mit Laravel-basierten Datenbanken.',
        mentorTitle: 'Mentor',
        mentorDescription:
          'Unterstützte Studierende bei Programmierproblemen, stärkte ihre Kommunikationsfähigkeiten und förderte die Zusammenarbeit in weltweit verteilten Teams.'
      }
    },
    testimonials: {
      title: 'Empfehlungen',
      source: 'über LinkedIn',
      pairProgramming: 'Pair Programming',
      imageAlt: 'Empfehlung von {name}',
      pagination: 'Navigation der Empfehlungen',
      goTo: 'Zur Empfehlung {number}',
      roles: {
        juan: 'Wirtschaftsingenieur und Full-Stack-Webentwickler',
        arturo: 'Full-Stack-Webentwickler | JavaScript | .NET MVC | React | Redux',
        alexander: 'Full-Stack-Entwickler | Telekommunikationsingenieur',
        alejandro: 'Full-Stack-Webentwickler | Ruby on Rails | React & Redux'
      },
      quotes: {
        juan:
          'Saif ist ein fantastischer Softwareentwickler, und seine Detailgenauigkeit machte die Zusammenarbeit mit ihm zu einer Freude. Während unserer Zeit bei Microverse haben wir intensiv im Pair Programming gearbeitet, und seine Arbeitsmoral hat mich sehr beeindruckt. Saif betrachtet sauberen, barrierefreien Code als Berufung und erkennt sehr gut, wo sich Benutzeroberflächen verbessern lassen. Außerdem ist er ausgesprochen freundlich; am Ende unseres Projekts fühlte es sich an, als würden wir uns schon seit Jahren kennen. Ich kann ihn sehr empfehlen.',
        arturo:
          'Ich hatte das Privileg, bei Pair-Programming-Aktivitäten bei Microverse mit Saifullah zusammenzuarbeiten. Saifullah ist proaktiv, ergebnisorientiert, verantwortungsbewusst und technisch sehr kompetent. Er investiert stets die nötige Energie und Zeit, um Aufgaben hochwertig und zuverlässig abzuschließen. Er wäre für jedes Unternehmen eine große Bereicherung.',
        alexander:
          'Ich empfehle Saifullah jedem Team, das einen hervorragenden Softwareentwickler sucht. Er versteht Projektziele, Codequalität und die Konzepte, die für effiziente Lösungen erforderlich sind. Ich durfte mit ihm an mehreren Projekten arbeiten und habe ihn als professionell, verantwortungsbewusst und engagiert erlebt.',
        alejandro:
          'Wir haben einige Wochen lang an verschiedenen Projekten zusammengearbeitet, und er ist sehr professionell und klug. Er denkt innovativ und hat ein gutes Gespür für die Lösung komplexer Probleme.'
      }
    },
    certifications: {
      title: 'Berufliche Zertifizierungen',
      credentialsButton: 'ZERTIFIKAT ANSEHEN',
      learningSubtitle: 'Abgeschlossen durch gemeinschaftliches Lernen mit Menschen aus aller Welt.',
      htmlCss: 'HTML/CSS-Zertifizierung',
      javascript: 'JavaScript-Zertifizierung',
      reactRedux: 'React/Redux-Zertifizierung',
      rubyDatabases: 'Ruby/Datenbanken-Zertifizierung',
      rubyRails: 'Ruby-on-Rails-Zertifizierung'
    },
    contact: {
      subtitle: 'Kontakt aufnehmen',
      title: 'Schreib mir',
      name: 'Dein Name',
      email: 'E-Mail',
      subject: 'Betreff',
      message: 'Nachricht',
      sending: 'Wird gesendet…',
      send: 'Nachricht senden',
      notConfigured: 'Das Kontaktformular ist noch nicht konfiguriert.',
      failed: 'Senden fehlgeschlagen. Bitte versuche es gleich noch einmal.',
      success: 'Die Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei dir.'
    },
    thankYou: {
      eyebrow: 'Vielen Dank',
      title: 'Deine Nachricht wurde gesendet.',
      message: 'Danke für deine Nachricht. Ich melde mich so bald wie möglich bei dir.',
      button: 'Weitere Nachricht senden'
    },
    footer: {
      expertise: 'Fachkenntnisse',
      services: 'Leistungen',
      whyMe: 'Warum ich?',
      portfolio: 'Portfolio-Websites',
      landingPages: 'Landingpages',
      webDevelopment: 'Webentwicklung',
      designToWebsite: 'Vom Design zur Website',
      frontendBackend: 'Frontend- und Backend-Integration',
      friendly: 'Freundlich',
      responsive: 'Schnelle Reaktion',
      guidance: 'Praxisnahe Beratung',
      support: 'Support',
      cleanCode: 'Sauberer Code',
      databaseStructure: 'Datenbankarchitektur',
      webDesign: 'Webdesign'
    }
  }
};

/**
 * Returns a locale dictionary and safely falls back to English.
 */
export function getTranslations(locale = defaultLocale) {
  return translations[locale] ?? translations[defaultLocale];
}

/**
 * Replaces named placeholders such as "{name}" without changing punctuation or
 * word order in the translated sentence.
 */
export function interpolate(message, values = {}) {
  return message.replace(/\{(\w+)\}/g, (placeholder, key) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : placeholder
  );
}
