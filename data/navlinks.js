export const menuItems = [
    { type: 'link', name: 'home', label: 'Home', href: '/' },
    {
      type: 'dropdown',
      name: 'services',
      label: 'Services',
      content: [
        [
          { title: 'Full Stack Web Development', description: 'From designing the user interface to managing the server and database', href: '/services/fullstack-web' },
          { title: 'Full Stack Mobile App Development', description: 'From designing the user interface to managing the server and database', href: '/services/fullstack-mobile' },
          { title: 'API Development', description: 'Creating APIs to enable the integration of various services', href: '#' },
        ],
        [
          { title: 'Data Analysis', description: 'Explore our blog for insights.', href: '#' },
          { title: 'Data Engineering', description: 'Find answers to common questions.', href: '#' },
          { title: 'Data Science', description: 'Discover our sustainable practices.', href: '#' },
        ],
        [
          { title: 'AWS', description: 'Leveraging the comprehensive cloud computing platform provided by Amazon', href: '#' },
          { title: 'Azure', description: 'Leveraging the comprehensive cloud computing platform provided by Microsoft', href: '#' },
          { title: 'GCP', description: 'Leveraging the comprehensive cloud computing platform provided by Google', href: '#' },
        ],
      ],
    },
    {
      type: 'dropdown',
      name: 'jobs',
      label: 'Jobs',
      content: [
        [
          { title: 'Why Sifting Bytes?', description: 'Find out how our culture, family, focus and challenging projects set us apart from other service organizations', href: '/jobs/why-sbt' },
        ],
        [
          { title: 'Walk-in Events', description: 'Learn about and register for upcoming walk-in events', href: '/jobs/walk-ins' },
          { title: 'Hackathons', description: 'Learn about and register for upcoming hackathons', href: '#' },
          { title: 'Pitching', description: 'Networking with potential investors', href: '#' },
        ],
        [
          { title: 'Open Positions', description: 'Find current positions available in technology, marketing, sales, and administration', href: '/jobs' },
          { title: 'Jobs for Freshers', description: 'Join us and accelerate your growth', href: '/jobs' },
          { title: 'Jobs for Trainers', description: 'Position: Freelance', href: '/jobs' },
        ],
      ],
    },
    { type: 'link', name: 'academy', label: 'Academy', href: '/academy' },
    { type: 'link', name: 'contact-us', label: 'Contact Us', href: '/contact-us' },
  ];
  