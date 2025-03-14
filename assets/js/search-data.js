// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This page lists my professional experience, my educational background, and some interesting projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-nlp-interview-guide-key-concepts-and-techniques",
      
        title: "NLP Interview Guide - Key Concepts and Techniques",
      
      description: "A comprehensive guide to understanding core NLP concepts and techniques, including supervised learning, self-supervised learning, language models, and more.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/nlp-interview-guide/";
        
      },
    },{id: "post-mastering-knapsack-the-dynamic-programming-patterns-you-need-to-know",
      
        title: "Mastering Knapsack The Dynamic Programming Patterns You Need to Know",
      
      description: "Knapsack problems are a cornerstone of dynamic programming, appearing in countless algorithmic challenges. In this guide, we break down the 0-1 Knapsack and Unbounded Knapsack patterns",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/knapsack-like/";
        
      },
    },{id: "post-branching-out-a-deep-dive-into-binary-trees",
      
        title: "Branching Out  A Deep Dive into Binary Trees",
      
      description: "Binary trees are the backbone of countless algorithms. In this blog, we’ll explore their structure, traversal techniques.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/binary-tree/";
        
      },
    },{id: "post-graph-algorithms-deep-dive-key-concepts-and-techniques",
      
        title: "Graph Algorithms Deep Dive Key Concepts and Techniques",
      
      description: "Explore the core concepts and algorithms in graph theory.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/graphs/";
        
      },
    },{id: "post-let-39-s-do-dynamic-programming",
      
        title: "Let&#39;s do Dynamic Programming",
      
      description: "The best dynamic programming study plan (incl. questions)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/dp-study-plan/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-the-rational-male",
          title: 'The Rational Male',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Rational_Male/";
            },},{id: "books-anxious-people",
          title: 'Anxious People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/anxious_people/";
            },},{id: "books-machine-learning-system-design",
          title: 'Machine Learning System Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ml_system_design/";
            },},{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/system-design-alex-xu-1/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-ms-in-computer-science-at-university-of-massachusetts-amherst-sparkles-smile",
          title: 'Started my MS in Computer Science at University of Massachusetts Amherst. :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-started-working-as-a-researcher-at-umass-bionlp",
          title: 'Started working as a Researcher at UMass BioNLP',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-started-working-as-a-graduate-student-researcher-at-spotify",
          title: 'Started working as a Graduate Student Researcher at Spotify',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-emotion-based-style-transfer",
          title: 'Emotion based Style Transfer',
          description: "CS 682 course project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-prompt-score",
          title: 'Prompt Score',
          description: "CS 685 course project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-advanced-camouflaged-object-detection-in-limited-data-setting",
          title: 'Advanced Camouflaged Object Detection in Limited Data Setting',
          description: "CS 670 course project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%68%75%6C%73%61%78%65%6E%61@%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/raahulsaxena", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/raahulsaxena", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
