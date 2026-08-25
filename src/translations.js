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
      title: 'Saifullah Jamali | Full-Stack Developer & AI Product Engineer',
      description:
        'Full-stack developer with 5+ years of remote experience building production SaaS, e-commerce, AI agents, and workflow automation with Vue, React, Laravel, and Tailwind CSS.',
      keywords:
        'Saifullah Jamali, full-stack developer, AI product engineer, Vue developer, React developer, Laravel developer, agentic AI, SaaS developer, workflow automation, Germany, remote developer',
      socialTitle: 'Saifullah Jamali | Full-Stack & AI Product Engineer',
      socialDescription:
        '5+ years building production SaaS, e-commerce, agentic AI, and workflow automation for distributed teams.',
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
      tagline: 'Full-Stack Developer. AI Builder. Product Engineer.',
      logoAlt: 'Saifullah logo'
    },
    about: {
      greeting: "Hi, I'm",
      title:
        'Full-stack developer with 5+ years of remote experience building production SaaS, e-commerce, and AI-enabled products.',
      role: 'Full-Stack Web Developer | AI Integrations | AI Tools',
      locationLine: '{location} · Open to remote opportunities',
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
        'Production product engineering across agentic AI, marketing automation, lead generation, video, and digital commerce.',
      contribution: 'What I built',
      technologies: 'Technologies and product areas',
      items: {
        grawt:
          'Architected agentic AI chat and generation workflows, campaign automation, an MJML email builder, and embeddable JavaScript widgets.',
        redeemlo:
          'Built a Fabric.js card designer, bulk redemption-code workflows, campaign tracking, and custom-domain verification.',
        unfold:
          'Contributed to a production video-marketing platform used to create and deliver customer-facing video experiences.',
        kuicklist:
          'Contributed to a production lead-generation product for building and distributing interactive marketing assets.',
        productdyno:
          'Developed an embedded popup AI agent with configurable specialist skills for product and support workflows.',
        listweaver:
          'Built AI-assisted checklist generation, engagement tracking, landing pages, shareable AI links, and installable AI Skills.'
      },
      hint: 'Open a product to see the live application.',
      visitWebsite: 'Visit {name} website',
      logoAlt: '{name} logo'
    },
    projects: {
      subtitle: 'Visit my projects',
      title: 'Projects',
      description:
        'Four product-led builds focused on practical workflows, responsive experiences, and AI-assisted creation.',
      privateProject: 'Private product · Details available on request',
      earlierSubtitle: 'Archive',
      earlierTitle: 'Earlier projects',
      items: {
        brandOsCategory: 'AI Brand Workspace',
        brandOsTitle: 'BRAND OS',
        brandOsDescription:
          'A brand workspace for defining voice, audience, visual identity, and reusable rules, then generating brand-aware AI Skills for content, imagery, video, and landing pages.',
        siteSnapCategory: 'Personal Tool',
        siteSnapTitle: 'SITESNAP LIVE WEBSITE MOCKUP GENERATOR',
        siteSnapDescription:
          'Preview any live URL across multiple device frames and capture the combined result in a single screenshot.',
        kanbanCategory: 'Project Management Tool',
        kanbanTitle: 'KANBAN BOARD WORKFLOW UPGRADE',
        kanbanDescription:
          'A responsive Kanban workspace with multiple boards, drag-and-drop cards, collapsible workflows, persistent state, and Google synchronization.',
        kuickstoreCategory: 'AI E-commerce Store Builder',
        kuickstoreTitle: 'KUICKSTORE',
        kuickstoreDescription:
          'An affordable commerce platform with catalog management, customizable storefronts, order tracking, analytics, and responsive seller tools.',
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
      subtitle: '5+ Years of Experience',
      title: 'My Details',
      tabs: {
        education: 'Education',
        skills: 'Professional Skills',
        experience: 'Experience'
      },
      features: 'Skills',
      educationTitle: 'Education',
      experienceTitle: 'Job Experience',
      skillGroups: {
        frontend: 'Frontend Engineering',
        backend: 'Backend & APIs',
        aiProduct: 'AI & Product',
        delivery: 'Delivery & Collaboration'
      },
      education: {
        bachelors: {
          subtitle: "Bachelor's Degree | 2019 - 2022",
          description: "Bachelor's degree completed at FUUAST."
        },
        microverse: {
          subtitle: 'Remote Software Development Program | 2022',
          description:
            'Completed 1,300+ hours of full-stack development, Git workflows, code reviews, and remote pair programming.'
        }
      },
      experience: {
        jeeglo: {
          subtitle: 'Full-Stack Developer | 2022 - Present',
          description:
            'Build Vue.js and Tailwind CSS interfaces, connect them to Laravel APIs and databases, and maintain the production landing-page builder I developed with Vue and Laravel.'
        },
        deevloopers: {
          subtitle: 'Full-Stack Developer | 2021 - 2022',
          description:
            'Created front-end interfaces, connected them to PHP back ends and databases, and supported end-to-end feature delivery.'
        },
        mentor: {
          subtitle: 'Volunteer Mentor | Feb 2022 - Present',
          description:
            'Mentor junior developers through code reviews, debugging support, clean-code guidance, and remote collaboration.'
        }
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
      title: 'Saifullah Jamali | Full-stack-udvikler og AI-produktudvikler',
      description:
        'Full-stack-udvikler med mere end 5 års remote erfaring med produktionsklare SaaS-, e-handels- og AI-produkter i Vue, React, Laravel og Tailwind CSS.',
      keywords:
        'Saifullah Jamali, full-stack-udvikler, AI-produktudvikler, Vue-udvikler, React-udvikler, Laravel-udvikler, agentisk AI, SaaS, workflowautomatisering, Tyskland, remote udvikler',
      socialTitle: 'Saifullah Jamali | Full-stack- og AI-produktudvikler',
      socialDescription:
        'Mere end 5 års erfaring med produktionsklare SaaS-, e-handels-, agentiske AI- og automatiseringsløsninger.',
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
      tagline: 'Full-stack-udvikler. AI-bygger. Produktudvikler.',
      logoAlt: 'Saifullah-logo'
    },
    about: {
      greeting: 'Hej, jeg er',
      title:
        'Full-stack-udvikler med mere end 5 års remote erfaring med produktionsklare SaaS-, e-handels- og AI-produkter.',
      role: 'Full-stack-webudvikler | AI-integrationer | AI-værktøjer',
      locationLine: '{location} · Åben for remote muligheder',
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
        'Produktudvikling i produktion inden for agentisk AI, marketingautomatisering, leadgenerering, video og digital handel.',
      contribution: 'Det har jeg bygget',
      technologies: 'Teknologier og produktområder',
      items: {
        grawt:
          'Designede agentiske AI-chat- og genereringsflows, kampagneautomatisering, en MJML-mailbygger og indlejringsbare JavaScript-widgets.',
        redeemlo:
          'Byggede en kortdesigner med Fabric.js, masseflows til indløsningskoder, kampagnesporing og verificering af egne domæner.',
        unfold:
          'Bidrog til en produktionsklar videomarketingplatform til oprettelse og levering af kundevendte videooplevelser.',
        kuicklist:
          'Bidrog til et produktionsklart leadgenereringsprodukt til opbygning og distribution af interaktive marketingaktiver.',
        productdyno:
          'Udviklede en indlejret popup-AI-agent med konfigurerbare specialkompetencer til produkt- og supportflows.',
        listweaver:
          'Byggede AI-assisterede tjeklister, engagementssporing, landingssider, delbare AI-links og installerbare AI Skills.'
      },
      hint: 'Åbn et produkt for at se den aktive applikation.',
      visitWebsite: 'Besøg {name}s website',
      logoAlt: '{name}-logo'
    },
    projects: {
      subtitle: 'Se mine projekter',
      title: 'Projekter',
      description:
        'Fire produktorienterede løsninger med fokus på praktiske workflows, responsive oplevelser og AI-assisteret skabelse.',
      privateProject: 'Privat produkt · Detaljer fås på forespørgsel',
      earlierSubtitle: 'Arkiv',
      earlierTitle: 'Tidligere projekter',
      items: {
        brandOsCategory: 'AI-brandworkspace',
        brandOsTitle: 'BRAND OS',
        brandOsDescription:
          'Et brandworkspace til stemme, målgruppe, visuel identitet og genbrugelige regler samt brandbevidste AI Skills til indhold, billeder, video og landingssider.',
        siteSnapCategory: 'Personligt værktøj',
        siteSnapTitle: 'SITESNAP – GENERATOR TIL LIVE-WEBSITEMOCKUPS',
        siteSnapDescription:
          'Vis enhver live-URL i flere enhedsrammer, og gem det samlede resultat i ét skærmbillede.',
        kanbanCategory: 'Projektstyringsværktøj',
        kanbanTitle: 'OPGRADERING AF KANBAN-WORKFLOW',
        kanbanDescription:
          'Et responsivt Kanban-workspace med flere boards, træk-og-slip-kort, sammenklappelige flows, vedvarende data og Google-synkronisering.',
        kuickstoreCategory: 'AI-baseret webshopbygger',
        kuickstoreTitle: 'KUICKSTORE',
        kuickstoreDescription:
          'En prisvenlig handelsplatform med katalogstyring, tilpassede storefronts, ordresporing, analyse og responsive sælgerværktøjer.',
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
      subtitle: 'Mere end 5 års erfaring',
      title: 'Om mig',
      tabs: {
        education: 'Uddannelse',
        skills: 'Faglige kompetencer',
        experience: 'Erfaring'
      },
      features: 'Kompetencer',
      educationTitle: 'Uddannelse',
      experienceTitle: 'Erhvervserfaring',
      skillGroups: {
        frontend: 'Frontend-udvikling',
        backend: 'Backend og API’er',
        aiProduct: 'AI og produkt',
        delivery: 'Levering og samarbejde'
      },
      education: {
        bachelors: {
          subtitle: 'Bachelorgrad | 2019 - 2022',
          description: 'Bachelorgrad gennemført på FUUAST.'
        },
        microverse: {
          subtitle: 'Remote softwareudviklingsprogram | 2022',
          description:
            'Gennemførte mere end 1.300 timers full-stack-udvikling, Git-workflows, kodegennemgange og remote parprogrammering.'
        }
      },
      experience: {
        jeeglo: {
          subtitle: 'Full-stack-udvikler | 2022 - nu',
          description:
            'Bygger Vue.js- og Tailwind CSS-brugerflader, forbinder dem med Laravel-API’er og databaser og udviklede en produktionsklar landingssidebygger.'
        },
        deevloopers: {
          subtitle: 'Full-stack-udvikler | 2021 - 2022',
          description:
            'Skabte frontend-brugerflader, forbandt dem med PHP-backends og databaser og understøttede levering af komplette funktioner.'
        },
        mentor: {
          subtitle: 'Frivillig mentor | feb. 2022 - nu',
          description:
            'Mentorerer juniorudviklere gennem kodegennemgange, debugging, clean-code-vejledning og remote samarbejde.'
        }
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
      title: 'Saifullah Jamali | Full-Stack- und KI-Produktentwickler',
      description:
        'Full-Stack-Entwickler mit über 5 Jahren Remote-Erfahrung in produktiven SaaS-, E-Commerce- und KI-Produkten mit Vue, React, Laravel und Tailwind CSS.',
      keywords:
        'Saifullah Jamali, Full-Stack-Entwickler, KI-Produktentwickler, Vue-Entwickler, React-Entwickler, Laravel-Entwickler, agentische KI, SaaS, Workflow-Automatisierung, Deutschland, Remote-Entwickler',
      socialTitle: 'Saifullah Jamali | Full-Stack- und KI-Produktentwickler',
      socialDescription:
        'Über 5 Jahre Erfahrung mit produktiven SaaS-, E-Commerce-, agentischen KI- und Automatisierungslösungen.',
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
      tagline: 'Full-Stack-Entwickler. KI-Builder. Produktentwickler.',
      logoAlt: 'Saifullah-Logo'
    },
    about: {
      greeting: 'Hallo, ich bin',
      title:
        'Full-Stack-Entwickler mit über 5 Jahren Remote-Erfahrung in produktiven SaaS-, E-Commerce- und KI-Produkten.',
      role: 'Full-Stack-Webentwickler | KI-Integrationen | KI-Tools',
      locationLine: '{location} · Offen für Remote-Positionen',
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
        'Produktentwicklung in den Bereichen agentische KI, Marketingautomatisierung, Leadgenerierung, Video und digitaler Handel.',
      contribution: 'Mein Beitrag',
      technologies: 'Technologien und Produktbereiche',
      items: {
        grawt:
          'Konzipierte agentische KI-Chat- und Generierungsabläufe, Kampagnenautomatisierung, einen MJML-E-Mail-Builder und einbettbare JavaScript-Widgets.',
        redeemlo:
          'Entwickelte einen Kartendesigner mit Fabric.js, Massenabläufe für Einlösecodes, Kampagnentracking und die Verifizierung eigener Domains.',
        unfold:
          'Arbeitete an einer produktiven Videomarketing-Plattform zur Erstellung und Auslieferung kundenorientierter Videoerlebnisse mit.',
        kuicklist:
          'Arbeitete an einem produktiven Leadgenerierungsprodukt zum Erstellen und Verteilen interaktiver Marketinginhalte mit.',
        productdyno:
          'Entwickelte einen eingebetteten Popup-KI-Agenten mit konfigurierbaren Spezialfähigkeiten für Produkt- und Supportabläufe.',
        listweaver:
          'Entwickelte KI-gestützte Checklisten, Engagement-Tracking, Landingpages, teilbare KI-Links und installierbare AI Skills.'
      },
      hint: 'Öffne ein Produkt, um die Live-Anwendung anzusehen.',
      visitWebsite: 'Website von {name} besuchen',
      logoAlt: '{name}-Logo'
    },
    projects: {
      subtitle: 'Meine Projekte ansehen',
      title: 'Projekte',
      description:
        'Vier produktorientierte Lösungen mit Fokus auf praktische Workflows, responsive Erlebnisse und KI-gestützte Erstellung.',
      privateProject: 'Privates Produkt · Details auf Anfrage',
      earlierSubtitle: 'Archiv',
      earlierTitle: 'Frühere Projekte',
      items: {
        brandOsCategory: 'KI-Marken-Workspace',
        brandOsTitle: 'BRAND OS',
        brandOsDescription:
          'Ein Marken-Workspace für Tonalität, Zielgruppe, visuelle Identität und wiederverwendbare Regeln sowie markenkonforme AI Skills für Inhalte, Bilder, Videos und Landingpages.',
        siteSnapCategory: 'Persönliches Tool',
        siteSnapTitle: 'SITESNAP – GENERATOR FÜR LIVE-WEBSITE-MOCKUPS',
        siteSnapDescription:
          'Zeigt jede Live-URL in mehreren Geräterahmen und speichert das kombinierte Ergebnis in einem einzigen Screenshot.',
        kanbanCategory: 'Projektmanagement-Tool',
        kanbanTitle: 'KANBAN-WORKFLOW-UPGRADE',
        kanbanDescription:
          'Ein responsiver Kanban-Workspace mit mehreren Boards, Drag-and-drop-Karten, einklappbaren Abläufen, persistentem Zustand und Google-Synchronisierung.',
        kuickstoreCategory: 'KI-basierter Onlineshop-Builder',
        kuickstoreTitle: 'KUICKSTORE',
        kuickstoreDescription:
          'Eine erschwingliche Handelsplattform mit Katalogverwaltung, anpassbaren Storefronts, Bestelltracking, Analysen und responsiven Verkäuferwerkzeugen.',
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
      subtitle: 'Mehr als 5 Jahre Erfahrung',
      title: 'Über mich',
      tabs: {
        education: 'Ausbildung',
        skills: 'Fachkenntnisse',
        experience: 'Erfahrung'
      },
      features: 'Kenntnisse',
      educationTitle: 'Ausbildung',
      experienceTitle: 'Berufserfahrung',
      skillGroups: {
        frontend: 'Frontend-Entwicklung',
        backend: 'Backend und APIs',
        aiProduct: 'KI und Produkt',
        delivery: 'Auslieferung und Zusammenarbeit'
      },
      education: {
        bachelors: {
          subtitle: 'Bachelorabschluss | 2019 - 2022',
          description: 'Bachelorabschluss an der FUUAST.'
        },
        microverse: {
          subtitle: 'Remote-Softwareentwicklungsprogramm | 2022',
          description:
            'Absolvierte über 1.300 Stunden Full-Stack-Entwicklung, Git-Workflows, Code-Reviews und Remote-Pair-Programming.'
        }
      },
      experience: {
        jeeglo: {
          subtitle: 'Full-Stack-Entwickler | 2022 - heute',
          description:
            'Entwickelt Oberflächen mit Vue.js und Tailwind CSS, verbindet sie mit Laravel-APIs und Datenbanken und entwickelte einen produktiven Landingpage-Builder.'
        },
        deevloopers: {
          subtitle: 'Full-Stack-Entwickler | 2021 - 2022',
          description:
            'Erstellte Frontend-Oberflächen, verband sie mit PHP-Backends und Datenbanken und unterstützte die durchgängige Feature-Auslieferung.'
        },
        mentor: {
          subtitle: 'Ehrenamtlicher Mentor | Feb. 2022 - heute',
          description:
            'Mentor für Juniorentwickler bei Code-Reviews, Debugging, Clean-Code-Praktiken und Remote-Zusammenarbeit.'
        }
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
