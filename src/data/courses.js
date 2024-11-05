export const courses = [
  {
    id: "course_001",
    slug:"html",
    title: "Complete HTML for Beginners",
    description: "Learn the basics of HTML to build the structure of web pages.",
    price: "Free",
    classType: "Online",
    isPartOfLearningPath: true,
    learningPathSlug: "/",
    courseType: "Module",    
    tags: [
      { 
        label: 'Web Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' 
      },
      { 
        label: 'Front End Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
      },
    ],
    duration: "150 days",
    instructor: "Alice Johnson",
    demoVideoSrc: "https://www.youtube.com/embed/4bnJG2UDr9A",
    icon: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    courseContent: [
      {
        topicId: "1",
        topicName: "Introduction",
        topicSlug: "intro-html",
        topicVideoLink: "https://www.youtube.com/embed/4bnJG2UDr9A",
        topicDuration: "2:00",
        subTopics: [],
        faqs: [
          {
            id: 'q1',
            question: 'What is the capital of France?',
            options: [
              { id: 'a', text: 'Berlin' },
              { id: 'b', text: 'Madrid' },
              { id: 'c', text: 'Paris', isCorrect: true },
              { id: 'd', text: 'Rome' },
            ],
            explanation: 'The capital of France is Paris.',
          },
          {
            id: 'q2',
            question: 'What is 2 + 2?',
            options: [
              { id: 'a', text: '3' },
              { id: 'b', text: '4', isCorrect: true },
              { id: 'c', text: '5' },
              { id: 'd', text: '6' },
            ],
            explanation: '2 + 2 equals 4.',
          },
          {
            id: 'q3',
            question: 'Which planet is known as the Red Planet?',
            options: [
              { id: 'a', text: 'Earth' },
              { id: 'b', text: 'Venus' },
              { id: 'c', text: 'Mars', isCorrect: true },
              { id: 'd', text: 'Jupiter' },
            ],
            explanation: 'Mars is known as the Red Planet because of its reddish appearance.',
          },
          {
            id: 'q4',
            question: 'What is the chemical symbol for water?',
            options: [
              { id: 'a', text: 'O2' },
              { id: 'b', text: 'H2O', isCorrect: true },
              { id: 'c', text: 'CO2' },
              { id: 'd', text: 'NaCl' },
            ],
            explanation: 'The chemical symbol for water is H2O.',
          },
        ],
        notes : {},
        references: [{},{}],
      },
      {
        topicId: "2",
        topicName: "Getting Started",
        topicSlug: "get-started",
        topicVideoLink: "https://youtu.be/MuZySo5lF8E?si=rAHUSzctVfNKuK0m",
        topicDuration: "3:00",
        subTopics: [
          {
            subTopicId: "1",
            subTopicName: "Creating variables",
            subTopicSlug: "creating-vars",
            subTopicVideoLink: "https://youtu.be/MuZySo5lF8E?si=rAHUSzctVfNKuK0m",
            subTopicDuration: "2:00",            
            faqs: [
              {
                id: 'q1',
                question: 'What is the capital of India?',
                options: [
                  { id: 'a', text: 'Berlin' },
                  { id: 'b', text: 'Madrid' },
                  { id: 'c', text: 'Delhi', isCorrect: true },
                  { id: 'd', text: 'Rome' },
                ],
                explanation: 'The capital of France is Paris.',
              },
              {
                id: 'q2',
                question: 'What is 2 + 2?',
                options: [
                  { id: 'a', text: '3' },
                  { id: 'b', text: '4', isCorrect: true },
                  { id: 'c', text: '5' },
                  { id: 'd', text: '6' },
                ],
                explanation: '2 + 2 equals 4.',
              },
              {
                id: 'q3',
                question: 'Which planet is known as the Red Planet?',
                options: [
                  { id: 'a', text: 'Earth' },
                  { id: 'b', text: 'Venus' },
                  { id: 'c', text: 'Mars', isCorrect: true },
                  { id: 'd', text: 'Jupiter' },
                ],
                explanation: 'Mars is known as the Red Planet because of its reddish appearance.',
              },
              {
                id: 'q4',
                question: 'What is the chemical symbol for water?',
                options: [
                  { id: 'a', text: 'O2' },
                  { id: 'b', text: 'H2O', isCorrect: true },
                  { id: 'c', text: 'CO2' },
                  { id: 'd', text: 'NaCl' },
                ],
                explanation: 'The chemical symbol for water is H2O.',
              },
            ],
            notes : {},
            references: [{},{}],
          },
          {
            subTopicId: "2",
            subTopicName: "Installing HTML on local computer",
            subTopicSlug: "install-html",
            subTopicVideoLink: "https://youtu.be/MuZySo5lF8E?si=rAHUSzctVfNKuK0m",
            subTopicDuration: "2:00",            
            faqs: [
              {
                id: 'q1',
                question: 'What is the capital of France?',
                options: [
                  { id: 'a', text: 'Berlin' },
                  { id: 'b', text: 'Madrid' },
                  { id: 'c', text: 'Paris', isCorrect: true },
                  { id: 'd', text: 'Rome' },
                ],
                explanation: 'The capital of France is Paris.',
              },
              {
                id: 'q2',
                question: 'What is 2 + 2?',
                options: [
                  { id: 'a', text: '3' },
                  { id: 'b', text: '4', isCorrect: true },
                  { id: 'c', text: '5' },
                  { id: 'd', text: '6' },
                ],
                explanation: '2 + 2 equals 4.',
              },
              {
                id: 'q3',
                question: 'Which planet is known as the Red Planet?',
                options: [
                  { id: 'a', text: 'Earth' },
                  { id: 'b', text: 'Venus' },
                  { id: 'c', text: 'Mars', isCorrect: true },
                  { id: 'd', text: 'Jupiter' },
                ],
                explanation: 'Mars is known as the Red Planet because of its reddish appearance.',
              },
              {
                id: 'q4',
                question: 'What is the chemical symbol for water?',
                options: [
                  { id: 'a', text: 'O2' },
                  { id: 'b', text: 'H2O', isCorrect: true },
                  { id: 'c', text: 'CO2' },
                  { id: 'd', text: 'NaCl' },
                ],
                explanation: 'The chemical symbol for water is H2O.',
              },
            ],
            notes : {},
            references: [{},{}],
          },
        ],
      },      
    ],
    reviews: [
      {
        reviewId: "r1",
        reviewerName: "Michael Goughing",        
        reviewDescription: "Excellent explanation",
        reviewDate: "November 18, 2023 at 15:08",
        reviewRating: "5",
      },
      {
        reviewId: "r2",
        reviewerName: "John Doe",        
        reviewDescription: "Bad explanation",
        reviewDate: "November 28, 2024 at 15:08",
        reviewRating: "1",
      }
    ],
    questions : [
      {
        title: "What are the key features of the latest iMacing models?",
        author: "Flowbite Experts",
        date: "November 20 2023 • 12:45",
        answers: [
          {
            heading: "Apple Silicon:",
            text: " Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency."
          },
          {
            heading: "Slimmer Design:",
            text: " Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors."
          }
        ],
        yesVotes: 16,
        noVotes: 3
      },
      {
        title: "What is the Retina display on an iMac, and why is it significant?",
        author: "Flowbite Experts",
        date: "November 20 2023 • 12:45",
        answers: [
          {
            heading: "Apple Silicon:",
            text: " Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency."
          },
          {
            heading: "Slimmer Design:",
            text: " Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors."
          },
          {
            heading: "Vivid Retina Display:",
            text: " iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality."
          }
        ],
        yesVotes: 16,
        noVotes: 3
      }
    ],
    references: [
      {
        title: 'Apple M6',
        subtitle: 'Processor Model',
        items: [
          'Mid-grade processor',
          'Great for most tasks',
          'Multitasks well'
        ],
        linkUrl: '#',
        linkText: 'Why is the processor important?'
      },
      {
        title: 'Apple M3 16-core',
        subtitle: 'Graphics',
        items: [
          'Budget friendly',
          'Basic gaming',
          'Ideal for casual gamers'
        ],
        linkUrl: '#',
        linkText: 'Choose the best graphic card'
      }
    ]
  },
  {
    id: "course_002",
    slug:"css",
    title: "CSS Essentials",
    description: "Understand the fundamentals of CSS to style web pages.",
    price: "Free",
    classType: "Online",
    courseType: "Module",
    tags: [
      { 
        label: 'Web Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' 
      },
      { 
        label: 'Front End Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
      },
    ],    
    duration: "15 days",
    instructor: "Bob Smith",
    demoVideo: "https://www.youtube.com/embed/4bnJG2UDr9A",
    icon: "https://example.com/icons/css-icon.png",
    reviews: "1,001+",
  },
  {
    id: "course_003",
    slug:"js",
    title: "JavaScript Basics",
    description: "Get started with JavaScript programming for dynamic web content.",
    price: "Free",
    classType: "Online",
    courseType: "Module",
    tags: [
      { 
        label: 'Web Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' 
      },
      { 
        label: 'Front End Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
      },
    ],
    duration: "1 month",
    instructor: "Carol White",
    demoVideo: "https://www.youtube.com/embed/4bnJG2UDr9A",
    icon: "https://example.com/icons/javascript-icon.png",
    reviews: "1,002+",
  },
  {
    id: "course_004",
    slug:"reactjs",
    title: "ReactJS Development",
    description: "Master ReactJS to build modern and efficient web applications.",
    price: "Free",
    classType: "Online",
    courseType: "Module",
    tags: [
      { 
        label: 'Web Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' 
      },
      { 
        label: 'Front End Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
      },
    ],
    duration: "1 month",
    instructor: "Eva Green",
    demoVideo: "https://www.youtube.com/embed/4bnJG2UDr9A",
    icon: "https://example.com/icons/reactjs-icon.png",
    reviews: "1,003+",
  },
  {
    id: "course_005",
    slug:"web-dev",
    title: "Web Development",
    description: "Learn Web development from scratch and build various projects.",
    price: "Free",
    classType: "Classroom",
    courseType: "Learning Path",
    tags: [
      { 
        label: 'Web Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' 
      },
      { 
        label: 'Front End Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
      },
    ],
    duration: "5 months",
    instructor: "David Brown",
    demoVideo: "https://www.youtube.com/embed/4bnJG2UDr9A",
    icon: "https://example.com/icons/python-icon.png",
    reviews: "1,004+",
  },  
  {
    id: "course_006",
    slug:"azure-dev",
    title: "Azure Developer",
    description: "Become an Azure Developer by learning cloud development on Microsoft Azure.",
    price: "Free",
    classType: "Classroom",
    courseType: "Learning Path",
    tags: [
      { 
        label: 'Web Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' 
      },
      { 
        label: 'Front End Development', 
        iconPath: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
      },
    ],
    duration: "2 months",
    instructor: "Frank Blue",
    demoVideo: "https://www.youtube.com/embed/4bnJG2UDr9A",
    icon: "https://example.com/icons/azure-icon.png",
    reviews: "1,005+",
  }
];
